import "./App.css";
import Card from "./components/card/Card";
import { useFoodData } from "./hooks/UserFoodData";


function App() {
  const {data} = useFoodData();

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
      
    </div>
  );
}

export default App;
