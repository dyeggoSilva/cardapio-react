import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { useFoodData } from "./hooks/userFoodData";
import { CreateModal } from "./components/create-modal/create-modal";


function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = ()=>{
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
        <Card
          titulo={foodData.titulo}
          img={foodData.img}
          preco={foodData.preco}
        />
      ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  );
}

export default App;
