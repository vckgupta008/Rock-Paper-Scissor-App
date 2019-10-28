import React, { Component } from "react";
import ROCK_ICON from "../../assets/images/rock.png";
import PAPER_ICON from "../../assets/images/paper.png";
import SCISSOR_ICON from "../../assets/images/scissor.png";
import "./playMode.scss";

/**
 * @function PlayModeContainer
 * @description Renders the container to play the game. 
 * Player vs Computer mode - Player has the option to select any of the option
 * Computer vs Computer mode - Computer selects random option 
 * @author Vicky Gupta
 */

class PlayModeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null, timer: 0 };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedPlayMode &&
      prevProps.gameStart !== this.props.gameStart &&
      this.props.gameStart
    ) {
      this.startTimer();
      this.setState({ selectedOption: null })
      if (this.props.selectedPlayMode === "computer") {
        const selectorAarray = ["rock", "paper", "scissor"];
        this.setState({
          selectedOption: selectorAarray[Math.floor(Math.random() * 3)]
        });
      }
    }
  }

  selectOption = val => {
    this.setState({
      selectedOption: val
    });
  };

  startTimer = () => {
    for (let k = 5; k >= 0; k--) {
      (function(i, _this) {
        setTimeout(function() {
          _this.setState({ timer: 5 - i }, () => {
            if (_this.state.timer === 0) {
              _this.props.onSelectChoice(_this.state.selectedOption);
            }
          });
        }, i * 1000);
      })(k, this);
    }
  };

  render() {
    const { selectedPlayMode } = this.props;
    const { selectedOption, timer } = this.state;
    return (
      <div className="play-mode-container">
        <div className="play-mode-timer">
          <div className="play-mode-time">{timer}</div>
          <div className="play-mode-timer-text">Timer</div>
        </div>
        <div className="play-mode-player">
          <div className="play-mode-player-name">Computer</div>
          <hr />
          <div className="play-mode-player-name">Player</div>
        </div>
        <div className="selected-option-text">
          {selectedOption
            ? `${selectedOption} is selected by ${selectedPlayMode}`
            : "Choose your move"}
        </div>
        <div className="play-mode-selectors">
          <img
            className={`rock ${selectedOption === "rock" ? "selected" : ""}`}
            src={ROCK_ICON}
            alt="rock-icon"
            onClick={() => this.selectOption("rock")}
          />
          <img
            className={`paper ${selectedOption === "paper" ? "selected" : ""}`}
            src={PAPER_ICON}
            alt="paper-icon"
            onClick={() => this.selectOption("paper")}
          />
          <img
            className={`scissor ${
              selectedOption === "scissor" ? "selected" : ""
            }`}
            src={SCISSOR_ICON}
            alt="scissor-icon"
            onClick={() => this.selectOption("scissor")}
          />
        </div>
      </div>
    );
  }
}

export default PlayModeContainer;
