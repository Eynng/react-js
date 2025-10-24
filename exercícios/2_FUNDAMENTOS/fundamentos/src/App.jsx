// 2 - Importação de componente
import "./App.css";
// 3 - Importação de componente
import FirtsC from "./components/FirtsComponents";
// 4 - Template Expression
import TemplateE from "./components/TemplateExpression";
// 5 - Hierarquia de componentes
import MyComponents from "./components/MyComponents";

function App() {
  // 3 - comentários

  return (
    <div className="App">
      {/* 3 - comentários jsx */}
      <h1>Primeiro Componente</h1>
      <FirtsC />
      <TemplateE />
      <MyComponents />
    </div>
  );
}

export default App;
