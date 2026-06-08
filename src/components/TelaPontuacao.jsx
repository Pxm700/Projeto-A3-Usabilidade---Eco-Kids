// src/components/TelaPontuacao.jsx
import React, { useEffect, useState } from "react";

// Heurística Nielsen #1 – Visibilidade do status do sistema
// Mostra claramente acertos, pontos ganhos e ranking de estrelas

function TelaPontuacao({ resultado, pontuacaoTotal, fase, fasesCompletas, onProxima, onVoltar }) {
  const { acertos, total, pontos } = resultado;
  const percentual = (acertos / total) * 100;

  // Número de estrelas baseado no desempenho
  const estrelas = percentual === 100 ? 3 : percentual >= 75 ? 2 : percentual >= 50 ? 1 : 0;
  const todasCompletas = fasesCompletas.length >= 4;

  const [animado, setAnimado] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimado(true), 200);
    return () => clearTimeout(t);
  }, []);

  const mensagens = {
    3: { texto: "Incrível! Você é um expert em sustentabilidade! 🌟", emoji: "🏆" },
    2: { texto: "Muito bom! Você está aprendendo bastante! 🌱", emoji: "⭐" },
    1: { texto: "Bom começo! Continue praticando! 💪", emoji: "🎯" },
    0: { texto: "Não desanime! Tente novamente para aprender mais! 🔄", emoji: "📚" },
  };

  const msg = mensagens[estrelas];

  return (
    <div
      className="tela"
      style={{
        background: `linear-gradient(160deg, ${fase.bgColor} 0%, #FFFDE7 100%)`,
      }}
    >
      <div className="card-eco" style={{ textAlign: "center" }}>
        {/* Ícone da fase */}
        <div style={{ fontSize: "4rem", marginBottom: 8 }}>{msg.emoji}</div>

        <h2 className="font-titulo" style={{ color: fase.color, fontSize: "2rem", marginBottom: 4 }}>
          {fase.title}
        </h2>
        <p style={{ color: "#555", fontWeight: 600, marginBottom: 20 }}>Fase concluída!</p>

        {/* Estrelas – animadas */}
        <div style={{ marginBottom: 20 }}>
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`estrela ${i <= estrelas ? "" : "apagada"}`}
              style={{
                transition: `transform 0.4s ${i * 0.15}s, opacity 0.4s ${i * 0.15}s`,
                transform: animado ? "scale(1)" : "scale(0.3)",
                opacity: animado ? 1 : 0,
                display: "inline-block",
              }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Texto motivacional */}
        <p style={{ fontWeight: 700, color: "#333", fontSize: "1.05rem", marginBottom: 24 }}>
          {msg.texto}
        </p>

        {/* Resultado numérico */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: "#E8F5E9",
              borderRadius: 14,
              padding: "14px 20px",
              minWidth: 100,
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#2E7D32" }}>
              {acertos}/{total}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>acertos</div>
          </div>

          <div
            style={{
              background: "#FFF3E0",
              borderRadius: 14,
              padding: "14px 20px",
              minWidth: 100,
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#E65100" }}>
              +{pontos}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>pontos</div>
          </div>

          <div
            style={{
              background: "#E3F2FD",
              borderRadius: 14,
              padding: "14px 20px",
              minWidth: 100,
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1565C0" }}>
              {pontuacaoTotal}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>total</div>
          </div>
        </div>

        {/* Barra de acertos */}
        <div style={{ marginBottom: 28 }}>
          <div className="barra-container">
            <div
              className="barra-fill"
              style={{
                width: animado ? `${percentual}%` : "0%",
                background: fase.color,
              }}
            />
          </div>
          <p style={{ margin: "6px 0 0", fontSize: "0.8rem", color: "#666", fontWeight: 600 }}>
            {Math.round(percentual)}% de aproveitamento
          </p>
        </div>

        {/* Progresso da missão */}
        <div
          style={{
            background: "#F5F5F5",
            borderRadius: 12,
            padding: "12px 16px",
            marginBottom: 24,
            textAlign: "left",
          }}
        >
          <p style={{ margin: "0 0 8px", fontWeight: 700, color: "#333", fontSize: "0.9rem" }}>
            🗺️ Progresso da missão:
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["♻️ Reciclagem", "💧 Água", "⚡ Energia", "📱 Eletrônicos"].map((f, i) => (
              <span
                key={i}
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  background: fasesCompletas.includes(i + 1) ? "#4CAF50" : "#E0E0E0",
                  color: fasesCompletas.includes(i + 1) ? "#fff" : "#888",
                }}
              >
                {f} {fasesCompletas.includes(i + 1) ? "✓" : ""}
              </span>
            ))}
          </div>
        </div>

        {/* Botões – Heurística #3: controle do usuário */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-eco btn-cinza" onClick={onVoltar} style={{ fontSize: "0.95rem" }}>
            ← Fases
          </button>
          <button className="btn-eco btn-verde" onClick={onProxima} style={{ fontSize: "0.95rem" }}>
            {todasCompletas ? "🌍 Ver resultado final!" : "Próxima fase →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaPontuacao;
