import { useEffect } from "react";
import { typeOutDisplayText } from "../../functions/functions";
import pugOne from "./../../assets/dog/pug_dog_1.png";
import speechBubbleOne from "./../../assets/speech_bubble/speech_bubble_1.svg";
import styles from "./DogDisplayInput.module.css";

type DogDisplayInputProps = {
  dogAgeInYears: string;
  inputPrompt: React.ReactNode;
  isInputDisplayComplete: boolean;
  setInputPrompt: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  setIsInputDisplayComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInputBubbleComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DogDisplayInput({
  dogAgeInYears,
  inputPrompt,
  setInputPrompt,
  setIsInputDisplayComplete,
  setIsInputBubbleComplete,
}: DogDisplayInputProps) {
  useEffect(() => {
    // Handle bubble animation completion
    setTimeout(() => setIsInputBubbleComplete(true), 1000); // Adjust time based on animation length

    if (dogAgeInYears === "") {
      setTimeout(() => {
        typeOutDisplayText("How old am I in human years?", setInputPrompt, setIsInputDisplayComplete);
      }, 1500); // Start typing after bubble animation
    } else {
      setTimeout(() => {
        typeOutDisplayText(`I am ${dogAgeInYears} in human years!`, setInputPrompt, setIsInputDisplayComplete);
      }, 1000); // Start typing after bubble animation
    }
  }, [dogAgeInYears, setInputPrompt, setIsInputDisplayComplete, setIsInputBubbleComplete]);

  return (
    <div className="flex flex-col relative">
      <img src={pugOne} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
      <img
        src={speechBubbleOne}
        alt="speech bubble 1"
        className={`${styles["animate-scaleBubbleOne"]} absolute translate-x-[5rem] translate-y-[-6.5rem] self-stretch scale-y-[2] scale-x-[1.5]`}
      />
      <p className={`absolute text-black text-opacity-90 text-center w-[40rem] translate-y-[-7.8rem] text-[3rem]`}>{inputPrompt}</p>
    </div>
  );
}
