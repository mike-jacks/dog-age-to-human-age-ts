import { SetStateAction, useEffect, useMemo, useState } from "react";
import { debounce } from "../../functions/functions"; // Ensure debounce is properly imported

type DogAgeInputProps = {
  dogAgeInHumanYears: string;
  setDogAgeInHumanYears: React.Dispatch<SetStateAction<string>>;
  setIsInputDisplayComplete: React.Dispatch<SetStateAction<boolean>>;
  setShowOutputBubble: React.Dispatch<SetStateAction<boolean>>;
};

export default function DogAgeInput({
  dogAgeInHumanYears,
  setDogAgeInHumanYears,
  setIsInputDisplayComplete,
  setShowOutputBubble
}: DogAgeInputProps) {
  const [localDogAge, setLocalDogAge] = useState(dogAgeInHumanYears);

  useEffect(() => {
    setLocalDogAge(dogAgeInHumanYears);
  }, [dogAgeInHumanYears]);

  const debounceSetDogAge = useMemo(
    () =>
      debounce((age: string) => {
        setDogAgeInHumanYears(age);
        setIsInputDisplayComplete(true); // Set completion to true after debounce delay
      }, 1500),
    [setDogAgeInHumanYears, setIsInputDisplayComplete]
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Ensure input is numeric
      setLocalDogAge(value);
      setIsInputDisplayComplete(false); // Immediately set to false on change
      setShowOutputBubble(false); // Reset output bubble visibility
      debounceSetDogAge(value); // Debounce the state update
    }
  }

  return (
    <div className="flex justify-center items-center mr-[10rem]">
      <input
        className="w-[35rem] h-[2rem] p-10 text-center rounded-2xl"
        type="text"
        id="dogAgeInput"
        title="dogAgeInput"
        placeholder="Enter my age in human years"
        value={localDogAge}
        onChange={handleChange}
        maxLength={4}
      />
    </div>
  );
}
