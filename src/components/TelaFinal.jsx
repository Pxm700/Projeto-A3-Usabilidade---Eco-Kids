// src/components/TelaFinal.jsx
import React, { useEffect, useState } from "react";

// Tela de conclusão do jogo
// Heurística Nielsen #1 – Visibilidade do status do sistema: exibe pontuação final completa
// Heurística Nielsen #3 – Controle: botão para reiniciar

const MEDALHAS = [
  { min: 400, label: "🥇 Guardião do Planeta", cor: "#FFD700", desc: "Você dominou todas as missões!" },
  { min: 300, label: "🥈 Protetor Ambiental", cor: "#C0C0C0", desc: "Excelente desempenho sustentável!" },
  { min: 200, label: "🥉 Eco Herói",           cor: "#CD7F32", desc: "Bom trabalho! Continue aprendendo!" },
  { min: 0,   label: "🌱 Eco Aprendiz",        cor: "#4CAF50", desc: "Cada passo conta para o planeta!" },
];

function TelaFinal({ pontuacaoTotal, onReiniciar }) {
  const [animado, setAnimado] = useState(false);
  const [confetes, setConfetes] = useState([]);

  const medalha = MEDALHAS.find((m) => pontuacaoTotal >= m.min) || MEDALHAS[MEDALHAS.length - 1];

  useEffect(() => {
    const t = setTimeout(() => setAnimado(true), 300);
    // Gerar confetes decorativos
    const emojis = ["🌿", "♻️", "💧", "⭐", "🌍", "🌱", "🎉", "✨"];
    setConfetes(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        emoji: emojis[i % emojis.length],
        left: `${(i * 7 + 3) % 95}%`,
        delay: `${i * 0.18}s`,
        size: `${1.2 + (i % 3) * 0.6}rem`,
      }))
    );
    return () => clearTimeout(t);
  }, []);

  const percentual = Math.round((pontuacaoTotal / 400) * 100);

  return (
    <div
      className="tela"
      style={{
        background: "linear-gradient(160deg, #E8F5E9 0%, #C8E6C9 50%, #FFFDE7 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetes de fundo */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {confetes.map((c) => (
          <span
            key={c.id}
            style={{
              position: "absolute",
              top: "-20px",
              left: c.left,
              fontSize: c.size,
              animation: `bounce 2s ${c.delay} infinite`,
              opacity: 0.7,
            }}
          >
            {c.emoji}
          </span>
        ))}
      </div>

      <div
        className="card-eco"
        style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 560 }}
      >
        {/* Personagem comemorando */}
        <div style={{ fontSize: "5rem", marginBottom: 4, animation: "bounce 1.2s infinite" }}>
          🌍
        </div>

        <h1
          className="font-titulo"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
            color: "#1B5E20",
            marginBottom: 4,
            lineHeight: 1.1,
          }}
        >
          Parabéns, Eco Herói!
        </h1>
        <p style={{ color: "#388E3C", fontWeight: 700, marginBottom: 20 }}>
          Você completou todas as missões e salvou o planeta! 🎉
        </p>

        {/* Medalha */}
        <div
          style={{
            background: `${medalha.cor}22`,
            border: `3px solid ${medalha.cor}`,
            borderRadius: 20,
            padding: "16px 24px",
            marginBottom: 24,
            transition: "transform 0.5s",
            transform: animado ? "scale(1)" : "scale(0.7)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: 4 }}>{medalha.label.split(" ")[0]}</div>
          <div
            className="font-titulo"
            style={{ fontSize: "1.3rem", color: "#333", marginBottom: 4 }}
          >
            {medalha.label.slice(medalha.label.indexOf(" ") + 1)}
          </div>
          <p style={{ margin: 0, color: "#555", fontWeight: 600, fontSize: "0.9rem" }}>
            {medalha.desc}
          </p>
        </div>

        {/* Pontuação final */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <div style={{ background: "#FFF3E0", borderRadius: 14, padding: "14px 20px" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#E65100" }}>
              {pontuacaoTotal}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>pontos totais</div>
          </div>
          <div style={{ background: "#E8F5E9", borderRadius: 14, padding: "14px 20px" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#2E7D32" }}>
              {percentual}%
            </div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>aproveitamento</div>
          </div>
          <div style={{ background: "#E3F2FD", borderRadius: 14, padding: "14px 20px" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1565C0" }}>4/4</div>
            <div style={{ fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>fases completas</div>
          </div>
        </div>

        {/* Fases completas */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {["♻️ Reciclagem", "💧 Água", "⚡ Energia", "📱 Eletrônicos"].map((f, i) => (
            <span
              key={i}
              style={{
                background: "#4CAF50",
                color: "#fff",
                borderRadius: 999,
                padding: "4px 12px",
                fontSize: "0.78rem",
                fontWeight: 700,
              }}
            >
              {f} ✓
            </span>
          ))}
        </div>

        {/* Mensagem ODS */}
        <div
          style={{
            background: "#FF8F0022",
            border: "2px solid #FF8F00",
            borderRadius: 14,
            padding: "12px 16px",
            marginBottom: 24,
          }}
        >
          <p style={{ margin: 0, fontWeight: 700, color: "#E65100", fontSize: "0.9rem" }}>
            🌍 Você contribuiu com a ODS 12 da ONU – Consumo e Produção Responsáveis! <br />
            <span style={{ fontWeight: 600, color: "#555" }}>
              Continue praticando esses hábitos no dia a dia. Cada ação importa!
            </span>
          </p>
        </div>

        {/* Botão reiniciar – Heurística #3: controle do usuário */}
        <button
          className="btn-eco btn-verde"
          onClick={onReiniciar}
          style={{ fontSize: "1.1rem", padding: "14px 40px" }}
        >
          🔄 Jogar Novamente
        </button>
      </div>
    </div>
  );
}

export default TelaFinal;
