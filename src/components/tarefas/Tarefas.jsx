import { alterarStatus, lerLocalStorage } from "../../utilities/Utilities";
import Input from "../inputs/Input";
import "./Tarefas.css";

function Tarefas({editavel = false, tarefas, setTarefas}) {

  const handleStatusChange = (id) => {
    alterarStatus(id);
    setTarefas(lerLocalStorage());
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tarefas.map((tarefa) => (
          
          <tr key={tarefa.id}>
            <td>{tarefa.id}</td>
            <td>{tarefa.titulo}</td>
            <td>
              {editavel ? (
                <Input
                  id={`tarefa-${tarefa.id}`}
                  type="checkbox"
                  checked={tarefa.status}
                  onChange={() => handleStatusChange(tarefa.id)}
                />
              ) : tarefa.status ? (
                "Feito"
              ) : (
                "Pendente"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tarefas;