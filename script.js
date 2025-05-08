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
      if(desvantagem_usadas == 5){        
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

  async function carregarDesvantagens() {
    const response = await fetch('/dados/desvantagens_rpg.json');
    const desvantagens = await response.json();
    desvantagens.forEach(exibirDesvantagens);
  }

  async function carregarVantagens() {
    const response = await fetch('/dados/vantagens_rpg.json');
    const vantagens = await response.json();
    vantagens.forEach(exibirVantagens);
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
