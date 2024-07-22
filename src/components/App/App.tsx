import DogAgeInput from "../DogAgeInput/DogAgeInput";
import DogDisplayInput from "../DogDisplayInput/DogDisplayInput";
import DogDisplayOutput from "../DogDisplayOutput/DogDisplayOutput";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-20">
        <header>
          <h1 className="text-[6rem] font-bold text-purple-500">Human Age to Dog Age Converter</h1>
        </header>
        <main className="flex flex-col w-[80vw] min-w-[75rem] max-w-[100rem] gap-5 border-[0.5rem] border-purple-400 rounded-2xl p-20 bg-gradient-to-br from-green-600 to-green-900 shadow-lg shadow-purple-900" >
          <div className="flex gap-5 place-content-between mt-40">
            <DogDisplayInput />
            <DogAgeInput />
          </div>
          <div className="flex justify-end">
            <DogDisplayOutput />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
