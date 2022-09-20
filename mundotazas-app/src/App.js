import React from "react";
import {Navbar} from "./componentes/Navbar/Navbar";
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer";
import 'boxicons';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer name='Mundo Tazas' />
    </div>
  );
}

export default App;
