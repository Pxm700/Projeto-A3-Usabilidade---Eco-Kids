// src/components/TelaQuiz.jsx
import React, { useState, useEffect, useCallback } from "react";

// Heurística Nielsen #1 – Visibilidade do status do sistema
// Exibe: número da pergunta, barra de progresso, tempo restante, pontuação parcial

// Heurística Nielsen #5 – Prevenção de erros
// Botões de alternativa são desabilitados após uma escolha (evita cliques acidentais)

function TelaQuiz({ fase, onFinalizar, onVoltar }) {
  const perguntas = fase.questions;
  const total = perguntas.length;

  const [indice, setIndice]               = useState(0);
  const [respostaSelecionada, setResposta] = useState(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [acertos, setAcertos]             = useState(0);
  const [tempo, setTempo]                 = useState(20); // segundos por pergunta
  const [tempoEsgotado, setTempoEsgotado] = useState(false);
  const [confirmandoVoltar, setConfirmandoVoltar] = useState(false);

  const perguntaAtual = perguntas[indice];

  // Timer – Heurística #1: status do sistema com tempo visível
  useEffect(() => {
    if (mostrarFeedback) return;
    if (tempo <= 0) {
      setTempoEsgotado(true);
      setMostrarFeedback(true);
      return;
    }
    const t = setTimeout(() => setTempo((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [tempo, mostrarFeedback]);

  // Resetar timer a cada nova pergunta
  useEffect(() => {
    setTempo(20);
    setTempoEsgotado(false);
    setResposta(null);
    setMostrarFeedback(false);
  }, [indice]);

  const responder = useCallback(
    (idx) => {
      if (mostrarFeedback) return;
      setResposta(idx);
      setMostrarFeedback(true);
      if (idx === perguntaAtual.correta) {
        setAcertos((p) => p + 1);
      }
    },
    [mostrarFeedback, perguntaAtual]
  );

  const proxima = () => {
    if (indice + 1 >= total) {
      onFinalizar(acertos + (respostaSelecionada === perguntaAtual.correta ? 0 : 0), total);
      // acertos já foi atualizado no setState; passamos o estado atual
    } else {
      setIndice((p) => p + 1);
    }
  };

  // Heurística Nielsen #3 – Controle e liberdade: confirmação antes de sair
  const handleVoltar = () => {
    if (!confirmandoVoltar) { setConfirmandoVoltar(true); return; }
    onVoltar();
  };

  const progressoPct = ((indice) / total) * 100;
  const corTempo = tempo > 10 ? "#4CAF50" : tempo > 5 ? "#FF9800" : "#F44336";
  const letraOpcao = ["A", "B", "C", "D"];

  // Calculamos os acertos finais considerando a resposta atual
  const acertosFinais = acertos + (mostrarFeedback && respostaSelecionada === perguntaAtual.correta ? 0 : 0);

  return (
    <div
      className="tela"
      style={{
        background: `linear-gradient(160deg, ${fase.bgColor} 0%, #FAFAFA 100%)`,
        paddingTop: 24,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ width: "100%", maxWidth: 640, margin: "0 auto" }}>

        {/* Header – status do sistema */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <button
            className="btn-eco btn-cinza"
            style={{ padding: "8px 16px", fontSize: "0.85rem" }}
            onClick={handleVoltar}
          >
            {confirmandoVoltar ? "Tem certeza? Sair" : "← Voltar"}
          </button>
          {confirmandoVoltar && (
            <button
              className="btn-eco btn-verde"
              style={{ padding: "8px 16px", fontSize: "0.85rem" }}
              onClick={() => setConfirmandoVoltar(false)}
            >
              Continuar jogando
            </button>
          )}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: "1.4rem" }}>{fase.icon}</span>
            <span className="font-titulo" style={{ color: fase.color, fontSize: "1rem" }}>
              {fase.title}
            </span>
          </div>
        </div>

        {/* Barra de progresso */}
        <div style={{ marginBottom: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "#555" }}>
              Pergunta {indice + 1} de {total}
            </span>
            <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#555" }}>
              ⭐ {acertos * 25} pts
            </span>
          </div>
          <div className="barra-container">
            <div className="barra-fill" style={{ width: `${progressoPct}%`, background: fase.color }} />
          </div>
        </div>

        {/* Timer */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `${corTempo}22`,
              border: `2px solid ${corTempo}`,
              borderRadius: 999,
              padding: "4px 16px",
              fontWeight: 800,
              fontSize: "0.95rem",
              color: corTempo,
              transition: "all 0.5s",
            }}
          >
            ⏱ {tempo}s
          </div>
        </div>

        {/* Card da pergunta */}
        <div className="card-eco" style={{ marginBottom: 16 }}>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#222",
              marginBottom: 24,
              lineHeight: 1.4,
            }}
          >
            {indice + 1}. {perguntaAtual.pergunta}
          </p>

          {/* Alternativas – lista React (requisito do projeto) */}
          {perguntaAtual.alternativas.map((alt, idx) => {
            let classe = "alternativa-btn";
            if (mostrarFeedback) {
              if (idx === perguntaAtual.correta) classe += " correta";
              else if (idx === respostaSelecionada) classe += " errada";
            }
            return (
              <button
                key={idx}
                className={classe}
                disabled={mostrarFeedback}
                onClick={() => responder(idx)}
                aria-label={`Alternativa ${letraOpcao[idx]}: ${alt}`}
              >
                <span
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: fase.color,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {letraOpcao[idx]}
                </span>
                {alt}
              </button>
            );
          })}

          {/* Feedback – Heurística #9: ajuda ao usuário a reconhecer e se recuperar de erros */}
          {mostrarFeedback && (
            <div className={`feedback-box ${respostaSelecionada === perguntaAtual.correta && !tempoEsgotado ? "acerto" : "erro"}`}>
              {tempoEsgotado && respostaSelecionada === null ? (
                <>⏰ Tempo esgotado! A resposta correta era: <strong>{perguntaAtual.alternativas[perguntaAtual.correta]}</strong></>
              ) : respostaSelecionada === perguntaAtual.correta ? (
                <>✅ Correto! </>
              ) : (
                <>❌ Quase! A resposta correta era: <strong>{perguntaAtual.alternativas[perguntaAtual.correta]}</strong>. </>
              )}
              <p style={{ margin: "8px 0 0", fontSize: "0.9rem", fontWeight: 600 }}>
                💬 {perguntaAtual.explicacao}
              </p>
            </div>
          )}
        </div>

        {/* Botão próxima */}
        {mostrarFeedback && (
          <div style={{ textAlign: "center" }}>
            <button
              className="btn-eco btn-verde"
              onClick={proxima}
              style={{ fontSize: "1.05rem", padding: "14px 40px" }}
            >
              {indice + 1 >= total ? "Ver resultado 🏆" : "Próxima pergunta →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TelaQuiz;
