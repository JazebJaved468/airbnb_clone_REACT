import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/App.css";
import data from "./data/data.js";


export default function App() {
  const cardsList = data.map((item) => {
    console.log(item);
    return (
      <Card
        item = {item}
      />
    );
  });

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="cards-list-container">{cardsList}</div>
    </div>
  );
}
