// 2 - Importação de componente
import "./App.css";
// 3 - Importação de componente
import FirtsC from "./components/FirtsComponents";
// 4 - Template Expression
import TemplateE from "./components/TemplateExpression";
// 5 - Hierarquia de componentes
import MyComponents from "./components/MyComponents";
// 6 - Eventos 
import Events from "./components/Events";

function App() {
  // 3 - comentários

  return (
    <div className="App">
      {/* 3 - comentários jsx */}
      <h1>Primeiro Componente</h1>
      <FirtsC />
      <TemplateE />
      <MyComponents />
      <Events/>
    </div>
  );
}

export default App;
