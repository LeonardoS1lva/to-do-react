import { Link } from "react-router-dom";

import Button from "../buttons/Button";
import Form from "../form/Form";

import "./Main.css";
import { useEffect, useState } from "react";
import { lerLocalStorage, salvarLocalStorage } from "../../utilities/Utilities";
import JanelaAlerta from "../alerta/JanelaAlerta";

function Main() {
  const [tarefas, setTarefas] = useState(() => lerLocalStorage());
  const [name, setName] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const addTarefa = () => {
    if (name.trim() === "") {
      alert("Digite uma tarefa válida!");
      return;
    }

    const ultimoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id : 0;
    const novaTarefa = {
      id: ultimoId + 1,
      titulo: name,
      status: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setName("");
    setMostrarAlerta(true);
  };

  useEffect(() => {
    salvarLocalStorage(tarefas);
  }, [tarefas]);

  const fecharAlerta = () => {
    setMostrarAlerta(false);
  };

  return (
    <main>
      <Form
        id="input-tarefa"
        type="text"
        placeholder="Digite a tarefa..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        texto="Adicionar"
        onClick={addTarefa}
      />
      <div className="container">
        <Link to="/verTarefas">
          <Button texto="Visualizar" />
        </Link>
        <Link to="/editarTarefas">
          <Button texto="Editar" />
        </Link>
        <Link to="/deletarTarefas">
          <Button texto="Deletar" />
        </Link>
      </div>
      {mostrarAlerta && (
        <JanelaAlerta titulo="Tarefa Adicionada!" onClose={fecharAlerta} />
      )}
    </main>
  );
}

export default Main;
