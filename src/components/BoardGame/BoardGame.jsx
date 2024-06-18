import './BoardGame.css';
import { ROWS, COLS, CELL } from "../../initGameConfig";

function BoardGame() {

   const cells = [];

   for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
         cells.push(<div className={'boardGame__cell'} />)
      }
   }

   return (
      <div
         style={{width: COLS*CELL, height: ROWS*CELL}}
         className="boardGame">
         {cells}
      </div>
    )
}

export default BoardGame;