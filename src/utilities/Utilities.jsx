export const salvarLocalStorage = (tarefas) => {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

export const lerLocalStorage = () => {
  const tarefasLocalStorage = localStorage.getItem("tarefas");
  return tarefasLocalStorage ? JSON.parse(tarefasLocalStorage) : [];
};

export const deletarTarefa = (id) => {
  const tarefas = lerLocalStorage();
  const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
  salvarLocalStorage(tarefasFiltradas);
}

export const alterarStatus = (id) => {
  const tarefas = lerLocalStorage();
  const tarefasAtualizadas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      return { ...tarefa, status: !tarefa.status}
    }
    return tarefa;
  });
  salvarLocalStorage(tarefasAtualizadas);
}

export const exportarTarefas = (tarefas) => {
  const tarefasString = JSON.stringify(tarefas);
  const blob = new Blob([tarefasString], { type: "application/txt" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tarefas.txt";
  a.click();
};

export const importarTarefasSalvarLocalStorage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const tarefas = JSON.parse(e.target.result);
    salvarLocalStorage(tarefas);
    window.location.reload();
  };
  reader.readAsText(file);
};
