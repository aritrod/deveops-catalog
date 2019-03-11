import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
  Grid
} from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

import styles from "./SolutionTab.styles";
import AvailableOptions from "../AvailableOptions";
import SelectedOptions from "../SelectedOptions";
import { move, reorder } from "../../utils/lists";
import Configurations from "../Configurations";
import AnsibleConfigurations from "../AnsibleConfigurations";
import ChefConfigurations from "../ChefConfigurations";
import UCDConfigurations from "../UCDConfigurations"
import { stages } from "../../constants";
class SolutionTab extends React.Component {
  state = {
    selectedArchetype: null,
    availableItems: null,
    selectedItems: {},
    usedConfigs: {},
    droppableBucket: null
  };

  componentWillMount() {
    const { data } = this.props;
    const initialArchType = Object.keys(this.props.data)[0];
    this.setState({
      selectedArchetype: initialArchType,
      availableItems: data[initialArchType]
    });
  }

  handleChange = event => {
    this.setState({
      selectedArchetype: event.target.value,
      availableItems: this.props.data[event.target.value],
      selectedItems: {},
      usedConfigs: {}
    });
  };

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const { availableItems, selectedItems } = this.state;
    const [sourceColumn, sourceBucket] = source.droppableId.split("-");
    const [
      destinationColumn,
      destinationBucket
    ] = destination.droppableId.split("-");
    let sourceColumnItems, destinationColumnItems;

    if (sourceColumn === "available") {
      sourceColumnItems = availableItems;
      destinationColumnItems = selectedItems;
    } else {
      sourceColumnItems = selectedItems;
      destinationColumnItems = availableItems;
    }

    if (sourceColumn === destinationColumn) {
      const rearranged = reorder(
        sourceColumnItems[sourceBucket],
        source.index,
        destination.index
      );
      this.setState(prevState => {
        return sourceColumn === "available"
          ? {
              availableItems: {
                ...prevState.availableItems,
                [sourceBucket]: rearranged
              },
              droppableBucket: null
            }
          : {
              selectedItems: {
                ...prevState.selectedItems,
                [sourceBucket]: rearranged
              },
              droppableBucket: null
            };
      });
    } else {
      const rearranged = move(
        sourceColumnItems[sourceBucket],
        destinationColumnItems[destinationBucket],
        source.index,
        destination.index
      );
      this.setState(prevState => {
        const newUsedConfigs = {...prevState.usedConfigs};
        if (sourceColumn === "available") {
          newUsedConfigs[availableItems[sourceBucket][source.index].Config] = availableItems[sourceBucket][source.index].ConfigPath;
          return {
            availableItems: {
              ...prevState.availableItems,
              [sourceBucket]: rearranged.source
            },
            selectedItems: {
              ...prevState.selectedItems,
              [destinationBucket]: rearranged.destination
            },
            droppableBucket: null,
            usedConfigs: newUsedConfigs
          };
        } else {
          delete 
          newUsedConfigs[selectedItems[sourceBucket][source.index].Config];
          return {
            availableItems: {
              ...prevState.availableItems,
              [destinationBucket]: rearranged.destination
            },
            selectedItems: {
              ...prevState.selectedItems,
              [sourceBucket]: rearranged.source
            },
            droppableBucket: null,
            usedConfigs: newUsedConfigs
          };
        }
      });
    }
  };

  onSelectedItemDelete = (stage, index) => {
    const { selectedItems } = this.state;
    const itemToDelete = { ...selectedItems[stage][index] };
    const splicedSelectedItems = [...selectedItems.Default];
    splicedSelectedItems.splice(index, 1);

    this.setState(prevState => {
      return {
        selectedItems: {
          ...prevState.selectedItems,
          Default: splicedSelectedItems
        },
        availableItems: {
          ...prevState.availableItems,
          [itemToDelete.Stage]: [
            ...prevState.availableItems[itemToDelete.Stage],
            itemToDelete
          ]
        }
      };
    });
  };

  onDragStart = ({ source }) => {
    const { droppableId } = source;
    const bucket = droppableId.split("-")[1];
    this.setState({
      droppableBucket: bucket
    });
  };

  render = () => {
    const {
      classes,
      data,
      currentSol,
      pipelineTemplate,
      ansibleGalaxyTemplate,
      ansiblePlaybookTemplate,
      ansiblePlaycommandsTemplate,
      ansibleVaiablesTemplate,
      chefCookBookTemplate,
      chefEnvironmentTemplate,
      UCDCITemplate,
      UCDCIJSON,
      UCDJenkins,
      UCDProcessTemplate
    } = this.props;
    const {
      selectedArchetype,
      availableItems,
      selectedItems,
      droppableBucket,
      usedConfigs
    } = this.state;
    return (
      <div>
        {currentSol ==="Jenkins" ? (<form className={classes.formWrapper} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="arch" className={classes.title}>Select Archetype</InputLabel>
            <Select
              className={classes.selectBox}
              value={selectedArchetype}
              onChange={this.handleChange}
              inputProps={{
                name: "archetype",
                id: "arch"
              }}
            >
              {Object.keys(data).map(arch => (
                <MenuItem key={arch} value={arch}>
                  {arch}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>) : null}
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
        >
          <Grid container justify="center" spacing={32}>
            <Grid item xs={currentSol ==="Jenkins" ? 4 : 3}>
              <AvailableOptions
                availableItems={availableItems}
                droppableBucket={droppableBucket}
                stages={stages}
                currentSol = {currentSol}
              />
            </Grid>
            <Grid item xs={currentSol ==="Jenkins" ? 4 : 3}>
              <SelectedOptions
                selectedItems={selectedItems}
                droppableBucket={droppableBucket}
                onDeleteClick={this.onSelectedItemDelete}
              />
            </Grid>
            {currentSol ==="Jenkins" ? (<Grid item xs={4}>
              <Configurations
                usedConfigs={usedConfigs}
                selectedItems={selectedItems}
                pipelineTemplate={pipelineTemplate}
              />
            </Grid>): null}
            {currentSol ==="Ansible" ? (<Grid item xs={6}>
              <AnsibleConfigurations
                usedConfigs={usedConfigs}
                selectedItems={selectedItems}
                ansibleGalaxyTemplate = {ansibleGalaxyTemplate}
                ansiblePlaybookTemplate = {ansiblePlaybookTemplate}
                ansiblePlaycommandsTemplate = {ansiblePlaycommandsTemplate}
                ansibleVaiablesTemplate = {ansibleVaiablesTemplate}
              />
            </Grid>): null}
            {currentSol ==="Chef" ? (<Grid item xs={6}>
              <ChefConfigurations
                usedConfigs={usedConfigs}
                selectedItems={selectedItems}
                rolesData = {data.Roles}
                chefCookBookTemplate = {chefCookBookTemplate}
                chefEnvironmentTemplate = {chefEnvironmentTemplate}
              />
            </Grid>): null}
            {currentSol ==="UrbanCode Deploy" ? (<Grid item xs={6}>
              <UCDConfigurations
                usedConfigs={usedConfigs}
                selectedItems={selectedItems}
                UCDCITemplate = {UCDCITemplate}
                UCDCIJSON = {UCDCIJSON}
                UCDJenkins = {UCDJenkins}
                UCDProcessTemplate = {UCDProcessTemplate}
              />
            </Grid>): null}
          </Grid>
        </DragDropContext>
      </div>
    );
  };
}

export default withStyles(styles)(SolutionTab);
