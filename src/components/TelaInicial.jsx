// src/components/TelaInicial.jsx
import React, { useState, useEffect } from "react";

// Heurística Nielsen #8 – Estética e design minimalista
// A tela inicial apresenta apenas o essencial: personagem, título e botão jogar

function TelaInicial({ onJogar }) {
  const [carregando, setCarregando] = useState(true);

  // Heurística Nielsen #1 – Visibilidade do status do sistema
  // Simula carregamento dos recursos do jogo com feedback visual
  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="tela"
      style={{
        background: "linear-gradient(160deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Decoração de fundo */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {["🌿","🍃","🌱","🌍","🌿","🍃"].map((emoji, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              fontSize: `${1.5 + (i % 3) * 0.8}rem`,
              opacity: 0.25,
              left: `${(i * 17 + 5) % 90}%`,
              top: `${(i * 23 + 8) % 80}%`,
              animation: `bounce ${2 + i * 0.4}s infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%", maxWidth: 560 }}>
        {/* Badge ODS */}
        <div
          style={{
            display: "inline-block",
            background: "#FF8F00",
            color: "#fff",
            borderRadius: 999,
            padding: "6px 20px",
            fontWeight: 800,
            fontSize: "0.85rem",
            marginBottom: 20,
            letterSpacing: "0.5px",
          }}
        >
          🌍 ODS 12 – Consumo e Produção Responsáveis
        </div>


        {/* Título */}
        <h1
          className="font-titulo"
          style={{
            fontSize: "clamp(2.4rem, 8vw, 3.6rem)",
            color: "#1B5E20",
            margin: "0 0 4px",
            lineHeight: 1.1,
          }}
        >
          EcoKids
        </h1>
        <p
          className="font-titulo"
          style={{
            fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
            color: "#2E7D32",
            margin: "0 0 12px",
          }}
        >
          Missão Reciclagem ♻️
        </p>

        <p
          style={{
            color: "#388E3C",
            fontSize: "1.05rem",
            fontWeight: 600,
            marginBottom: 32,
            lineHeight: 1.5,
            padding: "0 8px",
          }}
        >
          Ajude o Eco a salvar o planeta! <br />
          Aprenda sobre reciclagem, água, energia <br />
          e lixo eletrônico de forma divertida! 🌱
        </p>

        {/* Heurística Nielsen #1 – Status do sistema: botão só aparece após "carregar" */}
        {carregando ? (
          <div style={{ color: "#2E7D32", fontWeight: 700 }}>
            <div
              className="spinner-border spinner-border-sm me-2"
              role="status"
              style={{ borderColor: "#4CAF50", borderRightColor: "transparent" }}
            />
            Preparando a missão...
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <button className="btn-eco btn-verde" onClick={onJogar} style={{ fontSize: "1.2rem", padding: "16px 48px" }}>
              🚀 Começar Missão!
            </button>
            <p style={{ color: "#66BB6A", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
              4 fases de desafios ambientais
            </p>
          </div>
        )}

        {/* Rodapé info */}
        <div
          style={{
            marginTop: 40,
            padding: "16px 20px",
            background: "rgba(255,255,255,0.6)",
            borderRadius: 14,
            backdropFilter: "blur(8px)",
          }}
        >
          <p style={{ margin: 0, color: "#33691E", fontWeight: 700, fontSize: "0.85rem" }}>
            ♻️ Reciclagem &nbsp;|&nbsp; 💧 Água &nbsp;|&nbsp; ⚡ Energia &nbsp;|&nbsp; 📱 Eletrônicos
          </p>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
