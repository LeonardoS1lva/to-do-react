import React from "react";
import "./JanelaAlerta.css";
import Button from "../buttons/Button";

function JanelaAlerta({titulo, confirmacao = false, onClose, onConfirm, nomeTarefa}) {
  return (
    <div className="janela-overlay">
      <div className="janela-content">
        <h2>{titulo}</h2>
        <p>{nomeTarefa}</p>
        {confirmacao ? (
            <div className="group-buttons">
                <Button texto="Sim" onClick={onConfirm} />
                <Button texto="Não" onClick={onClose} />
            </div>
            ) : (
            <Button texto="OK" onClick={onClose} />
        )}
      </div>
    </div>
  );
}

export default JanelaAlerta;