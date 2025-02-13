import { style } from "./util/style";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${style.paddingX}  text-white`}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
