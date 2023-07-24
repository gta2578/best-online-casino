import React from "react";
import {Header} from "./components/header/Header";
import {Slider} from "./components/slider/Slider";

import './App.css';



function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Slider />
        </main>
    </div>
  );
}

export default App;
