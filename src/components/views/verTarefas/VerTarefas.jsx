import { Link } from "react-router-dom";

import Header from "../../header/Header";
import Tarefas from "../../tarefas/Tarefas";
import Button from "../../buttons/Button";

import "./VerTarefas.css";
import { useState } from "react";
import { lerLocalStorage } from "../../../utilities/Utilities";

function VerTarefas() {
  const [tarefas, setTarefas] = useState(() => lerLocalStorage());

  return (
    <div className="content">
      <Header titulo="Tarefas" />
      <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
      <div className="group-buttons">
        <Link to="/">
          <Button texto="Início" />
        </Link>
        <Link to="/editarTarefas">
          <Button texto="Editar" />
        </Link>
        <Link to="/deletarTarefas">
          <Button texto="Deletar" />
        </Link>
      </div>
    </div>
  );
}

export default VerTarefas;
