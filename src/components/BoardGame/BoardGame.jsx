import { useRef, useEffect } from 'react';
import './BoardGame.css';

const BoardOfGame = () => {

   const canvasRef = useRef();

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")
   })

   return (
      <div>
         <canvas className="boardOfGame" ref={canvasRef} width={750} height={420} />
      </div>
   )
   
}

export default BoardOfGame;