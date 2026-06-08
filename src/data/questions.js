// src/data/questions.js
// Dados das perguntas por fase — simulando uma API externa

const questionsData = {
  1: {
    id: 1,
    title: "Reciclagem Correta",
    icon: "♻️",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    description: "Aprenda a separar o lixo corretamente!",
    questions: [
      {
        id: 1,
        pergunta: "Onde devemos jogar uma garrafa de plástico vazia?",
        alternativas: ["Lixo vermelho (plástico)", "Lixo preto (orgânico)", "No chão", "Lixo azul (papel)"],
        correta: 0,
        explicacao: "Garrafas plásticas vão no lixo VERMELHO! O plástico é reciclável e pode virar outras coisas.",
      },
      {
        id: 2,
        pergunta: "Qual lixeira recebe folhas de papel e papelão?",
        alternativas: ["Vermelha", "Azul", "Verde", "Amarela"],
        correta: 1,
        explicacao: "Papel e papelão vão na lixeira AZUL! Eles podem ser reciclados para fazer novos produtos.",
      },
      {
        id: 3,
        pergunta: "Restos de comida, como cascas de frutas, devem ir para:",
        alternativas: ["Lixo verde (vidro)", "Lixo azul (papel)", "Lixo preto (orgânico)", "Lixo amarelo (metal)"],
        correta: 2,
        explicacao: "Restos de comida são orgânicos e vão no lixo PRETO! Eles viram adubo para plantas.",
      },
      {
        id: 4,
        pergunta: "Latas de alumínio (como de refrigerante) vão no lixo:",
        alternativas: ["Azul", "Verde", "Vermelho", "Amarelo"],
        correta: 3,
        explicacao: "Latas de metal vão na lixeira AMARELA! O alumínio pode ser reciclado infinitas vezes.",
      },
    ],
  },
  2: {
    id: 2,
    title: "Economia de Água",
    icon: "💧",
    color: "#2196F3",
    bgColor: "#E3F2FD",
    description: "Descubra como economizar água no dia a dia!",
    questions: [
      {
        id: 1,
        pergunta: "Qual hábito ajuda a economizar água ao escovar os dentes?",
        alternativas: ["Deixar a torneira aberta", "Fechar a torneira enquanto escova", "Usar a mangueira", "Tomar banho durante a escovação"],
        correta: 1,
        explicacao: "Fechar a torneira ao escovar os dentes economiza até 12 litros de água por escovação!",
      },
      {
        id: 2,
        pergunta: "Quanto tempo ideal deve durar um banho econômico?",
        alternativas: ["30 minutos", "1 hora", "5 minutos", "15 minutos"],
        correta: 2,
        explicacao: "Um banho de 5 minutos é suficiente e economiza muita água! Cada minuto a mais gasta cerca de 15 litros.",
      },
      {
        id: 3,
        pergunta: "O que fazer com a água da chuva para economizar?",
        alternativas: ["Jogar fora", "Reutilizar para regar plantas", "Deixar acumular na rua", "Nada"],
        correta: 1,
        explicacao: "Reutilizar água da chuva para regar plantas é ótimo! Assim economizamos água tratada.",
      },
      {
        id: 4,
        pergunta: "Uma torneira pingando desperdiça em um mês:",
        alternativas: ["1 litro", "46 litros", "500 litros", "10 litros"],
        correta: 1,
        explicacao: "Uma torneira pingando desperdiça cerca de 46 litros por mês! Sempre avise quando encontrar uma torneira com vazamento.",
      },
    ],
  },
  3: {
    id: 3,
    title: "Energia Limpa",
    icon: "⚡",
    color: "#FF9800",
    bgColor: "#FFF3E0",
    description: "Aprenda a usar energia de forma inteligente!",
    questions: [
      {
        id: 1,
        pergunta: "O que devemos fazer ao sair de um cômodo vazio?",
        alternativas: ["Deixar a luz acesa", "Apagar a luz", "Não importa", "Ligar mais aparelhos"],
        correta: 1,
        explicacao: "Apagar a luz ao sair economiza energia elétrica e ajuda o planeta! Um simples gesto faz grande diferença.",
      },
      {
        id: 2,
        pergunta: "Qual é uma fonte de energia limpa e renovável?",
        alternativas: ["Carvão mineral", "Petróleo", "Energia solar", "Gás natural"],
        correta: 2,
        explicacao: "A energia solar vem do sol e é 100% limpa e renovável! Painéis solares transformam luz em eletricidade.",
      },
      {
        id: 3,
        pergunta: "Deixar aparelhos eletrônicos no modo stand-by (em espera):",
        alternativas: ["Não gasta energia", "Ainda gasta energia", "Economiza energia", "É igual a desligar"],
        correta: 1,
        explicacao: "Aparelhos em stand-by ainda consomem energia! Desligue-os completamente ou tire da tomada quando não usar.",
      },
      {
        id: 4,
        pergunta: "Qual lâmpada é mais econômica e sustentável?",
        alternativas: ["Lâmpada incandescente", "Tocha de fogo", "Lâmpada LED", "Vela"],
        correta: 2,
        explicacao: "Lâmpadas LED consomem até 80% menos energia que as lâmpadas antigas e duram muito mais!",
      },
    ],
  },
  4: {
    id: 4,
    title: "Lixo Eletrônico",
    icon: "📱",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    description: "Saiba como descartar eletrônicos corretamente!",
    questions: [
      {
        id: 1,
        pergunta: "Onde jogar um celular velho que parou de funcionar?",
        alternativas: ["No lixo comum", "No rio", "Ponto de coleta de eletrônicos", "Enterrar no jardim"],
        correta: 2,
        explicacao: "Celulares velhos devem ir a pontos de coleta especiais! Eles contêm metais pesados que poluem o ambiente.",
      },
      {
        id: 2,
        pergunta: "Pilhas e baterias usadas devem ser descartadas:",
        alternativas: ["No lixo comum", "Em coletores específicos em lojas", "No vaso sanitário", "Na calçada"],
        correta: 1,
        explicacao: "Pilhas e baterias possuem substâncias tóxicas! Muitas lojas e mercados possuem coletores especiais para elas.",
      },
      {
        id: 3,
        pergunta: "O que significa 'e-waste' ou lixo eletrônico?",
        alternativas: ["Lixo de papel", "Eletrônicos descartados", "Lixo de cozinha", "Vidros quebrados"],
        correta: 1,
        explicacao: "E-waste são aparelhos eletrônicos descartados como TVs, computadores e celulares. Precisam de descarte especial!",
      },
      {
        id: 4,
        pergunta: "Qual atitude sustentável podemos ter com eletrônicos velhos?",
        alternativas: ["Jogar fora rapidamente", "Queimar", "Doar ou levar a pontos de coleta", "Guardar para sempre"],
        correta: 2,
        explicacao: "Doar eletrônicos em bom estado ou levá-los a pontos de coleta é a atitude mais sustentável! Assim evitamos o descarte incorreto.",
      },
    ],
  },
};

export default questionsData;
