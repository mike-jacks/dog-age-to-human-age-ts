import DogAgeInput from "../DogAgeInput/DogAgeInput";
import DogDisplayInput from "../DogDisplayInput/DogDisplayInput";
import DogDisplayOutput from "../DogDisplayOutput/DogDisplayOutput";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-60">
        <header>
          <h1 className="text-[4rem]">Dog Age to Human Age</h1>
        </header>
        <main className="flex flex-col gap-20 w-[80vw] min-w-[80rem] max-w-[120rem]" >
          <div className="flex gap-5">
            <DogDisplayInput />
            <DogAgeInput />
          </div>
          <div>
            <DogDisplayOutput />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
