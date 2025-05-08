const desvantagens_rpg = [
  {
      "nome": "Assombrado",
      "descricao": "Seu personagem possui um trauma ou algum tipo de fantasma ou alucinação que o assombra de tempos em tempos. A assombração pode aparecer a qualquer momento, reduzindo atributos em -1 e aumentando o custo de habilidades e magias.",
      "pontos": 2
  },
  {
      "nome": "Efeito colateral",
      "descricao": "Sempre que usar uma habilidade ou magia, algo inesperado acontece com você ou com quem está próximo.",
      "pontos": 1
  },
  {
      "nome": "Ligação sombria",
      "descricao": "Você está ligado a alguém ou algo. Quando esse alguém sente dor ou recebe dano, você também sente, mas não o contrário.",
      "pontos": 2
  },
  {
      "nome": "Poder selado",
      "descricao": "Seu personagem teve uma ou mais habilidades ou magias seladas. O mestre pode definir o que foi selado.",
      "pontos": 2
  },
  {
      "nome": "Pobreza",
      "descricao": "Seu personagem vem de uma condição de pobreza, começando com menos perícias e dinheiro.",
      "pontos": 1
  },
  {
      "nome": "Dívida",
      "descricao": "Você deve algo a alguém e poderá ser cobrado de forma inesperada durante a aventura.",
      "pontos": 1
  },
  {
      "nome": "Caçado",
      "descricao": "Alguém está à sua procura, podendo emboscá-lo mesmo quando estiver desprevenido.",
      "pontos": 2
  },
  {
      "nome": "Ato proibido",
      "descricao": "Você não pode realizar uma ação específica (ex: tocar prata). Se fizer, sofre redutores e/ou mais dano.",
      "pontos": 1
  },
  {
      "nome": "Insanidades",
      "descricao": "Conjunto de desvantagens psicológicas. Cada uma vale 1 ponto.",
      "tipos": [
          "Agressivo",
          "Depressivo",
          "Obsessivo",
          "Homicida",
          "Dupla personalidade",
          "Cleptomaníaco",
          "Piromaníaco"
      ],
      "pontos": 1
  },
  {
      "nome": "Fobia",
      "descricao": "Medo incontrolável de algo. Testes podem ser feitos para resistir.",
      "pontos": 1
  },
  {
      "nome": "Coragem excessiva",
      "descricao": "Você sempre ataca o mais forte em combate e reluta em fugir, exigindo teste de vontade.",
      "pontos": 2
  },
  {
      "nome": "Fúria",
      "descricao": "Quando provocado ou ferido, pode entrar em fúria com vários efeitos negativos e positivos.",
      "pontos": 2
  },
  {
      "nome": "Má fama",
      "descricao": "As pessoas o evitam por causa de seus atos passados. -3 em influência.",
      "pontos": 1
  },
  {
      "nome": "Código de honra",
      "descricao": "Conjunto de princípios morais. Cada um vale 1 ponto.",
      "tipos": [
          "Cod.H.dos Heróis",
          "Cod.H.da Lealdade",
          "Cod.H.da Proteção",
          "Cod.H.da Valentia",
          "Cod.H.dos Piratas",
          "Cod.H.dos Exploradores"
      ],
      "pontos": 1
  },
  {
      "nome": "Lento",
      "descricao": "Seu personagem é muito lento: -3 em iniciativa e deslocamento dividido por 2.",
      "pontos": 1
  },
  {
      "nome": "Monstruoso",
      "descricao": "Sua aparência causa repulsa. -2 na influência em situações de carisma.",
      "pontos": 1
  },
  {
      "nome": "Deficiência mágica",
      "descricao": "Dificuldade extrema com magia. -3 para testes envolvendo foco.",
      "pontos": 1
  },
  {
      "nome": "Fraqueza",
      "descricao": "Aumentar a força custa o dobro de pontos.",
      "pontos": 1
  },
  {
      "nome": "Amnésia",
      "descricao": "Você não lembra de partes do seu passado. O mestre escolherá 1 a 2 desvantagens extras.",
      "pontos": 1
  }
]
const vantagens_rpg = [
  
    {
        "id": 1,
        "nome": "Relíquia",
        "descricao": "Artefato único com habilidades aleatórias. Determinado por rolagem de dados após compra.",
        "pontos": 3
    },
    {
        "id": 2,
        "nome": "Potencial Mágico",
        "descricao": "Permite uso de magia por classes não mágicas com mana adicional fixa.",
        "pontos": 2
    },
    {
        "id": 3,
        "nome": "Mana reserva",
        "descricao": "Possui uma reserva de mana adicional que é usada após esgotar a principal. Mana/2.",
        "pontos": 2
    },
    {
        "id": 4,
        "nome": "Ataque garantido",
        "descricao": "Permite um acerto garantido por jogo. Rolagem de dano ainda é necessária.",
        "pontos": 1
    },
    {
        "id": 5,
        "nome": "Defesa garantida",
        "descricao": "Permite garantir uma defesa por jogo. Incompatível com Esquiva garantida.",
        "pontos": 1
    },
    {
        "id": 6,
        "nome": "Esquiva garantida",
        "descricao": "Permite garantir uma esquiva por jogo. Incompatível com Defesa garantida.",
        "pontos": 1
    },
    {
        "id": 7,
        "nome": "Ataque em movimento",
        "descricao": "Permite usar movimento com ataque sem gastar a ação normal.",
        "pontos": 1
    },
    {
        "id": 8,
        "nome": "Ambidestria",
        "descricao": "Permite usar armas em ambas as mãos com bônus de ataque e penalidade de defesa para o inimigo.",
        "pontos": 1
    },
    {
        "id": 9,
        "nome": "Destemido",
        "descricao": "Aumenta resistência a intimidação. Pode ser comprada até 5 vezes.",
        "pontos": 1
    },
    {
        "id": 10,
        "nome": "Empatia com animais",
        "descricao": "Permite entender motivações de animais com facilidade.",
        "pontos": 1
    },
    {
        "id": 11,
        "nome": "Patrono",
        "descricao": "Personagem possui mentor ou organização que o apoia.",
        "pontos": 2
    },
    {
        "id": 12,
        "nome": "Riqueza",
        "descricao": "Concede diferentes níveis de renda mensal e estilo de vida.",
        "pontos": 1
    },
    {
        "id": 13,
        "nome": "Herança",
        "descricao": "Recebe item, mansão ou valor monetário da família. Determinado pelo mestre.",
        "pontos": 2
    },
    {
        "id": 14,
        "nome": "Nobreza",
        "descricao": "Possui título ou linhagem nobre. +5 influência.",
        "pontos": 3
    },
    {
        "id": 15,
        "nome": "Sentidos aguçados",
        "descricao": "Recebe um sentido extremamente desenvolvido. Pode ser comprada várias vezes.",
        "pontos": 1
    }

]

