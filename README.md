# 🌍 EcoKids: Missão Reciclagem

Jogo web educativo infantil sobre sustentabilidade, desenvolvido com **React** e **Bootstrap**.

Alinhado à **ODS 12 – Consumo e Produção Responsáveis** (Nações Unidas).

---

## 📋 Requisitos do Projeto Atendidos

### ✅ Heurísticas de Nielsen aplicadas (5+)
| # | Heurística | Onde aparece |
|---|-----------|-------------|
| 1 | **Visibilidade do status do sistema** | Timer, barra de progresso, pontuação em tempo real, title da aba |
| 2 | **Controle e liberdade do usuário** | Botão "Voltar" em todas as telas; confirmação antes de sair do quiz |
| 3 | **Prevenção de erros** | Botões desabilitados após escolha; confirmação para sair |
| 4 | **Reconhecimento em vez de memorização** | Fases com ícones e descrição visíveis; letras A/B/C/D nas alternativas |
| 5 | **Estética e design minimalista** | Interface limpa, cores temáticas, sem informação desnecessária |
| 6 | **Ajuda ao usuário a reconhecer e se recuperar de erros** | Feedback imediato com explicação da resposta correta |

### ✅ Componentes React (5 componentes)
- `TelaInicial` — Apresentação com personagem e botão iniciar
- `TelaFases` — Seleção de fase com progresso
- `TelaQuiz` — Perguntas interativas com timer
- `TelaPontuacao` — Resultado da fase com estrelas
- `TelaFinal` — Conclusão com medalha e pontuação total

### ✅ Funcionalidades React
- `useState` — Estado do jogo, respostas, timer, acertos
- `useEffect` — Timer regressivo, carregamento de dica, title dinâmico
- `useCallback` — Handler otimizado de respostas
- Props entre componentes
- Renderização de listas (alternativas, fases, confetes)
- Eventos: cliques, navegação entre telas

### ✅ Requisição HTTP
- Uso de **axios** para simular busca de dica sobre ODS (TelaFases)

### ✅ Bootstrap
- Grid responsivo (`col-6 col-md-3`)
- Classes utilitárias de espaçamento e flexbox
- Spinner de carregamento

### ✅ ODS
- **ODS 12 – Consumo e Produção Responsáveis**
- 4 fases: Reciclagem, Água, Energia, Lixo Eletrônico

---

## 🚀 Como Rodar

### Pré-requisitos
- [Node.js](https://nodejs.org/) v16 ou superior
- npm (já vem com o Node)

### Instalação

```bash
# 1. Acesse a pasta do projeto
cd ecokids-missao-reciclagem

# 2. Instale as dependências
npm install

# 3. Rode o projeto em modo de desenvolvimento
npm start
```

O navegador abrirá automaticamente em `http://localhost:3000`

---

## 🎮 Como Jogar

1. **Tela Inicial** — Clique em "Começar Missão!"
2. **Tela de Fases** — Escolha uma das 4 fases
3. **Quiz** — Responda 4 perguntas em até 20 segundos cada
4. **Pontuação** — Veja seu resultado com estrelas
5. **Tela Final** — Complete todas as fases e ganhe uma medalha!

### Sistema de pontuação
- ✅ Acerto: **+25 pontos**
- ⭐ 3 estrelas: 100% de acertos
- ⭐⭐ 2 estrelas: 75%+ de acertos
- ⭐ 1 estrela: 50%+ de acertos

---

## 📁 Estrutura do Projeto

```
ecokids-missao-reciclagem/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TelaInicial.jsx      ← Tela de boas-vindas
│   │   ├── TelaFases.jsx        ← Seleção de fase + requisição HTTP
│   │   ├── TelaQuiz.jsx         ← Quiz com timer e feedback
│   │   ├── TelaPontuacao.jsx    ← Resultado da fase
│   │   └── TelaFinal.jsx        ← Conclusão do jogo
│   ├── data/
│   │   └── questions.js         ← Banco de perguntas (16 perguntas)
│   ├── App.js                   ← Roteamento e estado global
│   ├── App.css                  ← Estilos globais com CSS variables
│   └── index.js                 ← Entry point
└── package.json
```

---

## 👥 Integrantes

| Nome | RA | Curso |
|------|----|-------|
| Ana Carolina Saire Lucas | 824127342 | Engenharia de Software |
| Ariane Silvestre Maira | 824129529 | Engenharia de Software |
| Clara Eduarda Ferreira Santos | 825154944 | Engenharia de Software |
| Pedro Henrique Machado Freitas | 824147307 | Engenharia de Software |
| Luiz Gustavo Dias Machado | 825223688 | Engenharia de Software |

---

## 🌍 ODS 12 – Consumo e Produção Responsáveis

Este projeto contribui para a formação de crianças mais conscientes ambientalmente,
ensinando de forma lúdica sobre reciclagem, economia de água, energia limpa e
descarte correto de lixo eletrônico.
