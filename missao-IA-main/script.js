const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com quantos kgs um porco deixa de ser adolescente?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "Quase",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Se agora o porco olhou o relogio e viu que são 10h, daqui a 6h será que horas?",
        alternativas: [
            {
                texto:"Mais que um, menos que mil",
                afirmacao:"afirmacao"
            },
            {
                texto: "Ontem",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Se tem 2 porcos a direita, 4 porcos a esquerda, e 3 porcos atras, qual é o nome do décimo terceiro?",
        alternativas: [
            {
                texto:"Estou preso em um ciclo de dor e sofrimento",
                afirmacao:"afirmacao"
            },
            {
                texto:"João",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "2+2",
        alternativas: [
            {
                texto:"4.",
                afirmacao:"afirmacao"
            },
            {
                texto:"4",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Como se diz, 'eu quero uma dica' em ingles?",
        alternativas: [
            {
                texto: "I want a dick",
                afirmacao:"afirmacao"
            },
            {
                texto: "I want a tip",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();