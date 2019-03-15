import React from "react";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import saveAs from "file-saver";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from '@material-ui/core/Tooltip';

import {
  withStyles,
  Grid
} from "@material-ui/core";
import styles from "./AnsibleConfigurations.styles";
const Mustache = require("mustache");

class AnsibleConfigurations extends React.Component {
  state = {
    expanded: null,
    selectedItems: this.props.selectedItems
  };
  effectivePlayCmndsRef = null;
  effectivePlayBookRef = null;
  galaxyRef = null;
  variablesRef = null;
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
  
  download = (content, filename = "file") => {
    if (!content) return;
    var blob = new Blob([content]);
    saveAs(blob, filename);
  };
 copyFunction =(elem) => {
    const copyText = document.getElementById(elem).textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.getElementById(elem).append(textArea);
    textArea.select();
    document.execCommand("copy");
  }
  render() {
    const {
      className,
      classes,
      ansibleGalaxyTemplate,
      ansiblePlaybookTemplate,
      ansiblePlaycommandsTemplate,
      ansibleVaiablesTemplate,
    } = this.props;
    const { selectedItems } = this.state;
    return (
      <div className={classnames(className, classes.root)}>
        <Grid container justify="center" spacing={32}>
            <Grid item xs={6}>
              <Grid item xs={12}>
               <Typography variant="h2" className={classes.heading}>
                  Effective Variables
              </Typography>
              <Grid item xs={12} className={classes.contentArea}>
                <div className={classes.alignRight}>
              <Tooltip title= "save  vars/main.yml" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.variablesRef.innerText, "main.yaml");
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            <Tooltip title= "copy content" placement="top">
            <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("ansibleVaiables_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
              className={classes.code}
              id ="ansibleVaiables_code"
              ref={element => (this.variablesRef = element)}
            >
              {ansibleVaiablesTemplate
                ? Mustache.render(ansibleVaiablesTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      variablesData: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.VarContent)
                            ? [...accu, ...item.VarContent]
                            : typeof item.VarContent === "string"
                              ? [...accu, item.VarContent]
                              : [...accu],
                        []
                      ),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length,
                    }))
                  })
                : null}
            </pre>
              </Grid>
              </Grid>
              <Grid item xs={12}>
              <Typography variant="h2" className={classes.heading}>
                  Effective Galaxy File
              </Typography>
              <Grid item xs={12} className={classes.contentArea}>
              <div className={classes.alignRight}>
              <Tooltip title= "save requirements.yaml" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.galaxyRef.innerText, "requirements.yaml");
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>     
            <Tooltip title= "copy content" placement="top">
            <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("galaxyComamnds_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
              className={classes.code}
              id ="galaxyComamnds_code"
              ref={element => (this.galaxyRef = element)}
            >
              {ansibleGalaxyTemplate
                ? Mustache.render(ansibleGalaxyTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      galaxyComamnds: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.GalaxyImport)
                            ? [...accu, ...item.GalaxyImport]
                            : typeof item.GalaxyImport === "string"
                              ? [...accu, item.GalaxyImport]
                              : [...accu],
                        []
                      ),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length,
                    }))
                  })
                : null}
            </pre>
              </Grid>
              </Grid>
            </Grid>
            <Grid item xs= {6}>
              <Grid item xs={12}>
               <Typography variant="h2" className={classes.heading}>
                  Play Commands
              </Typography>
              <Grid item xs={12} className={classes.contentArea}>
              <div className={classes.alignRight}>
              <Tooltip title= "save deploy.sh" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length  ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.effectivePlayCmndsRef.innerText, "deploy.sh");
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            <Tooltip title= "copy file" placement="top">
            <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("ansiblePlaycommands_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
              className={classes.code}
              id ="ansiblePlaycommands_code"
              ref={element => (this.effectivePlayCmndsRef = element)}
            >
              {ansiblePlaycommandsTemplate
                ? Mustache.render(ansiblePlaycommandsTemplate, {
                    selectedItems: 
                      {
                        isStageVisible: Object.keys(selectedItems).length > 0
                        }})
                : null}
            </pre>
              </Grid>
              </Grid>
              <Grid item xs={12}>
              <Typography variant="h2" className={classes.heading}>
                  Ansible Playbook
              </Typography>
              <Grid item xs={12} className={classes.contentArea}>
              <div className={classes.alignRight}>
              <Tooltip title= "save playbook.yaml" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length  ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.effectivePlayBookRef.innerText, "playbook.yaml");
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            <Tooltip title= "copy content" placement="top">
            <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          !Object.keys(selectedItems).length ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("ansiblePlaybook_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
              className={classes.code}
              id ="ansiblePlaybook_code"
              ref={element => (this.effectivePlayBookRef = element)}
            >
              {ansiblePlaybookTemplate
                ? Mustache.render(ansiblePlaybookTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      rolesData: selectedItems[key].reduce(
                        (accu, item) => {
                         return (Array.isArray(item.RoleName)
                            ? [...accu, ...item.RoleName]
                            : typeof item.RoleName === "string"
                              ? [...accu, "- {role: "+item.RoleName+"}"]
                              : [...accu])
                        },
                        []
                      ),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length,
                    }))
                  })
                : null}
            </pre>
              </Grid>
              </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AnsibleConfigurations);
