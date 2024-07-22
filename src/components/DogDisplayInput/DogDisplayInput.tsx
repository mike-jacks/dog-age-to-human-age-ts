import pugOne from "./../../assets/dog/pug_dog_1.png";
import speechBubbleOne from "./../../assets/speech_bubble/speech_bubble_1.svg";
import styles from "./DogDisplayInput.module.css";

export default function DogDisplayInput() {
  return (
    <>
      <div className="flex flex-col relative">
        <img src={pugOne} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
        <img
          src={speechBubbleOne}
          alt="speech bubble 1"
          className={`${styles["animate-scaleXBubbleOne"]} absolute translate-x-[5rem] translate-y-[-6.5rem] self-stretch scale-y-[2] scale-x-[1.5]`}
        />
        <p className={`${styles["delay-text-bubble"]} absolute text-black text-opacity-90 text-center w-[40rem] translate-y-[-8.5rem] text-[4rem]`}>How old am I?</p>
      </div>
    </>
  );
}
