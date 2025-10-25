import "./App.css";
import night from "./assets/night.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets puxando direto da pasta */}
      <img src="./src/assets/night.jpg" alt=" alguma imagem" />
      {/* 3 - imagem em assets com require */}
      <img src={night} alt="" />
    </div>
  );
}

export default App;
