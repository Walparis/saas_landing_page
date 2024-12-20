import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
    </main>
  );
};
export default App;
