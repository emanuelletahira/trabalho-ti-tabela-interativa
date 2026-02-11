// 🔥 SUPABASE
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://mvydlleewqflsvjdoofo.supabase.co";
const supabaseKey = "sb_publishable_JlPtZ6blsqdhVWTykvSldg_AzvLuWXq"; // sb_publishable_...

const supabase = createClient(supabaseUrl, supabaseKey);


/* ===== CONTEÚDOS DOS BOTÕES ===== */
const conteudos = {
    1: { titulo: "Roblox", texto: "Roblox nasceu em 2006 como uma plataforma que misturava jogo e criação, e rapidamente se transformou em um fenômeno cultural global. Diferente de títulos tradicionais, ele ofereceu às pessoas — especialmente crianças e adolescentes — a chance de não apenas jogar, mas também criar seus próprios mundos e experiências interativas. Essa proposta democratizou o desenvolvimento de jogos e incentivou milhões a aprender conceitos de programação e design de forma prática e divertida. O impacto cultural é enorme: Em 2023, já contava com mais de 200 milhões de contas ativas, consolidando-se como uma das maiores comunidades de jogos online . A diversidade cultural dos criadores enriquece o ecossistema, trazendo narrativas e tradições locais que tornam os jogos mais inclusivos e globais . A criatividade dos usuários é o motor do crescimento, transformando Roblox em um espaço de inovação e aprendizado coletivo . Hoje, Roblox não é apenas um jogo, mas uma plataforma social e educacional, onde jovens desenvolvem habilidades digitais, aprendem colaboração e até iniciam carreiras como desenvolvedores. Ele se tornou um reflexo da cultura gamer contemporânea: participativo, criativo e global.", imagem:"../imgs/imgA.png" },
    2: { titulo: "Fortnite", texto: "Fortnite foi lançado em 2017 pela Epic Games e rapidamente deixou de ser apenas um jogo para se tornar um dos maiores fenômenos da cultura pop e do entretenimento digital. Originalmente pensado como um modo cooperativo de sobrevivência, ganhou fama mundial com o formato battle royale, onde 100 jogadores competem até restar apenas um vencedor. O impacto cultural é enorme: Hoje já ultrapassa 650 milhões de contas registradas, consolidando-se como uma das maiores comunidades de jogos online . Tornou-se uma plataforma social, com eventos ao vivo que atraem milhões de espectadores simultaneamente, como shows virtuais de artistas famosos (Travis Scott, Ariana Grande) e colaborações com marcas e franquias de cinema, quadrinhos e moda . Mistura elementos da imaginação coletiva: personagens de universos diferentes (Star Wars, Marvel, DC, jogos clássicos) convivem em um mesmo espaço, transformando o jogo em um verdadeiro playground digital . Influenciou a cultura gamer e pop ao redefinir o que significa jogar: não é só competição, mas também expressão social e cultural, onde os jogadores se encontram, criam e participam de experiências únicas . Assim como Roblox, Fortnite transcendeu a ideia de “jogo” e virou um ecossistema cultural global, misturando entretenimento, música, cinema e moda em um espaço interativo que conecta milhões de pessoas.", imagem: "../imgs/imgB.png" },
    3: { titulo: "Minecraft", texto: "Minecraft foi lançado em 2011 pela Mojang e se tornou um dos jogos mais influentes da história dos videogames. Diferente de títulos com objetivos fixos, ele oferece um mundo aberto e infinito, onde os jogadores podem explorar, construir e criar praticamente qualquer coisa usando blocos. Essa liberdade transformou Minecraft em uma ferramenta de expressão criativa e até educacional. O impacto cultural é profundo:Tornou-se um dos jogos mais vendidos de todos os tempos, ultrapassando 300 milhões de cópias.É usado em escolas como recurso pedagógico, ajudando alunos a aprender matemática, programação e até história. Criou uma comunidade global de criadores, que compartilham mapas, mods e servidores personalizados. Influenciou a cultura digital ao mostrar que jogos podem ser espaços de criatividade coletiva, não apenas de competição. Assim como Roblox e Fortnite, Minecraft transcendeu a ideia de “jogo” e virou um fenômeno cultural global, sendo ao mesmo tempo entretenimento, ferramenta de aprendizado e espaço social.", imagem: "../imgs/imgX.png" },
    4: { titulo: "Fifa", texto: "FIFA é uma das franquias de jogos de futebol mais famosas do mundo, criada pela EA Sports em 1993. Desde o início, o objetivo foi oferecer uma experiência realista de futebol digital, com times licenciados, jogadores oficiais e estádios reconhecíveis. Ao longo dos anos, FIFA se consolidou como referência em simulação esportiva e se tornou parte da cultura gamer e esportiva global. O impacto cultural é enorme: É uma das séries de jogos mais vendidas da história, com centenas de milhões de cópias comercializadas. Popularizou o futebol digital em escala mundial, permitindo que fãs jogassem com seus clubes e seleções favoritas. Criou modos icônicos como o Ultimate Team, que virou febre ao misturar colecionismo e competição online. Tornou-se parte da rotina de fãs de futebol, sendo usado até como forma de socialização entre amigos e comunidades. Influenciou a cultura esportiva ao aproximar o mundo virtual do real, com parcerias oficiais com ligas, clubes e jogadores. Assim como Roblox, Fortnite e Minecraft, FIFA transcendeu o conceito de jogo e virou um fenômeno cultural, conectando o entretenimento digital com a paixão mundial pelo futebol.", imagem: "../imgs/imgY.png" }
};


