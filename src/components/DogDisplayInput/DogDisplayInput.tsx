import { SetStateAction, useEffect, useState } from "react";
import { typeOutTextString } from "../../functions/functions";
import pugOne from "./../../assets/dog/pug_dog_1.png";
import speechBubbleOne from "./../../assets/speech_bubble/speech_bubble_1.svg";
import styles from "./DogDisplayInput.module.css";

type DogDisplayInputProps = {
  dogAgeInYears: string;
  inputPrompt: string;
  setInputPrompt: React.Dispatch<SetStateAction<string>>;
};

export default function DogDisplayInput({ dogAgeInYears, inputPrompt, setInputPrompt }: DogDisplayInputProps) {
  const [debounceDogAge, setDebounceDogAge] = useState(dogAgeInYears);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceDogAge(dogAgeInYears);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [dogAgeInYears]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (debounceDogAge === "") {
        typeOutTextString("How old am I in human years?", setInputPrompt);
      } else {
        typeOutTextString(`I am ${debounceDogAge} in human years!`, setInputPrompt);
      }
    }, 1500);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [setInputPrompt, debounceDogAge]);

  return (
    <>
      <div className="flex flex-col relative">
        <img src={pugOne} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
        <img
          src={speechBubbleOne}
          alt="speech bubble 1"
          className={`${styles["animate-scaleBubbleOne"]} absolute translate-x-[5rem] translate-y-[-6.5rem] self-stretch scale-y-[2] scale-x-[1.5]`}
        />
        <p className={`absolute text-black text-opacity-90 text-center w-[40rem] translate-y-[-7.8rem] text-[3rem]`}>{inputPrompt}</p>
      </div>
    </>
  );
}
