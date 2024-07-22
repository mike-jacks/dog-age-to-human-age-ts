import pugOne from "./../../assets/dog/pug_dog_1.png";
import speechBubbleOne from "./../../assets/speech_bubble/speech_bubble_1.svg";

export default function DogDisplayInput() {
  return (
    <>
      <div className="flex flex-col relative">
        <img src={speechBubbleOne} alt="speech bubble 1" className="absolute z-10 translate-x-[5rem] translate-y-[-6.5rem] self-stretch scale-y-[2] scale-x-[1.5]" />
        <img src={pugOne} alt="pug dog 1" className="scale-x-[-1]" width="300rem" />
      </div>
    </>
  );
}
