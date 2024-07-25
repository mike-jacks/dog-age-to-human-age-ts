import { SetStateAction } from "react";

type DogAgeInputProps = {
  dogAgeInHumanYears: string;
  setDogAgeInHumanYears: React.Dispatch<SetStateAction<string>>;
};

export default function DogAgeInput({ dogAgeInHumanYears, setDogAgeInHumanYears }: DogAgeInputProps) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDogAgeInHumanYears(e.target.value);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center mr-[10rem]">
        <input
          className="w-[35rem] h-[2rem] p-10 text-center rounded-2xl"
          type="text"
          id="dogAgeInput"
          title="dogAgeInput"
          placeholder="Enter my age in human years"
          value={dogAgeInHumanYears}
          onChange={handleChange}
          maxLength={4}
        />
      </div>
    </>
  );
}
