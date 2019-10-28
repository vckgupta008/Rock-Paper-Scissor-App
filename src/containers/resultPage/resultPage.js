import React, { Component } from "react";
import ROCK_ICON from "../../assets/images/rock.png";
import PAPER_ICON from "../../assets/images/paper.png";
import SCISSOR_ICON from "../../assets/images/scissor.png";
import "./resultPage.scss";

/**
 * @function ResultPageContainer
 * @description Renders the results of the game. Also gives the option to play again or change the game mode
 * @author Vicky Gupta
 */
class ResultPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: null
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.userChoice &&
      this.props.userChoice !== prevProps.userChoice
    ) {
      this.generateRandomChoice();
    }
  }

  //Logic to randomly select option by Computer
  generateRandomChoice = () => {
    const selectorAarray = ["rock", "paper", "scissor"];
    this.setState({
      computerChoice: selectorAarray[Math.floor(Math.random() * 3)]
    });
  };

  //Logic to compute result
  calculateWinner = () => {
    const { userChoice } = this.props;
    const { computerChoice } = this.state;
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissor") {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    } else if (userChoice === "scissor") {
      if (computerChoice === "rock") {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    }
  };

  render() {
    const { userChoice, playAgain, changeMode } = this.props;
    const { computerChoice } = this.state;
    return (
      <div className={`result-page-container ${userChoice ? "" : "inactive"}`}>
        <div className="result-page-show-selector">
          {userChoice &&
            (computerChoice === "rock" ? (
              <img src={ROCK_ICON} alt="rock-icon" />
            ) : computerChoice === "paper" ? (
              <img src={PAPER_ICON} alt="paper-icon" />
            ) : computerChoice === "scissor" ? (
              <img className="scissor" src={SCISSOR_ICON} alt="scissor-icon" />
            ) : (
              ""
            ))}
        </div>
        <div className="result-text">{this.calculateWinner()}</div>
        {/* You Win TIE */}
        <div className="result-page-button-group">
          <button onClick={() => playAgain()}>Play Again</button>
          <button onClick={() => changeMode()}>Change Mode</button>
        </div>
        <div className="result-page-your-selector">
          {userChoice === "rock" ? (
            <img src={ROCK_ICON} alt="rock-icon" />
          ) : userChoice === "paper" ? (
            <img src={PAPER_ICON} alt="paper-icon" />
          ) : userChoice === "scissor" ? (
            <img className="scissor" src={SCISSOR_ICON} alt="scissor-icon" />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ResultPageContainer;