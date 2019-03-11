import React from "react";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import saveAs from "file-saver";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import * as deepmerge from 'deepmerge'
import {
  withStyles,
  Grid,
  Tooltip,
  FormControl,
  TextField
} from "@material-ui/core";
import styles from "./ChefConfigurations.styles";
const Mustache = require("mustache");


class ChefConfigurations extends React.Component {
  state = {
    roleName: '',
    environmentName: '',
    roleReady: false
  };
  cookbookRef = null;
  environmetDataRef = null;
  setCookBookState = (status) => {
    this.setState({roleReady: this.state.roleName && status})
  }
  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value,
    });
  };

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
      chefCookBookTemplate,
      chefEnvironmentTemplate,
      selectedItems
    } = this.props;
    let attrList = {
      name: null,
      description: "",
      json_class: "Chef::Environment",
      chef_type: "environment",
      default_attributes: {}
    };
    const {roleName, environmentName ,roleReady} = this.state;
    return (
      <div className={classnames(className, classes.root)}>
        <Grid container justify="center" spacing={32}>
           <Grid item xs={6}>
              <Grid item xs={12}>
               <Typography variant="h2" className={classes.heading}>
                  Enter Details
              </Typography>
              <Grid item  xs={12} className={classes.contentArea}>
              <FormControl className={classes.formControl}>
              <TextField
                  error= {(Object.keys(selectedItems).length && !roleName) ? true : false}
                  id="cookbook-name"
                  label="Enter role name"
                  className={classes.textField}
                  value={this.state.roleName}
                  onChange={this.handleChange('roleName')}
                  margin="normal"
              />
              <TextField
                  error= {(Object.keys(selectedItems).length && !environmentName) ? true : false}
                  id="cookbook-name"
                  label="Enter Environment name"
                  className={classes.textField}
                  value={this.state.environmentName}
                  onChange={this.handleChange('environmentName')}
                  margin="normal"
              />
              {/* <InputLabel htmlFor="selectedRole" className={classes.title}>Select Role</InputLabel>
              <Select
                className={classes.selectBox}
                value={this.state.selectedRole}
                onChange={this.handleChange('selectedRole')}
                inputProps={{
                  name: "selectedRole",
                  id: "selectedRole"
                }}
            >
              <MenuItem value=""><em>None</em></MenuItem>              
              {Object.keys(rolesData).map(role => (
                <MenuItem key={rolesData[role][0].RoleName} value={rolesData[role][0].RoleName}>
                {rolesData[role][0].RoleName}
                </MenuItem>
              ))}
            </Select> */}
            <div className={classes.alignRight}>
            <Button variant="contained" 
              color="primary" 
              className={classes.btnDone}
              onClick={() => {
                  this.setCookBookState(true)
              }}>
              Done
            </Button>
            </div>
          </FormControl>
          </Grid>
        </Grid>    
           </Grid>
           <Grid item xs={6}>
              <Grid item xs={12}>
              <Typography variant="h2" className={classes.heading}>
                  Effective Role
              </Typography>
              <Grid item xs={12} className={classes.contentArea}>
              <div className={classes.alignRight}>
               <Tooltip title= "copy file" placement="top">
               <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          (!Object.keys(selectedItems).length || !this.state.roleReady) ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("ChefCookBook_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
               </Tooltip>
               <Tooltip title= "save file" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          classes.alignRight,
                          (!Object.keys(selectedItems).length || !this.state.roleReady) ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.cookbookRef.innerText, `role_${roleName}.json`);
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
                  className={classes.code}
                  id ="ChefCookBook_code"
                  ref={element => (this.cookbookRef = element)}
                >
                {chefCookBookTemplate
                ? Mustache.render(chefCookBookTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      cookbookData: {nameIdentifier: roleName},
                      roleAndRecipe: selectedItems[key].reduce(
                        (accu, item, index, src) =>
                          {
                          Object.keys(item.default_attributes[0]).map((data, index)=>{
                            attrList.name = environmentName;
                            attrList.description = "environemt details for " + environmentName;
                            if(!attrList["default_attributes"][data]){
                              attrList["default_attributes"][data] = item.default_attributes[0][data];
                            }
                            else {
                              if((typeof attrList["default_attributes"][data]) === "object")
                                attrList["default_attributes"][data] = deepmerge(attrList["default_attributes"][data],item.default_attributes[0][data]);    
                            }
                          })
                          return Array.isArray(item.Command)
                            ? [...accu, `"${[...item.Command]}"${src.length > index+1 ? "," : ""}`]
                            : typeof item.Command === "string"
                              ? [...accu, `"${[...item.Command]}"${src.length > index+1 ? "," : ""}`]
                              : [...accu]}
                              ,
                              []
                      ),
                      isStageVisible: roleReady
                    }))
                  })
                : null}
            </pre>
            </Grid>
              </Grid>  
              <Grid item xs ={12}>
                <Typography variant="h2" className={classes.heading}>
                  Effective Environment File
               </Typography>
               <Grid item xs={12} className={classes.contentArea}>
               <div className={classes.alignRight}>
               <Tooltip title= "copy file" placement="top">
               <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          (!Object.keys(selectedItems).length || !this.state.roleReady) ? classes.hide : null
                  )}
                  onClick={() => {
                    this.copyFunction("ChefEnvironment_code");
                  }}
              >
              <FileCopyIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
               </Tooltip>
               <Tooltip title= "save file" placement="top">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classnames(
                          classes.btnSave,
                          classes.alignRight,
                          (!Object.keys(selectedItems).length || !this.state.roleReady) ? classes.hide : null
                  )}
                  onClick={() => {
                    this.download(this.environmetDataRef.innerText, `env_${environmentName}.json`)
                  }}
              >
              <SaveIcon className={classes.btnIcon} fontSize= "small"/>
            </Button>
            </Tooltip>
            </div>
              <pre
                  className={classes.code}
                  id ="ChefEnvironment_code"
                  ref={element => (this.environmetDataRef = element)}
                >
                {chefEnvironmentTemplate
                ? Mustache.render(chefEnvironmentTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      variablesData: JSON.stringify(attrList, null, 4),
                      isStageVisible: roleReady
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

export default withStyles(styles)(ChefConfigurations);
