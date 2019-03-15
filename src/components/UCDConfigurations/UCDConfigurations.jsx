import React from "react";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import saveAs from "file-saver";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import MaxIcon from "@material-ui/icons/ExpandMore";
import MinIcon from "@material-ui/icons/ExpandLess";
import store from '../../store/ucd-ci-store.js';
import compose from 'recompose/compose';
import {connect} from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import DialogBox from '../Dialog'
import {
  withStyles,
  Grid,
  Button,
  Tooltip,
  TextField,
  Collapse
} from "@material-ui/core";
import styles from "./UCDConfigurations.styles";
const Mustache = require("mustache");
const yaml = require('js-yaml');

class UCDConfigurations extends React.Component {
  state = {
    expanded: null,
    activePanel: "appDetails",
    Dialog_Env_Open: false,
    Dialog_Comp_Open: false,
    previewClick: false
  };
  ucdCIRef = null;
  jenkinsRef = null;
  constructor(){
    super();
    // this.updateStoreValue('INITIALIZE_STATES');
  }
  download = (content, filename = "file") => {
    if (!content) return;
    var blob = new Blob([content]);
    saveAs(blob, filename);
  };
  onSubmit(event){
    debugger;
    event.preventDefault();
    let action = document.activeElement.textContent;
    let states =store.getState().toJS();
    switch (action) {
      case "Preview UCD_CI.YAML": 
      case "Refresh UCD_CI.YAML": 
      return this.setState({previewClick: true})
      case "Download ucd_ci.yaml": 
      return  this.download(this.ucdCIRef.innerText, "ucd_ci.yaml");;
      case "Download Jenkins File": 
      return  this.download(Mustache.render(this.props.UCDJenkins), "Jenkinsfile");
      case "Download Process.Json": 
      return  this.download(Mustache.render(this.props.UCDProcessTemplate,{
        "selectedItems": {
          appName: states && states.app_Name,
          componentName: states && states.components[0].name
        },
        "isStageVisible": true
      }), "process.json");
      default:
      return  console.log("no file to Download");
    }

  }
  
  handleClickOpen = (section) => {
    if(section === "components"){
      this.setState({
        Dialog_Comp_Open: true
      });
    }
    else {
      this.setState({
        Dialog_Env_Open: true
      });
    }
  };

  handleDialogClose = value => {
    this.setState({ selectedValue: value, Dialog_Comp_Open: false, Dialog_Env_Open: false });
  };

  handleDialogDone = (details) => {
    let {properties, section} = details
    this.updateStoreValue({
      type: 'ADD_REMOVE_PROPERTIES',
      payload: {
        properties, 
        section,
        action: "add"
      }
    });
    this.handleDialogClose(null);  
  };

