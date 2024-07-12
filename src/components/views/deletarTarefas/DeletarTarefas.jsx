import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../buttons/Button";
import Header from "../../header/Header";
import Tarefas from "../../tarefas/Tarefas";

import "./DeletarTarefas.css";
import Form from "../../form/Form";
import { deletarTarefa, lerLocalStorage, salvarLocalStorage } from "../../../utilities/Utilities";

function DeletarTarefas() {

  const [tarefas, setTarefas] = useState(() => lerLocalStorage());
  const [id, setId] = useState(0);

  const handleDelete = () => {
    deletarTarefa(id);
    setTarefas(lerLocalStorage());
  }

  useEffect(() => {
    salvarLocalStorage(tarefas);
  }, [tarefas]);

  return (
    <div className="content">
      <Header titulo="Deletar Tarefas" />
      <Form
        id="input-deletar"
        type="number"
        placeholder="Digite o ID da tarefa..."
        value={id}
        onChange={(e) => setId(+e.target.value)}
        
        texto="Deletar"
        onClick={handleDelete}
      />
      <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
      <Link to="/">
        <Button texto="Voltar" />
      </Link>
    </div>
  );
}

export default DeletarTarefas;
