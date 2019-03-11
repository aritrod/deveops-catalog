import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classnames from "classnames";
import saveAs from "file-saver";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import styles from "./Configurations.styles";

const Mustache = require("mustache");

class Configurations extends React.Component {
  state = {
    expanded: null,
    selectedItems: this.props.selectedItems
  };

  pipelineRef = null;
  configRef = null;

  componentWillReceiveProps(nextProps) {
    const { selectedItems } = this.props;
    if (nextProps.selectedItems && selectedItems !== nextProps.selectedItems) {
      const items = nextProps.selectedItems.Default || [];
      const segregatedItems = items.reduce(
        (accu, item) => ({
          ...accu,
          [item.Stage]: accu[item.Stage] ? [...accu[item.Stage], item] : [item]
        }),
        {}
      );
      this.setState({ selectedItems: segregatedItems });
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  download = (content, filename = "file") => {
    if (!content) return;
    var blob = new Blob([content]);
    saveAs(blob, filename);
  };

  render() {
    const {
      className,
      classes,
      usedConfigs,
      pipelineTemplate
      // configTemplate
    } = this.props;
    const { expanded, selectedItems } = this.state;
    let previousImageList = ["jnlp"];
    // let DefaultImage = ["- name: jnlp", "  image: registry-proxy.lbg.eu-gb.mybluemix.net/mm-mlp/jnlp-slave:3.23-1-alpine", "  ttyEnabled: true"]
    return (
      <div className={classnames(className, classes.root)}>
        <Typography variant="h2" className={classes.heading}>
          Configurations
        </Typography>
        <ExpansionPanel
          expanded={expanded === "config"}
          onChange={this.handleChange("config")}
        >
          <ExpansionPanelSummary className={classes.accordianTitle} expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.subHeading} variant="h3">
              Config
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {Object.keys(usedConfigs).map(key => (
              <a
                key={key}
                href={usedConfigs[key]}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                {key}
              </a>
            ))}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "pipeline"}
          onChange={this.handleChange("pipeline")}
        >
          <ExpansionPanelSummary className={classes.accordianTitle} expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.subHeading} variant="h3">
              Pipeline
            </Typography>
          </ExpansionPanelSummary>
          <div className={classes.alignRight}>
          <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnSave}
              onClick={() => {
                this.download(this.pipelineRef.innerText, "Jenkinsfile");
              }}
            >
              <SaveIcon className={classes.btnIcon} />
              Save
            </Button>
            </div>
          <ExpansionPanelDetails className={classes.details}>
            <pre
              className={classes.code}
              ref={element => (this.pipelineRef = element)}
            >
              {pipelineTemplate
                ? Mustache.render(pipelineTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      name: key,
                      commands: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.Command)
                            ? [...accu, ...item.Command]
                            : typeof item.Command === "string"
                              ? [...accu, item.Command]
                              : [...accu],
                        []
                      ),
                      globals: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.Global)
                            ? [...accu, ...item.Global]
                            : typeof item.Global === "string"
                              ? [...accu, item.Global]
                              : [...accu],[]
                      ),
                      agent: selectedItems[key].find(item => !!item.StageAgent)
                        ? selectedItems[key].find(item => !!item.StageAgent)
                            .StageAgent
                        : undefined,
                      imageList : selectedItems[key].reduce(
                        (accu, item) => {
                          var imageName = item.imageList && item.imageList.filter(data => data.indexOf("name")>0);
                          imageName = imageName && imageName[0] && (imageName[0].split(":")[1]).trim();
                          var isValidImage = imageName ? ((previousImageList.indexOf(imageName) < 0) ? true : false) : false;
                          isValidImage && previousImageList.push(imageName);
                          var newData = isValidImage ? item.imageList : [];
                          return (Array.isArray(item.imageList)
                            ? [...accu, ...newData]
                            : typeof item.imageList === "string"
                              ? [...accu, ...newData]
                              : [...accu])
                        },[]
                      ),
                      environments: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.Environment)
                            ? [...accu, ...item.Environment]
                            : typeof item.Environment === "string"
                              ? [...accu, item.Environment]
                              : [...accu],
                        []
                      ),
                      libraries: selectedItems[key].map(item => ({
                        identifier: item.Library,
                        remote: item["Github Repo"]
                      })),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length,
                    }))
                  })
                : null}
            </pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
export default withStyles(styles)(Configurations);
