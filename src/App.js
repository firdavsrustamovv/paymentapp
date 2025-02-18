import { style } from "./util/style";
import { Home, Navbar } from "./components/index";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${style.paddingX}  ${style.flexStart}`}>
        <div className={`${style.container}`}>
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
