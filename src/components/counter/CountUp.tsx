import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/* 
    Diqqat: bu komponent sizga kerak emas! 
    Counter.tsx ga o'ting
*/

interface ICountUpProps {
  start: number;
  end: number;
  duration: number;
}

const CountUp: React.FC<ICountUpProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const stepTime: number = Math.abs(Math.floor(duration / (end - start)));
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true);
    }
  }, [inView, isCounting]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isCounting && count < end) {
      timer = setInterval(() => {
        setCount((prevCount: number) => prevCount + 1);
      }, stepTime);
    }
    return () => clearInterval(timer);
  }, [isCounting, count, end, stepTime]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
