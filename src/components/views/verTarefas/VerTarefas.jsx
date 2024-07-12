import { Link } from "react-router-dom";

import Header from "../../header/Header";
import Tarefas from "../../tarefas/Tarefas";
import Button from "../../buttons/Button";


import "./VerTarefas.css";
import { useState } from "react";
import { lerLocalStorage } from "../../../utilities/Utilities";
// import Input from "../../inputs/Input";

function VerTarefas() {

  const [tarefas, setTarefas] = useState(() => lerLocalStorage());

  return (
    <div className="content"> 
        <Header titulo="Tarefas" />
        <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
        <Link to="/">
            <Button texto="Voltar" />
        </Link>
        {/* <Button texto="Exportar" onClick={() => exportarTarefas(tarefas)} />
        <Input type="file" onChange={(e) => importarTarefasSalvarLocalStorage(e)} /> */}
    </div>
  );
}

export default VerTarefas;
