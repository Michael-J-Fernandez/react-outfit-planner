import { useState } from "react";
import { useRerender } from "./utils/hooks";
import ItemDisplay from "./components/ItemDisplay";
import clothingData from "./data/clothing_v2";
import "./App.css";

function App() {
  const [dressCode, setDressCode] = useState("casual");

  const reRender = useRerender();

  const handleDressCode = (dressCodeOption) => {
    setDressCode(dressCodeOption);
    reRender();
  };

  const clothingFilter = (type) => {
    return clothingData.filter(
      (item) => item.type === type && item.dressCode === dressCode
    );
  };

  const tops = clothingFilter("top");
  const bottoms = clothingFilter("bottom");
  const shoes = clothingFilter("shoes");

  return (
    <div className="App">
      <div className="app-title">
        <h4>OUTFIT PLANNER</h4>
        <p>FIND WHAT TO WEAR</p>
      </div>

      <div className="buttons-container">
        <h5 className="buttons-title">Fashion Styles / Dress Code</h5>
        <button
          onClick={() => handleDressCode("casual")}
          className={dressCode === "casual" ? "active" : null}
        >
          Casual
        </button>
        <button
          onClick={() => handleDressCode("sport")}
          className={dressCode === "sport" ? "active" : null}
        >
          Sport
        </button>
        <button
          onClick={() => handleDressCode("formal")}
          className={dressCode === "formal" ? "active" : null}
        >
          Formal
        </button>
      </div>
      <div className="display-container">
        <ItemDisplay itemList={tops}>TOP</ItemDisplay>
        <ItemDisplay itemList={bottoms}>BOTTOM</ItemDisplay>
        <ItemDisplay itemList={shoes}>SHOES</ItemDisplay>
      </div>
    </div>
  );
}

export default App;
