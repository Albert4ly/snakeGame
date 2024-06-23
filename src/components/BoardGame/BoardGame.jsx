import { useRef, useEffect } from 'react';
import { snake } from '../Draw/DrawSnake';

import './BoardGame.css';

const BoardOfGame = (props) => {

   const canvasRef = useRef();

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")
     snake

   })

   return (
      <div>
         <canvas className="boardOfGame" ref={canvasRef} width={750} height={420} />
      </div>
   )
   
}

export default BoardOfGame;