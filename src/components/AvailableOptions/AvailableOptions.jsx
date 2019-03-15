import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function AvailableOptions({
  className,
  availableItems,
  droppableBucket,
  stages,
  currentSol
}) {
  return (
    <OptionsSelector
      className={className}
      items={availableItems}
      title= {currentSol==="Chef" ? "Available Cookbooks" : "Available Options"}
      type="available"
      droppableBucket={droppableBucket}
      stages={stages}
    />
  );
}

export default AvailableOptions;
