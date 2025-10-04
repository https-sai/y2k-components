import Window from "./components/window";
import Postit from "./components/postit";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="min-h-dvh p-8 flex flex-col grid-background-container">
      <p className="text-5xl p-2">y2k components</p>
      <div className="min-h-dvh w-full p-8">
        <div className="p-4">
          <Window />
        </div>
        <div className="p-4 flex">
          <Postit />
          <div className="p-4 flex gap-4">
            <div className="bg-white h-30 w-30 p-4 border-t-1 border-l-1 border-b-4 border-r-4 hover:border-b-6 hover:border-r-6"></div>
            <div className="bg-white h-30 w-30 p-4 border-t-1 border-l-1 border-b-4 border-r-4 hover:border-b-6 hover:border-r-6"></div>
          </div>
        </div>
        <div className="p-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
