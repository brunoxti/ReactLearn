import React, { useRef, useState } from "react";
import HomeView from "./HomeView";

const HomeController = () => {
  const [count, setCount] = useState<number>(0);
  const [statusPlay, setStatusPlay] = useState<number>(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const onStart = () => {
    timer.current = setInterval(() => {
      setStatusPlay(1);
      setCount((count) => count + 1);
    }, 1000);
  };

  const onPause = () => {
    setStatusPlay(2);
    clearInterval(timer.current as NodeJS.Timeout);
  };

  const onStop = () => {
    setCount(0);
    setStatusPlay(0);
    clearInterval(timer.current as NodeJS.Timeout);
  };

  return (
    <HomeView
      count={count}
      statusPlay={statusPlay}
      onStart={onStart}
      onPause={onPause}
      onStop={onStop}
    />
  );
};

export default HomeController;