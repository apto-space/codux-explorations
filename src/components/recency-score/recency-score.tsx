export interface RecencyScoreProps {
    recency_score: number;
    refreshed?: boolean;
}
import {useTransition, useSpring, animated} from "@react-spring/web"
import {useEffect, useState} from "react"
import {A} from "@mobily/ts-belt"

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore = ({ recency_score: one_to_three_, refreshed }: RecencyScoreProps) => {
  const animate = refreshed

  const [one_to_three, setNum] = useState(one_to_three_)

  useEffect(() => {setNum(one_to_three_)}, [one_to_three_, animate])
  useEffect(() => {
    if (animate) {
        A.range(one_to_three_, 3).forEach((num) => setTimeout(() => setNum(num) , (num-one_to_three_) * 200))
    }
    
  }, [animate, one_to_three_, refreshed])

  return (
    <button
    style={{transitionDuration: "700ms"}}
      className={` ${scoreColor(
        refreshed ? 3 : one_to_three_
      )} flex shrink-0 items-center gap-[4px] rounded-full bg-gray-50 px-[12px] py-[10px] text-center transition-all`}
    >
    <style>{`
    @keyframes pop{
  50%  {transform: scale(1.5);}
}
.pop {
  animation: pop 0.3s linear 1;

}
    `}</style>
      <div className={`h-[6px] w-[6px] rounded-full bg-[currentColor] ${
          one_to_three < 1 ? "opacity-50 " : (refreshed ? "pop": "")
        }`}
      
      style={{animationIterationCount: "1"}} key="1"></div>
      <div
      style={{animationIterationCount: "1"}} key="2"
        className={`h-[6px] w-[6px] rounded-full bg-[currentColor] ${
          one_to_three < 2 ? "opacity-50 " : (refreshed ? "pop": "")
        }`}
      ></div>
      <div key="3"
        className={`h-[6px] w-[6px] rounded-full bg-[currentColor] ${
          one_to_three < 3 ? "opacity-50 " : (refreshed ? "pop": "")
        }`}

      style={{animationIterationCount: "1"}}
      ></div>
    </button>
  );

};


const scoreColor = (score: number) => {
  if (score == 0) {
    return "text-gray-400 bg-gray-100";
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
