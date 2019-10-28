import React from "react";
import "./selectMode.scss";

/**
 * @function SelectModeContainer
 * @description Renders two choices - To play as a player or computer
 * @author Vicky Gupta
 */
const SelectModeContainer = ({ onSelectMode }) => {
  return (
    <div className={`select-mode-container`}>
      <div className="select-play-text">Select play mode</div>
      <div className="select-play-button-group">
        <button onClick={() => onSelectMode("player")}>
          Player VS Computer
        </button>
        <button onClick={() => onSelectMode("computer")}>
          Computer VS Computer
        </button>
      </div>
    </div>
  );
};

export default SelectModeContainer;