import React, { useState } from "react";
import Celebrate from "../celebrate/celebrate";

const Board = () => {
  const [state, setState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turnX, setTurnX] = useState(true);
  const [gameover, setGameover] = useState(false);
  const [winner, setWinner] = useState("");
  const [isTie, setIsTie] = useState(false);

  const checkWinner = () => {
    for (let i = 0; i < state.length; i++) {
      //horizontal winner check
      if (state[i][0] == state[i][1] && state[i][1] == state[i][2]) {
        if (state[i][0] == "X") {
          setGameover(true);
          setWinner("X");
        } else if (state[i][0] == "O") {
          setGameover(true);
          setWinner("O");
        }
      }
    }
    for (let i = 0; i < state.length; i++) {
      //verticle winner check
      if (state[0][i] == state[1][i] && state[1][i] == state[2][i]) {
        if (state[0][i] == "X") {
          setGameover(true);
          setWinner("X");
        } else if (state[0][i] == "O") {
          setGameover(true);
          setWinner("O");
        }
      }
    }
    //diagonal check
    if (
      (state[0][0] == state[1][1] && state[1][1] == state[2][2]) ||
      (state[0][2] == state[1][1] && state[1][1] == state[2][0])
    ) {
        if (state[1][1] == "X") {
          setGameover(true);
          setWinner("X");
        } else if (state[1][1] == "O") {
          setGameover(true);
          setWinner("O");
        }
    }
  };

  const checkTie = () => {
    let count = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(state[i][j]){
                count++;
            }
        }
    }
    if(count == 9){
        setIsTie(true);
    }
  }

  const handleClick = (idx, id) => {
    let copy = [...state];
    {
      if (!copy[idx][id]) {
        if (turnX) {
          copy[idx][id] = "X";
          setTurnX(false);
        } else {
          copy[idx][id] = "O";
          setTurnX(true)
        }
      }
    }
    setState(copy);
    checkWinner();
    checkTie();
    // console.log(winner, "hello", gameover)
  };

  const handleReset = () => {
    setState([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setTurnX(true);
    setGameover(false);
    setWinner("");
    setIsTie(false);
  }

  return (
    <div className="flex flex-col">
      <div className="text-center text-white text-2xl pb-10">
        {gameover ? (
          <p>Winner is : {winner}</p>
        ) : (
          !isTie ? <p>It's {turnX ? "X" : "O"} turn</p> : <p>Match Tied</p>
        )}
      </div>
      {state.map((row, idx) => {
        return (
          <div key={idx} className="flex flex-row">
            {row.map((box, id) => {
              return (
                <div
                  className="py-10 h-24 w-28 text-center border border-gray-400"
                  onClick={() => {
                    !gameover && handleClick(idx, id);
                  }}>
                  {box ? <div className="text-white">{box}</div> : <div></div>}
                </div>
              );
            })}
          </div>
        );
      })}
      {gameover && <Celebrate />}
      {!gameover && (
        <button
          className="my-3 py-3 bg-gray-200 rounded-lg w-24 m-auto text-center"
          onClick={handleReset}>
          Reset
        </button>
      )}
      {gameover && (
        <button
          className="z-[1000] my-3 py-3 bg-gray-200 rounded-lg w-24 m-auto text-center"
          onClick={handleReset}>
          Restart
        </button>
      )}
    </div>
  );
};

export default Board;
