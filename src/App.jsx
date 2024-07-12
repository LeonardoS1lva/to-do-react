import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/views/home/Home";
import VerTarefas from "./components/views/verTarefas/VerTarefas";
import EditarTarefas from "./components/views/editarTarefas/EditarTarefas";
import DeletarTarefas from "./components/views/deletarTarefas/DeletarTarefas";
import NotFound from "./components/views/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verTarefas" element={<VerTarefas />} />
          <Route path="/editarTarefas" element={<EditarTarefas />} />
          <Route path="/deletarTarefas" element={<DeletarTarefas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
