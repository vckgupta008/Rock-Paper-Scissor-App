import React, { Component } from "react";
import SelectModeContainer from "../selectMode/selectMode";
import PlayModeContainer from "../playMode/playMode";
import ResultPageContainer from "../resultPage/resultPage";
import "./homePage.scss";

/**
 * @function HomePage
 * @description Render Home page containing layout for the game.
 * It has 3 containers(Game mode container, Play game container, Result Container)
 * @author Vicky Gupta
 */
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playMode: "",
      selectedOption: "",
      gameStart: false
    };
  }

  /*Select the mode of the game- Computer Vs Computer or Player Vs Computer and trigger the game*/
  onSelectPlayMode = type => {
    this.setState({
      playMode: type,
      selectedOption: "",
      gameStart: true
    });
  };

  /**function to select the option - ROCK, PAPER, SCISSOR */
  onSelectChoice = selectedOption => {
    this.setState({
      selectedOption,
      gameStart: false
    });
  };

  render() {
    const { playMode, selectedOption, gameStart } = this.state;
    return (
      <div className="app-container">
        <SelectModeContainer
          onSelectMode={this.onSelectPlayMode}
          selectedPlayMode={playMode}
          userChoice={selectedOption}
        />
        <PlayModeContainer
          selectedPlayMode={playMode}
          onSelectChoice={this.onSelectChoice}
          gameStart={gameStart}
        />
        <ResultPageContainer
          userChoice={selectedOption}
          playAgain={() => this.onSelectPlayMode(playMode)}
          changeMode={() =>
            this.onSelectPlayMode(playMode === "player" ? "computer" : "player")
          }
        />
      </div>
    );
  }
}

export default HomePage;