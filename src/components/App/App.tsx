import { useState } from "react";
import DogAgeInput from "../DogAgeInput/DogAgeInput";
import DogDisplayInput from "../DogDisplayInput/DogDisplayInput";
import DogDisplayOutput from "../DogDisplayOutput/DogDisplayOutput";

function App() {
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [dogAgeInHumanYears, setDogAgeInHumanYears] = useState<string>("");
  const [outputPrompt, setOutputPrompt] = useState<React.ReactNode>("");

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-20">
        <header>
          <h1 className="text-[6rem] font-bold text-purple-500">Human Years to Dog Years Converter</h1>
        </header>
        <main className="flex flex-col w-[80vw] min-w-[90rem] max-w-[100rem] gap-5 border-[0.5rem] border-purple-400 rounded-2xl p-20 bg-gradient-to-br from-green-600 to-green-900 shadow-lg shadow-purple-900">
          <div className="flex gap-5 place-content-between mt-40">
            <DogDisplayInput dogAgeInYears={dogAgeInHumanYears} inputPrompt={inputPrompt} setInputPrompt={setInputPrompt} />
            <DogAgeInput dogAgeInHumanYears={dogAgeInHumanYears} setDogAgeInHumanYears={setDogAgeInHumanYears} />
          </div>
          <div className="flex justify-end">
            <DogDisplayOutput dogAgeInHumanYears={dogAgeInHumanYears} outputPrompt={outputPrompt} setOutputPrompt={setOutputPrompt} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
