

const listaSelecaoAgents = document.querySelectorAll(".agent");


listaSelecaoAgents.forEach(agent => {
    agent.addEventListener("click", () => {


        esconderCardAgent();

        const idAgentSelecionado = mostrarCardAgent(agent);

        esconderAgentnaListagem();

        ativarAgentnaListagem(idAgentSelecionado);



    })
}

)
function ativarAgentnaListagem(idAgentSelecionado) {
    const agentSelecionadonaListagem = document.getElementById(idAgentSelecionado);

    agentSelecionadonaListagem.classList.add("ativo");
}

function esconderAgentnaListagem() {
    const agentAtivonaListagem = document.querySelector(".ativo");
    agentAtivonaListagem.classList.remove("ativo");
}

function mostrarCardAgent(agent) {
    const idAgentSelecionado = agent.attributes.id.value;

    const idDoCartaoAgentParaAbrir = "card-" + idAgentSelecionado;

    const cardAgentParaAbrir = document.getElementById(idDoCartaoAgentParaAbrir);

    cardAgentParaAbrir.classList.add("aberto");
    return idAgentSelecionado;
}

function esconderCardAgent() {
    const cardAgentAberto = document.querySelector(".aberto");
    cardAgentAberto.classList.remove("aberto");
}