  handleChange = (key, section, index, event) => {
    // this.updateStoreValue('UPDATE_UCD_STORE_VALUE',fieldKey, section, index , event.target.value);
    this.updateStoreValue({
      type: 'UPDATE_UCD_STORE_VALUE',
      payload: {
        key, 
        section, 
        index, 
        value : event.target.value
      }
    });
  };
addUpdateArray = (action, section, index, event) =>{
    this.updateStoreValue({
      type: 'ADD_UPDATE_ARRAY_ENTRY',
      payload: {
        section, 
        index , 
        action
      }
    });
  }
 copyFunction =(elem) => {
    const copyText = document.getElementById(elem).textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.getElementById(elem).append(textArea);
    textArea.select();
    document.execCommand("copy");
  }
updateStoreValue(details) {
    if(!details.type) return false;
    this.setState({previewClick: false});
    store.dispatch( details );
  }
textBoxes(env, classes, envIndex) {
  return Object.keys(env).map((prop, i)=> {
      if (typeof env[prop] === 'string'){
      return ( <div key={i}>
        <TextField
          required
          label={`Enter value of ${prop}`}
          className={classes.textField}
          value={env[prop]}
          onChange={this.handleChange.bind(this, prop, 'environments',envIndex)}
          margin="normal"
        />
  </div>)
    }
    else {
      return this.textBoxes(env[prop], classes);
    }
  })
}
createTextBoxs(obj, classes){
  return obj.map((env, envIndex)=> {
    return(
      <div key= {envIndex}>
      {this.textBoxes(env, classes, envIndex)}
      <Tooltip title= "delete environment" placement="top">
            <Button
            variant="contained"
            color="primary"
            size="small"
            className={classnames(
                  classes.btnSave
            )}
            onClick={() => {
            this.addUpdateArray('delete', "environments", envIndex);
            }}
            >
            <DeleteIcon className={classes.btnIcon} fontSize= "small"/>
           </Button>
        </Tooltip> 
        </div>
    )}
  )
  }
  togglePanel(panel) {
    panel = (this.state.activePanel === panel) ? "" : panel;
    this.setState({
      activePanel : panel
    })
  }
  render() {
    const {
      classes,
      UCDCITemplate,
      selectedItems
    } = this.props;
    let states = store.getState().toJS();
    return (
<form name= "ucdForm" className={classes.formControl} onSubmit={this.onSubmit.bind(this)}>
    <Grid container spacing={24}>
            <Grid item xs={6}>
                <Grid item xs={12}>
                <h2 variant="h2" className={classes.heading}>
                        <Button className={classes.toggleButton} onClick={()=>this.togglePanel("appDetails")}>
                          Team & App Details
                          {this.state.activePanel === "appDetails" ? <MinIcon /> : <MaxIcon />}
                        </Button> 
                    </h2>
                    <Collapse className={classes.collapseWrapper} in={this.state.activePanel==="appDetails"} timeout="auto" unmountOnExit>
                    <Grid item xs={12} className={classes.contentArea}>
                        {Object.keys(states).map((prop, index)=> (typeof states[prop] === "string") ? (
                        <TextField  key={index} required label={`Enter value of ${prop}`} className={classes.textField} value={states[prop]}
                            onChange={this.handleChange.bind(this, prop ,null , null)} margin="normal" />): null )}
                    </Grid>
                    </Collapse>
                </Grid>
                <Grid item xs={12}>
                    <h2 variant="h2" className={classes.heading}>
                        <Button className={classes.toggleButton} onClick={()=>this.togglePanel("envDetails")}>
                            Environments Details
                            {this.state.activePanel === "envDetails" ? <MinIcon /> : <MaxIcon />}
                        </Button> 
                        
                        {this.state.activePanel === "envDetails" && <Tooltip title="Add Properties,(APPLICABLE TO ALL THE ENVIRIMENTS)" placement="top">
                            <Button className={classes.btnAddProp} variant="outlined" color="primary" onClick={()=>
                                {
                                this.handleClickOpen("environments");
                                }}>
                                <AddIcon />
                            </Button>
                        </Tooltip>}
                        <DialogBox viewtype="property" open={this.state.Dialog_Env_Open} onClose={this.handleDialogClose} onDone={this.handleDialogDone}
                            title='Add Properites' sectiontype="environments" />
                    </h2>
                    <Collapse className={classes.collapseWrapper} in={this.state.activePanel==="envDetails"} timeout="auto" unmountOnExit>
                    <Grid item xs={12} className={classes.contentArea}>
                        <Grid item xs={12} className={classes.multiFormControlEnv}>
                            {this.createTextBoxs(states.environments, classes )}
                        </Grid>
                        <div className={classes.alignRight}>
                            <Button variant="contained" color="primary" className={classes.btnAdd} onClick={()=> {
                                this.addUpdateArray('add', 'environments')
                                }}>
                                Add Environment
                            </Button>
                        </div>
                    </Grid>
                    </Collapse>            
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                <h2 variant="h2" className={classes.heading}>
                        <Button className={classes.toggleButton} 
                          onClick={()=>{this.togglePanel("compDetails")}}>
                          Components Details
                          {this.state.activePanel === "compDetails" ? <MinIcon /> : <MaxIcon />}
                        </Button> 
                        {this.state.activePanel === "compDetails" && <Tooltip title="Add Properties,(APPLICABLE TO ALL THE COMPONENTS)" placement="top">
                            <Button className={classes.btnAddProp} variant="outlined" color="primary" onClick={()=>
                                {
                                this.handleClickOpen("components");
                                }}>
                                <AddIcon />
                            </Button>
                        </Tooltip>}
                        <DialogBox viewtype="property" open={this.state.Dialog_Comp_Open} onClose={this.handleDialogClose} onDone={this.handleDialogDone}
                            title='Add Properites' sectiontype="components" />
                    </h2>
                    <Collapse className={classes.collapseWrapper} in={this.state.activePanel==="compDetails"} timeout="auto" unmountOnExit>
                    <Grid item xs={12} className={classes.contentArea}>
                        {states.components.map((component, i)=>{
                        return (
                        <div key= {i} className={classes.multiFormControl}>
                            {Object.keys(component).map((prop,index)=>{
                            return (
                            <TextField key={index} required label={`Enter value of ${prop}`} className={classes.textField} value={component[prop]}
                                onChange={this.handleChange.bind(this, prop, 'components' ,i)} margin="normal" />
                            )
                            })}
                            <Tooltip title="delete component" placement="top">
                                <Button variant="contained" color="primary" size="small" className={classnames(
                                    classes.btnSave )} onClick={()=> {
                                    this.addUpdateArray('delete', "components", i);
                                    }}
                                    >
                                    <DeleteIcon className={classes.btnIcon} fontSize="small" />
                                </Button>
                            </Tooltip>
                        </div>
                        )
                        })
                        }
                        {/* <div className={classes.alignRight}>
                            <Button variant="contained" color="primary" className={classes.btnAdd} onClick={()=> {
                                this.addUpdateArray('add', 'components')
                                }}>
                                Add component
                            </Button>
                        </div> */}
                    </Grid>
                    </Collapse>
                </Grid>
            </Grid>
  </Grid>
  {selectedItems.Default && selectedItems.Default.length > 0  &&
    <Grid container spacing={24}>
    <Grid item xs={6} className={classes.buttonHolder}>
    <Button type="submit" value = "preview ucd_ci" variant="contained" color="primary" className={classes.btnSubmit}>
    {/* onClick={this.actionBtnHandler.bind(this,'ucd_ci','preview', null)} */}
        {this.state.previewClick ? "Refresh UCD_CI.YAML" : "Preview UCD_CI.YAML"}
    </Button>
    <Button type="submit" value = "download ucd_ci" variant="contained" color="primary" className={classes.btnSubmit}
    disabled = {!this.state.previewClick}
    // onClick={this.actionBtnHandler.bind(this,'ucd_ci','download', null)}
    >
        Download ucd_ci.yaml
    </Button>
    </Grid>
    <Grid item xs={6} className={classes.buttonHolder}>
    <Button type="submit" value = "download jenkins file" variant="contained" color="primary" className={classes.btnSubmit}
    disabled = {!this.state.previewClick}
    // onClick={this.actionBtnHandler.bind(this,'jenkins','download',null)}
    >
        Download Jenkins File
    </Button>
    <Button type="submit" value = "download process.json" variant="contained" color="primary" className={classes.btnSubmit}
    disabled = {!this.state.previewClick}
    // onClick={this.actionBtnHandler.bind(this,'processJson','download',{appName: states.app_Name,componentName: states.components[0].name})}
    >
        Download Process.Json
    </Button>
    </Grid>
    <Grid item xs={12}>
    <pre
              className={classes.code}
              id ="ucdCI_code"
              ref={element => (this.ucdCIRef = element)}
            >
              {UCDCITemplate && this.state.previewClick
                ? Mustache.render(UCDCITemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      serverDetails: {
                        serverURL: states.serverURL, 
                        credentials:states.credentials,
                        java_home:states.javahome
                      },
                      cType: {
                        team_name : states.teamName
                      },
                      appDetails: {
                        app_Name:states.app_Name,
                        templateName:states.templateName,
                        team_name:states.teamName, 
                        app_trouxID:states.app_trouxID,
                        app_ContactEmailID:states.app_ContactEmailID,
                        app_onboardingJira:states.app_onboardingJira,
                        app_PRN_ID:states.app_PRN_ID
                      },
                      compDetails: states.components.map((comp,index)=> {
                        return {
                          compName: comp.name,
                          compProps : Object.keys(comp).map((prop,i)=>
                          `${prop}: ${comp[prop]}`
                          )
                        }
                      }),
                      envDetails: states.environments.map((env,index)=> `${env.name}: ${env['templateUsed']}`),
                      addEnvAgents: states.environments.map((env,index)=> `${env.name}: ${env['agent']}`),
                      resourceProperties: states.environments.map((env,index)=> {
                        let envDetails = {};
                        Object.keys(env).map((prop,i)=>
                          {
                            if(["name", "agent", "templateUsed"].indexOf(prop) < 0 && !envDetails[prop])
                            envDetails[prop]=env[prop];
                          }
                          )
                        return {
                          resourceName: env.name,
                          propertDetails : Object.keys(envDetails).map((prop,index)=>{
                            return `${prop}: ${envDetails[prop]}`
                          })
                        }
                      }),
                      componentproperties: states.components.map((comp,index)=> {
                        let compDetails = {};
                        Object.keys(comp).map((prop,i)=>
                          {
                            if(["name","description", "importAutomatically","templateName","useVfs",].indexOf(prop) < 0 && !compDetails[prop])
                            compDetails[prop]=comp[prop];
                          }
                          )
                        return {
                          componentName: comp.name,
                          propertDetails : Object.keys(compDetails).map((prop,index)=>{
                            return `${prop}: ${compDetails[prop]}`
                          })
                        }
                      }),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length,
                    }))
                  })
                : null}
            </pre>
    </Grid>                  
  </Grid>
  }
</form>    
);
}
}


export default compose(
withStyles(styles, {
name: 'UCDConfigurations',
}),
connect(state => state.toJS()),
)(UCDConfigurations);
