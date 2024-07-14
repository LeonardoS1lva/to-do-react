import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../buttons/Button";
import Header from "../../header/Header";
import Tarefas from "../../tarefas/Tarefas";

import "./DeletarTarefas.css";
import Form from "../../form/Form";
import {
  deletarTarefa,
  lerLocalStorage,
  salvarLocalStorage,
} from "../../../utilities/Utilities";
import JanelaAlerta from "../../alerta/JanelaAlerta";

function DeletarTarefas() {
  const [tarefas, setTarefas] = useState(() => lerLocalStorage());
  const [id, setId] = useState(0);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleDelete = () => {
    deletarTarefa(id);
    setTarefas(lerLocalStorage());
    fecharAlerta();
  };

  useEffect(() => {
    salvarLocalStorage(tarefas);
  }, [tarefas]);

  const confirmarDelete = () => {
    if (!tarefas.some((tarefa) => tarefa.id === id)) {
      alert("Tarefa não encontrada!");
      return;
    }
    setMostrarAlerta(true);
  };

  const fecharAlerta = () => {
    setMostrarAlerta(false);
  };

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
        onClick={confirmarDelete}
      />
      <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
      <div className="group-buttons">
        <Link to="/">
          <Button texto="Início" />
        </Link>
        <Link to="/editarTarefas">
          <Button texto="Editar" />
        </Link>
        <Link to="/verTarefas">
          <Button texto="Visualizar" />
        </Link>
      </div>
      {mostrarAlerta && (
        <JanelaAlerta
          titulo="Deseja deletar a tarefa?"
          nomeTarefa={`${tarefas.find((tarefa) => tarefa.id === id).titulo}`}
          onClose={fecharAlerta}
          confirmacao={true}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default DeletarTarefas;
