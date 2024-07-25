import { SetStateAction, useEffect, useState } from "react";
import { convertHumanYearsToDogYears } from "../../functions/functions";
import pugTwo from "./../../assets/dog/pug_dog_2.png";
import speechBubbleTwo from "./../../assets/speech_bubble/speech_bubble_2.svg";
import styles from "./DogDisplayOutput.module.css";

const scaleInBubbleTwoStyle = styles["animate-scaleInBubbleTwo"];
const scaleOutBubbleTwoStyle = styles["animate-scaleOutBubbleTwo"];

type DogDisplayOutputProps = {
  dogAgeInHumanYears: string;
  outputPrompt: React.ReactNode;
  setOutputPrompt: React.Dispatch<SetStateAction<React.ReactNode>>;
};

export default function DogDisplayOutput({ dogAgeInHumanYears, outputPrompt, setOutputPrompt }: DogDisplayOutputProps) {
  const [scaleBubbleAnimation, setScaleBubbleAnimation] = useState<string | CSSModuleClasses>("");
  const humanAgeInDogYears = convertHumanYearsToDogYears(Number(dogAgeInHumanYears), true);

  useEffect(() => {
    if (dogAgeInHumanYears === "") {
      setOutputPrompt(<></>);
      setScaleBubbleAnimation(scaleOutBubbleTwoStyle);
    } else {
      setOutputPrompt(
        <>
          But in dog years, <br /> I am {humanAgeInDogYears} years old!
        </>
      );
      setScaleBubbleAnimation(scaleInBubbleTwoStyle);
    }
  }, [dogAgeInHumanYears, humanAgeInDogYears, setOutputPrompt]);

  return (
    <div className="flex relative">
      <img
        src={speechBubbleTwo}
        alt="speech bubble two"
        className={`${scaleBubbleAnimation} z-10 absolute scale-x-[-1.7] self-stretch scale-y-[1] translate-y-[10rem] translate-x-[-43rem]`}
      />
      <p className="absolute z-20 text-black opacity-90 text-[4rem] translate-x-[-55rem] translate-y-[19rem] w-[50rem]">{outputPrompt}</p>
      <img src={pugTwo} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
    </div>
  );
}