window.addEventListener("DOMContentLoaded", () => {
  let pontos_ = 12;
  let desvantagem_usadas = 0;
  const pontosInfo = document.getElementById("pontos");

  function atualizarPontosVisuais() {
    pontosInfo.textContent = pontos_;
  }

  function exibirDesvantagens(desvantagem) {
  const desv = document.getElementById("desv");

  if (desvantagem.tipos && Array.isArray(desvantagem.tipos)) {
    desvantagem.tipos.forEach(tipo => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      
      input.type = "checkbox";
      input.name = "desvantagens";
      input.value = tipo;
      input.setAttribute('data-pontos', desvantagem.pontos);
      input.addEventListener("change", atualizarPontosComBaseNosInputs);

      label.appendChild(input);
      label.appendChild(document.createTextNode(` ${tipo} (+${desvantagem.pontos})`));
      desv.appendChild(label)

    });
  } else {
    const label = document.createElement("label");
    const input = document.createElement("input");
    
    input.type = "checkbox";
    input.name = "desvantagens";
    input.value = desvantagem.nome;
    input.setAttribute('data-pontos', desvantagem.pontos);
    input.addEventListener("change", atualizarPontosComBaseNosInputs);

    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${desvantagem.nome} (+${desvantagem.pontos})`));
    desv.appendChild(label)
  }
  
}

  function exibirVantagens(vantagem) {
    const container = document.getElementById("vant");
    const label = document.createElement("label");
    const input = document.createElement("input");
    
    input.type = "checkbox";
    input.name = "vantagens";
    input.value = vantagem.nome;
    input.setAttribute("data-pontos", -1 * vantagem.pontos);

    input.addEventListener("change", atualizarPontosComBaseNosInputs);

    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${vantagem.nome} (${-1 * vantagem.pontos})`));
    container.append(label);
  }

  function atualizarPontosComBaseNosInputs() {
    pontos_ = 12;
    desvantagem_usadas = 0;
    document.querySelectorAll(".atributo").forEach(attr => {
      const valor = parseInt(attr.querySelector(".valor").textContent);
      pontos_ -= (valor - 0);
    });

    document.querySelectorAll('input[name="desvantagens"]:checked').forEach(el => {
      if(desvantagem_usadas > 6) return;
      pontos_ += parseInt(el.dataset.pontos);
      desvantagem_usadas += parseInt(el.dataset.pontos);
    });

    document.querySelectorAll('input[name="vantagens"]:checked').forEach(el => {
      if (pontos_ < -1 * el.dataset.pontos) return;
      pontos_ += parseInt(el.dataset.pontos); // vantagens são negativas
    });

    if (pontos_ < 0) pontos_ = 0;

    atualizarPontosVisuais();
    atualizarCheckboxes();
  }

  function atualizarCheckboxes() {
    document.querySelectorAll('input[name="vantagens"]').forEach(el => {
      const custo = parseInt(el.dataset.pontos);
      // Se não tiver pontos suficientes e o checkbox não estiver marcado, desabilita
      if (pontos_ + custo < 0 && !el.checked) {
        el.disabled = true;
      } else {
        el.disabled = false;
      }

    });
    document.querySelectorAll('input[name="desvantagens"]').forEach(el => {
      const custo = parseInt(el.dataset.pontos);
      if(desvantagem_usadas + custo > 6) {        
        if(el.checked) return;
        el.disabled = true;
      }else if(desvantagem_usadas == 6) {
        if(el.checked) return;
        el.disabled = true;
      }else{
        el.disabled = false;
      }
    });
  }

  function configurarBotõesAtributos() {
    document.querySelectorAll(".atributo").forEach(attr => {
      const span = attr.querySelector(".valor");
      const mais = attr.querySelector(".mais");
      const menos = attr.querySelector(".menos");

      mais.addEventListener("click", () => {
        if (pontos_ <= 0) return;
        span.textContent = parseInt(span.textContent) + 1;
        pontos_--;
        atualizarPontosVisuais();
        atualizarCheckboxes();
      });

      menos.addEventListener("click", () => {
        const atual = parseInt(span.textContent);
        if (atual > 0) {
          span.textContent = atual - 1;
          pontos_++;
          atualizarPontosVisuais();
          atualizarCheckboxes();
        }
      });
    });
  }

   function carregarDesvantagens() {
    desvantagens_rpg.forEach(exibirDesvantagens);
  }

  function carregarVantagens() {
    vantagens_rpg.forEach(exibirVantagens);
  }

  // Submissão do formulário
  document.getElementById("build-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let desvantagens = [];
    let vantagens = [];

    document.querySelectorAll('input[name="desvantagens"]:checked').forEach(el => {
      desvantagens.push(el.value);
    });

    document.querySelectorAll('input[name="vantagens"]:checked').forEach(el => {
      vantagens.push(el.value);
    });

    function valorAtributo(nome) {
      const attr = document.querySelector(`.atributo[data-atributo="${nome}"]`);
      return parseInt(attr.querySelector(".valor").textContent);
    }

    const cons = valorAtributo("cons");
    const von = valorAtributo("von");

    const vida = cons * 10;
    const vontade = von * 15;
    const mana = vantagens.includes("Mana reserva") ? Math.floor(vontade / 2) : 0;

    const resultado = `
      <h3>Resultado da Build</h3>
      <p><strong>Desvantagens:</strong> ${desvantagens.join(", ")}</p>
      <p><strong>Vantagens:</strong> ${vantagens.join(", ")}</p>
      <p><strong>Pontos restantes:</strong> ${pontos_}</p>
      <p><strong>Vida:</strong> ${vida}</p>
      <p><strong>Vontade:</strong> ${vontade}</p>
      <p><strong>Mana Reserva:</strong> ${mana}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
  });

  // Inicializar tudo
  carregarDesvantagens();
  carregarVantagens();
  configurarBotõesAtributos();
  atualizarPontosVisuais();
});
