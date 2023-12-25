import Parallax1 from "./Components/Parallax1";

function App() {
  return (
    <div>
      <div className="bold flex h-96 w-full items-center justify-center bg-black text-6xl text-white">
        SCROLL DOWN
      </div>
      <Parallax1 />
      <div className="bold flex h-96 w-full items-center justify-center bg-black text-6xl text-white">
        SCROLL UP
      </div>
    </div>
  );
}

export default App;