/* ===== MOSTRAR CONTEÚDO ===== */
function mostrarConteudo(id) {
    const c = conteudos[id];
    const area = document.getElementById("conteudo");
    const cadastro = document.getElementById("cadastroBox");

    if (!c || !area || !cadastro) return;

    cadastro.style.display = "none";
    area.querySelectorAll(".conteudo-dinamico").forEach(el => el.remove());

    const bloco = document.createElement("div");
    bloco.className = "conteudo-dinamico";
    bloco.innerHTML = `
        <img src="${c.imagem}">
        <h2>${c.titulo}</h2>
        <p>${c.texto}</p>
    `;

    area.appendChild(bloco);
}


/* ===== ABRIR CADASTRO ===== */
function abrirCadastro() {
    const cadastro = document.getElementById("cadastroBox");
    const area = document.getElementById("conteudo");

    if (!cadastro || !area) return;

    area.querySelectorAll(".conteudo-dinamico").forEach(el => el.remove());
    cadastro.style.display = "block";
}


/* ===== FUNÇÕES GLOBAIS (HTML ONCLICK) ===== */
window.mostrarConteudo = mostrarConteudo;
window.abrirCadastro = abrirCadastro;


/* ===== TUDO QUE DEPENDE DO HTML ===== */
document.addEventListener("DOMContentLoaded", () => {

    // 🌟 PARTÍCULAS
    const container = document.querySelector(".particulas");
    if (container) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement("span");
            p.classList.add("particula");
            p.style.left = Math.random() * 100 + "vw";
            p.style.animationDuration = 6 + Math.random() * 10 + "s";
            p.style.animationDelay = Math.random() * 5 + "s";
            container.appendChild(p);
        }
    }

    // 🔄 GIRO DOS BOTÕES
    document.querySelectorAll(".btn-game").forEach(botao => {
        botao.addEventListener("click", () => {
            botao.classList.remove("girando");
            void botao.offsetWidth;
            botao.classList.add("girando");
        });
    });

    // 📝 FORMULÁRIO
    const form = document.getElementById("formCadastro");
    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value,
            nascimento: document.getElementById("nascimento").value,
            email: document.getElementById("email").value,
            cpf: document.getElementById("cpf").value,
            endereco: document.getElementById("endereco").value
        };

        console.log("Enviando pro Supabase...", dados);

        const { data, error } = await supabase
            .from("cadastros")
            .insert([dados]);

        if (error) {
            console.error("ERRO SUPABASE:", error);
            alert("Erro ao salvar: " + error.message);
        } else {
            console.log("SALVO:", data);
            alert("Cadastro salvo com sucesso!");
            form.reset();
        }
    });

});
