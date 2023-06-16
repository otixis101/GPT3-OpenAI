import { Footer, Blog, Features, Header, Possiblity, WhatGPT3 } from "./containers";
import { Navbar, Brand, Cta } from "./components";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possiblity />
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
