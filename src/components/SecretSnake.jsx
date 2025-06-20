import React, { useEffect, useRef, useState } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];
const INITIAL_DIR = { x: 1, y: 0 };
const SPEED = 100;

function getRandomFood(snake) {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

const SecretSnake = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [dir, setDir] = useState(INITIAL_DIR);
  const [food, setFood] = useState(getRandomFood(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const moveRef = useRef(dir);
  const running = useRef(true);

  useEffect(() => {
    moveRef.current = dir;
  }, [dir]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!running.current) return;
      switch (e.key) {
        case "ArrowUp":
          if (moveRef.current.y !== 1) setDir({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (moveRef.current.y !== -1) setDir({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (moveRef.current.x !== 1) setDir({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (moveRef.current.x !== -1) setDir({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + moveRef.current.x, y: prev[0].y + moveRef.current.y };
        // Check wall collision
        if (
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setGameOver(true);
          running.current = false;
          return prev;
        }
        let newSnake = [head, ...prev];
        // Check food
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood(getRandomFood(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, SPEED);
    return () => clearInterval(interval);
  }, [food, gameOver]);

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE);
    setDir(INITIAL_DIR);
    setFood(getRandomFood(INITIAL_SNAKE));
    setScore(0);
    setGameOver(false);
    running.current = true;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-2">🐍 Secret Snake Game</h1>
      <p className="mb-4">Use arrow keys to play. Score: <span className="font-mono">{score}</span></p>
      <div
        className="relative"
        style={{
          width: GRID_SIZE * 20,
          height: GRID_SIZE * 20,
          background: "#181028",
          border: "4px solid #915EFF",
          boxShadow: "0 0 40px #915EFF55",
        }}
      >
        {/* Snake */}
        {snake.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-sm"
            style={{
              left: s.x * 20,
              top: s.y * 20,
              width: 20,
              height: 20,
              background: i === 0 ? "#E1306C" : "#fff",
              border: i === 0 ? "2px solid #fff" : "1px solid #915EFF",
              zIndex: 2,
            }}
          />
        ))}
        {/* Food */}
        <div
          className="absolute rounded-full"
          style={{
            left: food.x * 20,
            top: food.y * 20,
            width: 20,
            height: 20,
            background: "#915EFF",
            border: "2px solid #fff",
            zIndex: 1,
          }}
        />
        {/* Overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-10">
            <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
            <p className="mb-4">Final Score: {score}</p>
            <button
              className="bg-[#915EFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 transition"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        )}
      </div>
      <p className="mt-6 text-xs text-gray-400">Press the hidden icon in the footer or type "snake" to find this page again!</p>
    </div>
  );
};

export default SecretSnake; 