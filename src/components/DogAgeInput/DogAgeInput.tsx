import { SetStateAction } from "react";

type DogAgeInputProps = {
  dogAgeInYears: string;
  setDogAgeInYears: React.Dispatch<SetStateAction<string>>;
};

export default function DogAgeInput({ dogAgeInYears, setDogAgeInYears }: DogAgeInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.includes(".")) {
      setDogAgeInYears((prev) => prev);
    } else if (Number(e.target.value) < 10000) setDogAgeInYears(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center items-center mr-[10rem]">
        <input
          className="w-[35rem] h-[2rem] p-10 text-center rounded-2xl"
          type="number"
          id="dogAgeInput"
          title="dogAgeInput"
          placeholder="Enter my age in human years"
          value={dogAgeInYears}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
