import pugTwo from "./../../assets/dog/pug_dog_2.png";
import speechBubbleTwo from "./../../assets/speech_bubble/speech_bubble_2.svg"

export default function DogDisplayOutput() {
  return (
    <div className="flex relative">
      <img src={speechBubbleTwo} alt="speech bubble two" className="absolute scale-x-[-1.7] self-stretch scale-y-[1] translate-y-[10rem] translate-x-[-43rem]"/>
      <p className="absolute text-black opacity-90 text-[4rem] translate-x-[-55rem] translate-y-[19rem] w-[50rem]">But in dog years,<br/> I am 62 years old!</p>
      <img src={pugTwo} alt="pug dog 1" className="scale-x-[-1]" width="300rem"/>
    </div>
  );
}
