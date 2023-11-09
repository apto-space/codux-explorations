export interface RecencyScoreProps {
    className?: string;
    children?: React.ReactNode;
}
import {useTransition, useSpring, animated} from "@react-spring/web"
import {useEffect, useState} from "react"
import {A} from "@mobily/ts-belt"

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore = ({ one_to_three: one_to_three_, animate }: { one_to_three: number, animate?: boolean }) => {
//   const [isOpen, setIsOpen] = useState(false);
console.log('input', one_to_three_)
  const [one_to_three, setNum] = useState(animate ? 1 : one_to_three_)

  useEffect(() => {setNum(one_to_three_)}, [one_to_three_])
  useEffect(() => {
    if (animate) {
    A.range(1, one_to_three_).forEach((num) => setTimeout(() => setNum(num) , (num-1) * 700))
      
    }
    
  }, [animate, one_to_three_])

  return (
    <button
    style={{transitionDuration: "700ms"}}
      className={` ${scoreColor(
        one_to_three
      )} flex shrink-0 items-center gap-[4px] rounded-full bg-gray-50 px-[12px] py-[10px] text-center transition-all`}
    >
      <div className="h-[6px] w-[6px] rounded-full bg-[currentColor] animate-pulse"
      
      style={{animationIterationCount: "1"}} key="1"></div>
      <div
      style={{animationIterationCount: "1"}} key="2"
        className={`h-[6px] w-[6px] rounded-full bg-[currentColor] ${
          one_to_three < 2 ? "opacity-50 " : "animate-pulse once"
        }`}
      ></div>
      <div key="3"
        className={`h-[6px] w-[6px] rounded-full bg-[currentColor] ${
          one_to_three < 3 ? "opacity-50 " : "animate-pulse once"
        }`}

      style={{animationIterationCount: "1"}}
      ></div>
    </button>
  );

};


const scoreColor = (score: number) => {
  if (score == 0) {
    return "text-violet-400 bg-violet-100";
  } else if (score == 3) {
    return "text-green-400 bg-green-100";
  } else if (score == 2) {
    return "text-blue-400 bg-blue-100";
  } else if (score == 0) {
    return "text-y-400 bg-y-100";
  } else if (score == 1) {
    return "text-orange-400 bg-orange-100";
  } else if (score == 1) {
    return "text-gray-400 bg-gray-100";
  }
  return "";
};
