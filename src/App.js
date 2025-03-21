import { style } from "./util/style";
import {
  Billing,
  Business,
  Clients,
  Contract,
  Cta,
  Footer,
  Home,
  Navbar,
  Statistics,
  Testimonials,
} from "./components/index";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${style.paddingX}  ${style.flexStart}`}>
        <div className={`${style.container}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.container} container`}>
          <Home />
        </div>
      </div>
      <div className={`bg-primary ${style.paddingX}  ${style.flexStart}`}>
        <div className={`${style.container} container`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <Cta />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
