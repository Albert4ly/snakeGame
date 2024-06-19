import { useRef } from 'react';
import './BoardGame.css';

const BoardOfGame = () => {

   const canvasRef = useRef();

   return (
      <div>
         <canvas className="boardOfGame" ref={canvasRef} width={750} height={420} />
      </div>
   )
   
}

export default BoardOfGame;