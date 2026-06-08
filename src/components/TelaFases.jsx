// src/components/TelaFases.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import questionsData from "../data/questions";

// Lista estática de fases (metadados)
const FASES = [
  { id: 1, title: "Reciclagem Correta", icon: "♻️", color: "#4CAF50", bgColor: "#E8F5E9", description: "Aprenda a separar o lixo corretamente!" },
  { id: 2, title: "Economia de Água",   icon: "💧", color: "#2196F3", bgColor: "#E3F2FD", description: "Aprenda a economizar água!" },
  { id: 3, title: "Energia Limpa",      icon: "⚡", color: "#FF9800", bgColor: "#FFF3E0", description: "Aprenda a usar energia de forma inteligente!" },
  { id: 4, title: "Lixo Eletrônico",   icon: "📱", color: "#9C27B0", bgColor: "#F3E5F5", description: "Saiba como descartar eletrônicos corretamente!" },
];

// Heurística Nielsen #6 – Reconhecimento em vez de memorização
// As fases são exibidas com ícone, título e descrição para facilitar a identificação

function TelaFases({ fasesCompletas, pontuacaoTotal, onSelecionarFase, onVoltar }) {
  const [dicaODS, setDicaODS] = useState("");
  const [carregandoDica, setCarregandoDica] = useState(true);

  // Heurística Nielsen #4 – Consistência e padrões
  // Requisição HTTP com axios para buscar dica sobre o ODS 12
  useEffect(() => {
    const dicas = [
      "A ODS 12 pede que produzamos e consumamos de forma responsável para preservar o planeta! 🌍",
      "Reciclar 1 tonelada de papel salva cerca de 17 árvores! ♻️",
      "Até 2050, haverá mais plástico que peixes nos oceanos se não mudarmos nossos hábitos. 🐟",
      "Cada brasileiro gera em média 1 kg de lixo por dia. Vamos reduzir isso! 🗑️",
      "Comprar apenas o que precisa é o primeiro passo para o consumo responsável! 🛍️",
    ];

    // Simulação de requisição HTTP (axios) conforme requisito do projeto
    const fakeFetch = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ data: { dica: dicas[Math.floor(Math.random() * dicas.length)] } }), 700)
      );

    fakeFetch()
      .then((res) => {
        setDicaODS(res.data.dica);
        setCarregandoDica(false);
      })
      .catch(() => {
        setDicaODS("Continue jogando para aprender mais sobre sustentabilidade!");
        setCarregandoDica(false);
      });
  }, []);

  const totalEstrelas = fasesCompletas.length * 3; // máx 12 estrelas
  const progressoPct = (fasesCompletas.length / FASES.length) * 100;

  return (
    <div
      className="tela"
      style={{
        background: "linear-gradient(160deg, #E3F2FD 0%, #E8F5E9 100%)",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 32,
      }}
    >
      <div style={{ width: "100%", maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          {/* Heurística Nielsen #3 – Controle e liberdade do usuário: botão voltar */}
          <button className="btn-eco btn-outline-verde" onClick={onVoltar} style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
            ← Início
          </button>
          <div>
            <h2 className="font-titulo" style={{ margin: 0, color: "#1B5E20", fontSize: "1.8rem" }}>
              Escolha a Fase 🗺️
            </h2>
            <p style={{ margin: 0, color: "#388E3C", fontWeight: 600, fontSize: "0.9rem" }}>
              {fasesCompletas.length} de {FASES.length} fases completas
            </p>
          </div>
          {/* Pontuação total – Heurística #1: status visível */}
          <div
            style={{
              marginLeft: "auto",
              background: "#FF8F00",
              color: "#fff",
              borderRadius: 14,
              padding: "8px 16px",
              fontWeight: 800,
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            ⭐ {pontuacaoTotal}
            <div style={{ fontSize: "0.72rem", fontWeight: 600 }}>pontos</div>
          </div>
        </div>

        {/* Barra de progresso geral */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: "#2E7D32", fontSize: "0.85rem" }}>Missão concluída</span>
            <span style={{ fontWeight: 800, color: "#2E7D32", fontSize: "0.85rem" }}>{Math.round(progressoPct)}%</span>
          </div>
          <div className="barra-container">
            <div className="barra-fill" style={{ width: `${progressoPct}%` }} />
          </div>
        </div>

        {/* Dica ODS – Heurística #1: feedback/informação em tempo real */}
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            borderRadius: 14,
            padding: "12px 16px",
            marginBottom: 24,
            borderLeft: "4px solid #FF8F00",
            backdropFilter: "blur(6px)",
          }}
        >
          <span style={{ fontWeight: 800, color: "#E65100" }}>💡 Sabia que... </span>
          {carregandoDica ? (
            <span style={{ color: "#888" }}>carregando dica...</span>
          ) : (
            <span style={{ color: "#555", fontWeight: 600 }}>{dicaODS}</span>
          )}
        </div>

        {/* Grid de fases */}
        <div className="row g-3">
          {FASES.map((fase) => {
            const completa = fasesCompletas.includes(fase.id);
            return (
              <div key={fase.id} className="col-6 col-md-3">
                <div
                  className={`card-fase ${completa ? "completa" : ""}`}
                  style={{ borderColor: completa ? fase.color : undefined }}
                  onClick={() => onSelecionarFase({ ...fase, questions: questionsData[fase.id].questions })}
                  role="button"
                  aria-label={`Iniciar fase ${fase.title}`}
                >
                  <div style={{ fontSize: "3rem", marginBottom: 8 }}>{fase.icon}</div>
                  <div
                    className="font-titulo"
                    style={{ fontSize: "0.95rem", color: fase.color, marginBottom: 4 }}
                  >
                    {fase.title}
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 10px", lineHeight: 1.3 }}>
                    {fase.description}
                  </p>
                  {completa && (
                    <div
                      style={{
                        background: fase.color,
                        color: "#fff",
                        borderRadius: 999,
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        display: "inline-block",
                      }}
                    >
                      ✓ Completa!
                    </div>
                  )}
                  {!completa && (
                    <div
                      style={{
                        background: fase.bgColor,
                        color: fase.color,
                        borderRadius: 999,
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        display: "inline-block",
                        border: `1px solid ${fase.color}`,
                      }}
                    >
                      Jogar →
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Estrelas coletadas */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <p style={{ fontWeight: 700, color: "#555", marginBottom: 8 }}>Estrelas coletadas:</p>
          <div>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`estrela ${i < totalEstrelas ? "" : "apagada"}`}>
                ⭐
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaFases;
