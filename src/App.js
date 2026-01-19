import About from "./modules/about/about";
import Aside from "./modules/aside/aside";
import Header from "./modules/header/header";
import Hero from "./modules/hero/hero";
import Article from "./modules/section/artecle/article";
import Section from "./modules/section/section";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Section />
      <Article />
      <Aside />
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
