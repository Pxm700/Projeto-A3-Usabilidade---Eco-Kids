// src/App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TelaInicial from "./components/TelaInicial";
import TelaFases from "./components/TelaFases";
import TelaQuiz from "./components/TelaQuiz";
import TelaPontuacao from "./components/TelaPontuacao";
import TelaFinal from "./components/TelaFinal";

function App() {
  // ── Estado global do jogo ──────────────────────────────────────────
  const [tela, setTela] = useState("inicial"); // inicial | fases | quiz | pontuacao | final
  const [faseAtual, setFaseAtual] = useState(null);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [fasesCompletas, setFasesCompletas] = useState([]);
  const [resultadoFase, setResultadoFase] = useState(null);

  // Heurística Nielsen #1 – Visibilidade do status do sistema
  // O título da aba muda conforme a tela atual
  useEffect(() => {
    const titulos = {
      inicial: "EcoKids: Missão Reciclagem 🌎",
      fases: "Escolha sua fase – EcoKids",
      quiz: `Fase ${faseAtual?.id ?? ""} – EcoKids`,
      pontuacao: "Resultado – EcoKids",
      final: "Você salvou o planeta! 🌎",
    };
    document.title = titulos[tela] || "EcoKids";
  }, [tela, faseAtual]);

  // ── Handlers de navegação ──────────────────────────────────────────
  const irParaFases = () => setTela("fases");

  const iniciarFase = (fase) => {
    setFaseAtual(fase);
    setResultadoFase(null);
    setTela("quiz");
  };

  const finalizarFase = (acertos, total) => {
    const pontos = acertos * 25; // 25 pts por acerto
    setPontuacaoTotal((prev) => prev + pontos);
    setFasesCompletas((prev) =>
      prev.includes(faseAtual.id) ? prev : [...prev, faseAtual.id]
    );
    setResultadoFase({ acertos, total, pontos });
    setTela("pontuacao");
  };

  const proximaFase = () => {
    // Se todas as 4 fases foram completadas, vai para tela final
    if (fasesCompletas.length >= 4) {
      setTela("final");
    } else {
      setTela("fases");
    }
  };

  const reiniciarJogo = () => {
    setPontuacaoTotal(0);
    setFasesCompletas([]);
    setFaseAtual(null);
    setResultadoFase(null);
    setTela("inicial");
  };

  // ── Heurística Nielsen #2 – Controle e liberdade do usuário ───────
  // Botão de voltar disponível na maioria das telas
  const voltarParaFases = () => setTela("fases");

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div className="app-wrapper">
      {tela === "inicial" && (
        <TelaInicial onJogar={irParaFases} />
      )}
      {tela === "fases" && (
        <TelaFases
          fasesCompletas={fasesCompletas}
          pontuacaoTotal={pontuacaoTotal}
          onSelecionarFase={iniciarFase}
          onVoltar={() => setTela("inicial")}
        />
      )}
      {tela === "quiz" && faseAtual && (
        <TelaQuiz
          fase={faseAtual}
          onFinalizar={finalizarFase}
          onVoltar={voltarParaFases}
        />
      )}
      {tela === "pontuacao" && resultadoFase && (
        <TelaPontuacao
          resultado={resultadoFase}
          pontuacaoTotal={pontuacaoTotal}
          fase={faseAtual}
          fasesCompletas={fasesCompletas}
          onProxima={proximaFase}
          onVoltar={voltarParaFases}
        />
      )}
      {tela === "final" && (
        <TelaFinal
          pontuacaoTotal={pontuacaoTotal}
          onReiniciar={reiniciarJogo}
        />
      )}
    </div>
  );
}

export default App;
