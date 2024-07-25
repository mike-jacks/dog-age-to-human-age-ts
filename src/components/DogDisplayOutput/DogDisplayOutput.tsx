import { useEffect, useState } from "react";
import { convertHumanYearsToDogYears, typeOutDisplayText } from "../../functions/functions";
import pugTwo from "./../../assets/dog/pug_dog_2.png";
import speechBubbleTwo from "./../../assets/speech_bubble/speech_bubble_2.svg";
import styles from "./DogDisplayOutput.module.css";

const scaleInBubbleTwoStyle = styles["animate-scaleInBubbleTwo"];
const scaleOutBubbleTwoStyle = styles["animate-scaleOutBubbleTwo"];

type DogDisplayOutputProps = {
  dogAgeInHumanYears: string;
  outputPrompt: React.ReactNode;
  setOutputPrompt: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  isInputDisplayComplete: boolean;
  showOutputBubble: boolean;
  setShowOutputBubble: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DogDisplayOutput({
  dogAgeInHumanYears,
  outputPrompt,
  setOutputPrompt,
  isInputDisplayComplete,
  showOutputBubble,
  setShowOutputBubble,
}: DogDisplayOutputProps) {
  const [scaleBubbleAnimation, setScaleBubbleAnimation] = useState<string>(styles.hidden);
  const [isOutputBubbleComplete, setIsOutputBubbleComplete] = useState<boolean>(false);
  const humanAgeInDogYears = convertHumanYearsToDogYears(Number(dogAgeInHumanYears), true);

  useEffect(() => {
    if (isInputDisplayComplete && dogAgeInHumanYears !== "") {
      setScaleBubbleAnimation(scaleInBubbleTwoStyle);
      setTimeout(() => {
        setShowOutputBubble(true);
      }, 1000); // Short delay to sync with input completion
      setTimeout(() => {
        setIsOutputBubbleComplete(true);
      }, 3500);
    } else if (dogAgeInHumanYears === "") {
      setScaleBubbleAnimation(scaleOutBubbleTwoStyle);
      setShowOutputBubble(false);
      setOutputPrompt(<></>);
    }
  }, [dogAgeInHumanYears, isInputDisplayComplete, setOutputPrompt, setShowOutputBubble]);

  useEffect(() => {
    if (isOutputBubbleComplete && showOutputBubble) {
      typeOutDisplayText(`But in dog years, I am ${humanAgeInDogYears} years old!`, setOutputPrompt, () => {});
    }
  }, [isOutputBubbleComplete, humanAgeInDogYears, setOutputPrompt, showOutputBubble]);

  return (
    <div className="flex relative">
      {isInputDisplayComplete && showOutputBubble && (
        <>
          <img
            src={speechBubbleTwo}
            alt="speech bubble two"
            className={`${scaleBubbleAnimation} z-10 absolute scale-x-[-1.7] self-stretch scale-y-[1] translate-y-[10rem] translate-x-[-43rem]`}
          />
          {isOutputBubbleComplete && (
            <p className="absolute z-20 text-black opacity-90 text-[4rem] translate-x-[-48rem] translate-y-[19rem] w-[40rem]">{outputPrompt}</p>
          )}
        </>
      )}
      <img src={pugTwo} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
    </div>
  );
}
