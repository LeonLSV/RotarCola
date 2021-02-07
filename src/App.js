import "./App.css";
import React, { useRef, useState } from "react";
import { Button } from "antd";

const App = () => {
  const valorInput = useRef(null);
  const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  const [who, setWho] = useState("El último en tomar fue:");

  const whoIsNext = (names, i) => {
    if (i <= names.length) {
      return setWho(names[i - 1]);
    } else {
      while (i > names.length) {
        let primero = names.shift();
        names.push(primero, primero);
      }

      return setWho(names[i - 1]);
    }
  };

  const handleClick = () => {
    const valor = valorInput.current.value;
    console.log(whoIsNext(names, valor));
  };

  return (
    <header className="App-header">
      <h1 className="title">¿Quién sigue en la fila despues de:</h1>
      <input type="number" ref={valorInput} />
      <Button style={{ margin: "20px" }} type="primary" onClick={handleClick}>
        Calcular
      </Button>

      <h1 className="title">{who}</h1>
    </header>
  );
};

export default App;
