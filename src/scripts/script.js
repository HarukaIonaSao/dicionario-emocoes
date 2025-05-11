const emocoes = [
    {
        id: 1,
        emocao: "Alegre",
        imagem: "😃",
        descricao: "Sentimento de bem-estar e contentamento, geralmente relacionado a algo positivo.",
        como_identificar: [
            "Vontade de sorrir",
            "Sensação de leveza no corpo",
            "Energia aumentada",
            "Facilidade em interagir"
        ]
    },
    {
        id: 2,
        emocao: "Ativo",
        imagem: "💪",
        descricao: "Quando você se sente cheio de energia e pronto para agir.",
        como_identificar: [
            "Corpo acelerado",
            "Facilidade para iniciar atividades",
            "Sensação de disposição"
        ]
    },
    {
        id: 3,
        emocao: "Impaciente",
        imagem: "😤",
        descricao: "Irritação ou frustração por esperar algo ou alguém.",
        como_identificar: [
            "Mexer mãos ou pés com frequência",
            "Respiração curta e acelerada",
            "Sensação de irritação"
        ]
    },
    {
        id: 4,
        emocao: "Triste",
        imagem: "😢",
        descricao: "Sentimento de pesar ou melancolia.",
        como_identificar: [
            "Sensação de peso no peito",
            "Falta de energia",
            "Dificuldade de concentração",
            "Vontade de chorar",
            "Perda de apetite"
        ]
    },
    {
        id: 5,
        emocao: "Temeroso",
        imagem: "😨",
        descricao: "Medo ou preocupação em relação ao futuro.",
        como_identificar: [
            "Coração acelerado",
            "Sensação de alerta constante",
            "Evitar certas situações"
        ]
    },
    {
        id: 6,
        emocao: "Constrangido",
        imagem: "🫣",
        descricao: "Desconforto ou vergonha por algo.",
        como_identificar: [
            "Vontade de se esconder",
            "Sensação de calor no rosto",
            "Dificuldade em manter contato visual"
        ]
    },
    {
        id: 7,
        emocao: "Forte",
        imagem: "💪",
        descricao: "Capacidade de enfrentar desafios com confiança.",
        como_identificar: [
            "Postura firme",
            "Pensamento positivo",
            "Segurança ao tomar decisões"
        ]
    },
    {
        id: 8,
        emocao: "Alerta",
        imagem: "👀",
        descricao: "Totalmente atento e pronto para reagir.",
        como_identificar: [
            "Respiração acelerada",
            "Sensação de vigilância",
            "Movimentos rápidos e atentos"
        ]
    },
    {
        id: 9,
        emocao: "Inveja",
        imagem: "😒",
        descricao: "Desejo de ter algo que outra pessoa possui.",
        como_identificar: [
            "Comparação constante com os outros",
            "Sensação de injustiça",
            "Foco no que não tem"
        ]
    },
    {
        id: 10,
        emocao: "Encurralado",
        imagem: "⛓️",
        descricao: "Sentimento de estar sem saída ou alternativas.",
        como_identificar: [
            "Sensação de impotência",
            "Pensamentos repetitivos sobre um problema",
            "Falta de motivação para agir"
        ]
    },
    {
        id: 11,
        emocao: "Raiva",
        imagem: "😡",
        descricao: "Irritação que pode levar à agressividade.",
        como_identificar: [
            "Respiração forte",
            "Mandíbula tensionada",
            "Desejo de confrontar algo ou alguém"
        ]
    },
    {
        id: 12,
        emocao: "Entusiasmado",
        imagem: "😃",
        descricao: "Animação com algo que vai acontecer.",
        como_identificar: [
            "Sorrisos frequentes",
            "Energia aumentada",
            "Dificuldade em ficar parado"
        ]
    },
    {
        id: 13,
        emocao: "Vingativo",
        imagem: "😈",
        descricao: "Desejo de fazer mal a alguém que te feriu.",
        como_identificar: [
            "Pensamentos obsessivos sobre justiça própria",
            "Sensação de rancor",
            "Desejo de ver o outro sofrer"
        ]
    },
    {
        id: 14,
        emocao: "Ansioso",
        imagem: "😰",
        descricao: "Preocupação constante com o futuro.",
        como_identificar: [
            "Pensamentos acelerados",
            "Sensação de alerta mesmo sem motivo real",
            "Sensação de aperto no peito",
            "Dificuldade para relaxar",
            "Frio repentino",
            "Roer unhas ou puxar o cabelo"
        ]
    },
    {
        id: 15,
        emocao: "Frustrado",
        imagem: "🤬",
        descricao: "Decepção por algo não sair como esperado.",
        como_identificar: [
            "Respiração pesada",
            "Vontade de desistir ou reclamar",
            "Irritação interna"
        ]
    },
    {
        id: 16,
        emocao: "Envergonhado",
        imagem: "🪱",
        descricao: "Vergonha por algo que fez ou disse.",
        como_identificar: [
            "Sensação de calor no rosto",
            "Vontade de se esconder"
        ]
    },
    {
        id: 17,
        emocao: "Culpada",
        imagem: "😫",
        descricao: "Sentimento de que fez algo errado.",
        como_identificar: [
            "Pensamentos recorrentes sobre o erro",
            "Dificuldade em se perdoar",
            "Evitar contato com certas pessoas"
        ]
    },
    {
        id: 18,
        emocao: "Surpreso",
        imagem: "😯",
        descricao: "Emoção causada por algo inesperado, bom ou ruim.",
        como_identificar: [
            "Olhos arregalados",
            "Respiração presa por um momento",
            "Reação automática (grito, risada ou silêncio)"
        ]
    },
    {
        id: 19,
        emocao: "Indefeso",
        imagem: "😣",
        descricao: "Vulnerabilidade diante de uma situação difícil.",
        como_identificar: [
            "Falta de reação",
            "Sensação de desamparo",
            "Pensamentos de desmotivação"
        ]
    },
    {
        id: 20,
        emocao: "Aborrecido",
        imagem: "😤",
        descricao: "Incomodado ou chateado com algo.",
        como_identificar: [
            "Suspiros frequentes",
            "Expressão séria",
            "Desejo de se afastar da situação"
        ]
    },
    {
        id: 21,
        emocao: "Desesperançado",
        imagem: "⛈️",
        descricao: "Sentimento de que não há soluções.",
        como_identificar: [
            "Pensamentos negativos constantes",
            "Falta de vontade de tentar algo novo",
            "Sensação de peso emocional"
        ]
    },
    {
        id: 22,
        emocao: "Desafiado",
        imagem: "🦁",
        descricao: "Enfrentar uma situação difícil com determinação.",
        como_identificar: [
            "Vontade de superar obstáculos",
            "Pensamento estratégico",
            "Motivação para agir"
        ]
    },
    {
        id: 23,
        emocao: "Magoado",
        imagem: "💔",
        descricao: "Tristeza causada por algo ou alguém.",
        como_identificar: [
            "Sensação de aperto no peito",
            "Vontade de chorar",
            "Necessidade de se afastar"
        ]
    },
    {
        id: 24,
        emocao: "Compassivo",
        imagem: "💕",
        descricao: "Empatia e desejo de ajudar os outros.",
        como_identificar: [
            "Vontade de apoiar alguém",
            "Sensação de conexão com os outros",
            "Ato de ajudar espontaneamente"
        ]
    },
    {
        id: 25,
        emocao: "Interessado",
        imagem: "🤔",
        descricao: "Curiosidade ou atenção sobre algo ou alguém.",
        como_identificar: [
            "Foco no assunto",
            "Expressão facial atenta",
            "Perguntas frequentes"
        ]
    },
    {
        id: 26,
        emocao: "Entediado",
        imagem: "🥱",
        descricao: "Sensação de falta de interesse ou estímulo.",
        como_identificar: [
            "Dificuldade em se concentrar em atividades",
            "Sensação de tempo passando devagar"
        ]
    },
    {
        id: 27,
        emocao: "Corajoso",
        imagem: "🦸",
        descricao: "Enfrentar o medo e seguir em frente.",
        como_identificar: [
            "Postura firme",
            "Pensamento positivo apesar do medo",
            "Ação mesmo diante da incerteza"
        ]
    },
    {
        id: 28,
        emocao: "Amado",
        imagem: "💖",
        descricao: "Sentir-se cuidada e apreciada.",
        como_identificar: [
            "Sensação de calor no peito",
            "Sorrisos espontâneos",
            "Sentimento de segurança"
        ]
    },
    {
        id: 29,
        emocao: "Apático",
        imagem: "😐",
        descricao: "Falta de interesse ou emoção diante de algo.",
        como_identificar: [
            "Indiferença a situações",
            "Falta de motivação",
            "Sensação de vazio emocional"
        ]
    },
    {
        id: 30,
        emocao: "Sobrecarregado",
        imagem: "🌀",
        descricao: "Sensação de estar lidando com mais do que consegue administrar.",
        como_identificar: [
            "Dificuldade de concentração",
            "Pensamentos acelerados e confusos",
            "Vontade de fugir ou se desligar da realidade"
        ]
    },
    {
        id: 31,
        emocao: "Sensível",
        imagem: "🥺",
        descricao: "Sentir-se mais emocional e reativo a estímulos.",
        como_identificar: [
            "Vontade de chorar facilmente",
            "Reação intensa a comentários ou situações",
            "Sensação de que tudo pesa mais do que o normal"
        ]
    },
    {
        id: 32,
        emocao: "Confuso",
        imagem: "😕",
        descricao: "Incerteza ou falta de clareza sobre algo.",
        como_identificar: [
            "Dúvidas frequentes",
            "Dificuldade em tomar decisões",
            "Sensação de desorientação"
        ]
    },
    {
        id: 33,
        emocao: "Fraco",
        imagem: "💔",
        descricao: "Falta de energia para continuar com alguma tarefa.",
        como_identificar: [
            "Cansaço extremo",
            "Desejo de descansar",
            "Falta de disposição"
        ]
    },
    {
        id: 34,
        emocao: "Confiante",
        imagem: "🤩",
        descricao: "Sentir-se seguro de suas habilidades e decisões.",
        como_identificar: [
            "Postura ereta",
            "Falar com firmeza",
            "Ação sem hesitação"
        ]
    }
];

function exibirEmocoes() {
    const emocionList = document.getElementById('emocao-list');
    
    emocoes.forEach(emo => {
        const accordion = document.createElement('div');
        accordion.classList.add('accordion');
        
// Criação do título com nome e imagem
accordion.innerHTML = `
<div class="accordion-header">
    <span class="emoji">${emo.imagem}</span>
    <span>${emo.emocao}</span>
</div>
`;

// Criação do conteúdo do painel com descrição e como identificar
const panel = document.createElement('div');
panel.classList.add('panel');
panel.innerHTML = `
    <p><strong>Descrição:</strong> ${emo.descricao}</p>
    <h4>Como identificar:</h4>
    <ul>
        ${emo.como_identificar.map(item => `<li>${item}</li>`).join('')}
    </ul>
`;

accordion.appendChild(panel);
emocionList.appendChild(accordion);

// Função para abrir/fechar o painel do accordion
accordion.addEventListener('click', function() {
    const activePanel = panel.style.display === 'block';
    // Fecha todos os outros painéis
    document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
    
    // Alterna o painel ativo
    panel.style.display = activePanel ? 'none' : 'block';
});
});
}

window.onload = exibirEmocoes;