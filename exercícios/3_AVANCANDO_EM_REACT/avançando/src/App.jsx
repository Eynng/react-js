import "./App.css";
// 3 - imagem em assets
import night from "./assets/night.jpg";
// 4 - useState
import Data from "./components/Data";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets puxando direto da pasta */}
      <img src="./src/assets/night.jpg" alt=" alguma imagem" />
      {/* 3 - imagem em assets com require */}
      <img src={night} alt="" />
      {/* 4 - useState */}
      <Data />
    </div>
  );
}

export default App;
