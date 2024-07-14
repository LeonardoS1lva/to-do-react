import { Link } from "react-router-dom";
import Button from "../../buttons/Button";
import Header from "../../header/Header";

import "./EditarTarefas.css";
import Tarefas from "../../tarefas/Tarefas";
import {
  exportarTarefas,
  importarTarefasSalvarLocalStorage,
  lerLocalStorage,
} from "../../../utilities/Utilities";
import { useState } from "react";
import Input from "../../inputs/Input";

function EditarTarefas() {
  const [tarefas, setTarefas] = useState(() => lerLocalStorage());

  return (
    <div className="content">
      <Header titulo="Editar Tarefas" />
      <Tarefas editavel={true} tarefas={tarefas} setTarefas={setTarefas} />
      <div className="group-buttons">
        <Link to="/">
          <Button texto="Início" />
        </Link>
        <Button
          texto="Exportar Tarefas"
          onClick={() => exportarTarefas(tarefas)}
        />
        <div className="file-input-customizado">
          <Input
            id="input-file"
            type="file"
            onChange={(e) => importarTarefasSalvarLocalStorage(e)}
          />
          <label htmlFor="input-file">Importar Tarefas</label>
        </div>
        <Link to="/deletarTarefas">
          <Button texto="Deletar" />
        </Link>
        <Link to="/verTarefas">
          <Button texto="Visualizar" />
        </Link>
      </div>
    </div>
  );
}

export default EditarTarefas;
