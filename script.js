(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const dadosDasStacks = {
    python: {
      rotulo: "Linguagem principal",
      titulo: "Python",
      descricao: "É a linguagem em que tenho mais segurança e na qual concentro meus estudos de automação, desenvolvimento e análise de dados.",
      ferramentas: ["FastAPI", "JSON", "Manipulação de arquivos"],
      projeto: "Em definição"
    },
    javascript: {
      rotulo: "Experiência acadêmica",
      titulo: "JavaScript",
      descricao: "Utilizei JavaScript em projetos da faculdade e gostei da flexibilidade da linguagem tanto para web quanto para lógica de aplicações.",
      ferramentas: ["Node.js", "JSON", "Lógica de programação"],
      projeto: "Projeto acadêmico a adicionar"
    },
    sql: {
      rotulo: "Dados em estudo",
      titulo: "SQL",
      descricao: "Uso os estudos de SQL como apoio para organizar, consultar e analisar dados em aplicações e projetos acadêmicos.",
      ferramentas: ["Consultas", "Modelagem básica", "Organização de dados"],
      projeto: "Case de dados a adicionar"
    },
    web: {
      rotulo: "Fundamentos de interface",
      titulo: "HTML & CSS",
      descricao: "Tenho conhecimentos básicos de estrutura semântica e estilização para construir interfaces web claras e responsivas.",
      ferramentas: ["HTML5", "CSS3", "Responsividade"],
      projeto: "Este portfólio"
    },
    gamemaker: {
      rotulo: "Hobby criativo",
      titulo: "GameMaker",
      descricao: "Exploro o GameMaker como ferramenta de hobby para entender mecânicas, prototipação e a construção de experiências interativas.",
      ferramentas: ["Prototipação", "Mecânicas", "Game design"],
      projeto: "Jogo futuro"
    }
  };

  const dadosDosProjetos = {
    consultas: {
      status: "Planejado",
      classeStatus: "etiqueta-status--planejado",
      tipo: "Voluntário",
      titulo: "Organização de consultas",
      resumo: "Um sistema planejado para apoiar a organização de consultas em diferentes áreas da saúde.",
      imagem: "pixel-imagem--saude",
      descricaoImagem: "Ilustração temporária de um calendário médico em pixel art",
      detalhes: [
        { titulo: "Contexto", texto: "O coordenador já confirmou a participação da equipe, mas o projeto ainda não possui nome formal e não entrou na etapa de implementação." },
        { titulo: "Escopo previsto", texto: "Organizar registros de consultas e informações de acompanhamento. Nenhum dado de pacientes será exposto no portfólio." },
        { titulo: "Minha participação", texto: "A função e as responsabilidades serão definidas com a equipe quando o desenvolvimento começar." },
        { titulo: "Tecnologias", texto: "A stack ainda será escolhida de acordo com as necessidades do projeto." }
      ]
    },
    bi: {
      status: "Em desenvolvimento",
      classeStatus: "etiqueta-status--andamento",
      tipo: "Acadêmico",
      titulo: "Projeto de BI acadêmico",
      resumo: "Trabalho de uma disciplina extensionista voltado à criação de um BI para uma empresa fictícia.",
      imagem: "pixel-imagem--bi",
      descricaoImagem: "Ilustração temporária de um painel de dados em pixel art",
      detalhes: [
        { titulo: "Contexto", texto: "O projeto faz parte de uma matéria extensionista e será apresentado como trabalho final da disciplina." },
        { titulo: "Entrega", texto: "A proposta reúne planilhas e gráficos para organizar e visualizar os dados da empresa fictícia." },
        { titulo: "Minha participação", texto: "Os detalhes da minha contribuição serão atualizados conforme o trabalho avançar." },
        { titulo: "Tecnologias", texto: "As ferramentas utilizadas ainda serão confirmadas e adicionadas ao portfólio." }
      ]
    },
    futuro: {
      status: "Espaço reservado",
      classeStatus: "",
      tipo: "Autoral",
      titulo: "Próximo projeto autoral",
      resumo: "Um espaço preparado para o projeto que melhor representar meus estudos em Python, automação ou desenvolvimento de sistemas.",
      imagem: "pixel-imagem--automacao",
      descricaoImagem: "Ilustração temporária de engrenagens e automação em pixel art",
      detalhes: [
        { titulo: "Problema", texto: "A definir a partir de uma necessidade real ou de uma tarefa que possa ser automatizada." },
        { titulo: "Solução", texto: "Será documentada quando o escopo do projeto estiver claro." },
        { titulo: "Tecnologias", texto: "A definir de acordo com o problema escolhido." },
        { titulo: "Repositório", texto: "O link será incluído quando houver uma versão organizada para publicação." }
      ]
    }
  };

  const cabecalho = document.querySelector("[data-cabecalho]");
  const botaoDoMenu = document.querySelector(".alternar-menu");
  const navegacao = document.querySelector(".navegacao-site");
  const linksDaNavegacao = [...document.querySelectorAll(".navegacao-site a")];
  const botaoVoltarAoTopo = document.querySelector("[data-voltar-topo]");
  // const botaoAlternarFonte = document.querySelector("[data-alternar-fonte]");
  // const textoBotaoFonte = botaoAlternarFonte?.querySelector(".texto-botao-fonte");

  // const aplicarFontePixel = (estaAtiva) => {
  //   document.documentElement.classList.toggle("fonte-pixel", estaAtiva);
  //   botaoAlternarFonte?.setAttribute("aria-pressed", String(estaAtiva));
  //   botaoAlternarFonte?.setAttribute("aria-label", estaAtiva ? "Usar fonte padrão" : "Ativar fonte pixel");
  //   if (textoBotaoFonte) textoBotaoFonte.textContent = estaAtiva ? "Fonte padrão" : "Fonte pixel";
  // };

  // let fontePixelSalva = false;
  // try {
  //   fontePixelSalva = localStorage.getItem("preferencia-fonte") === "pixel";
  // } catch {
  //   fontePixelSalva = false;
  // }
  // aplicarFontePixel(fontePixelSalva);

  // botaoAlternarFonte?.addEventListener("click", () => {
  //   const ativarFontePixel = !document.documentElement.classList.contains("fonte-pixel");
  //   aplicarFontePixel(ativarFontePixel);
  //   try {
  //     localStorage.setItem("preferencia-fonte", ativarFontePixel ? "pixel" : "padrao");
  //   } catch {
  //     // A troca continua funcionando mesmo quando o navegador bloqueia o armazenamento local.
  //   }
  // });

  const fecharMenu = () => {
    if (!botaoDoMenu || !navegacao) return;
    botaoDoMenu.setAttribute("aria-expanded", "false");
    botaoDoMenu.querySelector(".sr-only").textContent = "Abrir menu";
    navegacao.classList.remove("esta-aberto");
  };

  botaoDoMenu?.addEventListener("click", () => {
    const estaAberto = botaoDoMenu.getAttribute("aria-expanded") === "true";
    botaoDoMenu.setAttribute("aria-expanded", String(!estaAberto));
    botaoDoMenu.querySelector(".sr-only").textContent = estaAberto ? "Abrir menu" : "Fechar menu";
    navegacao.classList.toggle("esta-aberto", !estaAberto);
  });

  linksDaNavegacao.forEach((link) => link.addEventListener("click", fecharMenu));

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharMenu();
  });

  document.addEventListener("click", (evento) => {
    if (!navegacao?.classList.contains("esta-aberto")) return;
    if (!navegacao.contains(evento.target) && !botaoDoMenu.contains(evento.target)) fecharMenu();
  });

  const atualizarInterfaceDeRolagem = () => {
    const estaRolado = window.scrollY > 24;
    cabecalho?.classList.toggle("esta-rolado", estaRolado);
    botaoVoltarAoTopo?.classList.toggle("esta-visivel", window.scrollY > 700);
  };

  window.addEventListener("scroll", atualizarInterfaceDeRolagem, { passive: true });
  atualizarInterfaceDeRolagem();

  botaoVoltarAoTopo?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const botoesDeStack = [...document.querySelectorAll("[data-tecnologia]")];
  const painelDaStack = document.querySelector("[data-painel-stack]");
  const camposDaStack = {
    rotulo: document.querySelector("[data-rotulo-stack]"),
    titulo: document.querySelector("[data-titulo-stack]"),
    descricao: document.querySelector("[data-descricao-stack]"),
    ferramentas: document.querySelector("[data-ferramentas-stack]"),
    projeto: document.querySelector("[data-projeto-stack]")
  };

  const exibirStack = (chave, deveFocarPainel = false) => {
    const dadosStack = dadosDasStacks[chave];
    if (!dadosStack || !painelDaStack) return;

    botoesDeStack.forEach((botao) => {
      const estaAtivo = botao.dataset.tecnologia === chave;
      botao.classList.toggle("esta-ativo", estaAtivo);
      botao.setAttribute("aria-pressed", String(estaAtivo));
    });

    camposDaStack.rotulo.textContent = dadosStack.rotulo;
    camposDaStack.titulo.textContent = dadosStack.titulo;
    camposDaStack.descricao.textContent = dadosStack.descricao;
    camposDaStack.ferramentas.replaceChildren(...dadosStack.ferramentas.map((ferramenta) => {
      const item = document.createElement("li");
      item.textContent = ferramenta;
      return item;
    }));
    camposDaStack.projeto.textContent = dadosStack.projeto;

    painelDaStack.classList.remove("esta-alterando");
    void painelDaStack.offsetWidth;
    painelDaStack.classList.add("esta-alterando");

    if (deveFocarPainel && window.matchMedia("(max-width: 48rem)").matches) {
      painelDaStack.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  botoesDeStack.forEach((botao, indice) => {
    botao.addEventListener("click", () => exibirStack(botao.dataset.tecnologia, true));
    botao.addEventListener("keydown", (evento) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(evento.key)) return;
      evento.preventDefault();
      let proximoIndice = indice;
      if (evento.key === "ArrowLeft") proximoIndice = (indice - 1 + botoesDeStack.length) % botoesDeStack.length;
      if (evento.key === "ArrowRight") proximoIndice = (indice + 1) % botoesDeStack.length;
      if (evento.key === "Home") proximoIndice = 0;
      if (evento.key === "End") proximoIndice = botoesDeStack.length - 1;
      botoesDeStack[proximoIndice].focus();
      exibirStack(botoesDeStack[proximoIndice].dataset.tecnologia);
    });
  });

  const trilhoDeProjetos = document.querySelector("[data-trilho-projetos]");
  const botaoProjetoAnterior = document.querySelector("[data-projeto-anterior]");
  const botaoProximoProjeto = document.querySelector("[data-proximo-projeto]");

  const atualizarControlesDosProjetos = () => {
    if (!trilhoDeProjetos || !botaoProjetoAnterior || !botaoProximoProjeto) return;
    const limiteDaRolagem = Math.max(0, trilhoDeProjetos.scrollWidth - trilhoDeProjetos.clientWidth);
    botaoProjetoAnterior.disabled = trilhoDeProjetos.scrollLeft <= 1;
    botaoProximoProjeto.disabled = limiteDaRolagem <= 1 || trilhoDeProjetos.scrollLeft >= limiteDaRolagem - 1;
  };

  const rolarProjetos = (direcao) => {
    const cartao = trilhoDeProjetos?.querySelector(".cartao-projeto");
    if (!trilhoDeProjetos || !cartao) return;
    const espacamento = parseFloat(getComputedStyle(trilhoDeProjetos).gap) || 16;
    trilhoDeProjetos.scrollBy({ left: direcao * (cartao.getBoundingClientRect().width + espacamento), behavior: "smooth" });
  };

  botaoProjetoAnterior?.addEventListener("click", () => rolarProjetos(-1));
  botaoProximoProjeto?.addEventListener("click", () => rolarProjetos(1));
  trilhoDeProjetos?.addEventListener("scroll", atualizarControlesDosProjetos, { passive: true });
  window.addEventListener("resize", atualizarControlesDosProjetos);
  atualizarControlesDosProjetos();

  const cartoesDeProjeto = [...document.querySelectorAll("[data-projeto]")];
  const modalProjeto = document.querySelector("[data-modal-projeto]");
  const botaoFecharModal = document.querySelector("[data-fechar-modal]");
  const imagemModal = document.querySelector("[data-imagem-modal]");
  const statusModal = document.querySelector("[data-status-modal]");
  const tipoModal = document.querySelector("[data-tipo-modal]");
  const tituloModal = document.querySelector("[data-titulo-modal]");
  const resumoModal = document.querySelector("[data-resumo-modal]");
  const detalhesModal = document.querySelector("[data-detalhes-modal]");
  let cartaoQueAbriuOModal = null;

  const preencherModalDoProjeto = (chaveDoProjeto) => {
    const projeto = dadosDosProjetos[chaveDoProjeto];
    if (!projeto || !modalProjeto) return false;

    statusModal.textContent = projeto.status;
    statusModal.className = `etiqueta-status ${projeto.classeStatus}`.trim();
    tipoModal.textContent = projeto.tipo;
    tituloModal.textContent = projeto.titulo;
    resumoModal.textContent = projeto.resumo;
    imagemModal.className = `imagem-modal-projeto pixel-imagem ${projeto.imagem}`;
    imagemModal.setAttribute("aria-label", projeto.descricaoImagem);
    detalhesModal.replaceChildren(...projeto.detalhes.map((detalhe) => {
      const bloco = document.createElement("article");
      bloco.className = "detalhe-modal";
      const titulo = document.createElement("h4");
      titulo.textContent = detalhe.titulo;
      const texto = document.createElement("p");
      texto.textContent = detalhe.texto;
      bloco.append(titulo, texto);
      return bloco;
    }));
    return true;
  };

  const abrirModalDoProjeto = (cartao) => {
    if (!preencherModalDoProjeto(cartao.dataset.projeto)) return;
    cartaoQueAbriuOModal = cartao;
    document.body.classList.add("modal-projeto-aberto");
    if (typeof modalProjeto.showModal === "function") {
      modalProjeto.showModal();
    } else {
      modalProjeto.setAttribute("open", "");
      botaoFecharModal?.focus();
    }
  };

  const finalizarFechamentoDoModal = () => {
    document.body.classList.remove("modal-projeto-aberto");
    cartaoQueAbriuOModal?.focus();
    cartaoQueAbriuOModal = null;
  };

  const fecharModalDoProjeto = () => {
    if (!modalProjeto) return;
    if (typeof modalProjeto.close === "function") {
      modalProjeto.close();
    } else {
      modalProjeto.removeAttribute("open");
      finalizarFechamentoDoModal();
    }
  };

  cartoesDeProjeto.forEach((cartao) => {
    cartao.addEventListener("click", () => abrirModalDoProjeto(cartao));
    cartao.addEventListener("keydown", (evento) => {
      if (!["Enter", " "].includes(evento.key)) return;
      evento.preventDefault();
      abrirModalDoProjeto(cartao);
    });
  });

  botaoFecharModal?.addEventListener("click", fecharModalDoProjeto);
  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape" || !modalProjeto?.open) return;
    evento.preventDefault();
    fecharModalDoProjeto();
  });
  modalProjeto?.addEventListener("click", (evento) => {
    if (evento.target === modalProjeto) fecharModalDoProjeto();
  });
  modalProjeto?.addEventListener("close", finalizarFechamentoDoModal);

  const formulario = document.querySelector("[data-formulario-contato]");
  const statusDoFormulario = document.querySelector("[data-status-formulario]");
  const mensagensDeValidacao = {
    nome: "Informe seu nome com pelo menos 2 caracteres.",
    email: "Informe um endereço de e-mail válido.",
    mensagem: "Escreva uma mensagem com pelo menos 10 caracteres."
  };

  const validarCampo = (campo) => {
    const erro = document.querySelector(`[data-erro-para="${campo.name}"]`);
    const estaValido = campo.checkValidity();
    campo.setAttribute("aria-invalid", String(!estaValido));
    if (erro) erro.textContent = estaValido ? "" : mensagensDeValidacao[campo.name];
    return estaValido;
  };

  formulario?.querySelectorAll("input, textarea").forEach((campo) => {
    campo.addEventListener("blur", () => validarCampo(campo));
    campo.addEventListener("input", () => {
      if (campo.getAttribute("aria-invalid") === "true") validarCampo(campo);
    });
  });

  formulario?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const campos = [...formulario.querySelectorAll("input, textarea")];
    const estaValido = campos.map(validarCampo).every(Boolean);

    if (!estaValido) {
      statusDoFormulario.classList.add("tem-erro");
      statusDoFormulario.textContent = "Revise os campos indicados antes de continuar.";
      campos.find((campo) => !campo.checkValidity())?.focus();
      return;
    }

    const dadosFormulario = new FormData(formulario);
    const assunto = encodeURIComponent(`Contato pelo portfólio — ${dadosFormulario.get("nome")}`);
    const corpo = encodeURIComponent(`Olá, Felipe!\n\n${dadosFormulario.get("mensagem")}\n\nNome: ${dadosFormulario.get("nome")}\nE-mail para retorno: ${dadosFormulario.get("email")}`);
    statusDoFormulario.classList.remove("tem-erro");
    statusDoFormulario.textContent = "Tudo certo. Abrindo seu aplicativo de e-mail…";
    window.location.href = `mailto:felipecarreira07@gmail.com?subject=${assunto}&body=${corpo}`;
  });

  formulario?.addEventListener("focusin", () => {
    botaoVoltarAoTopo?.classList.add("oculto-durante-formulario");
  });

  formulario?.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!formulario.contains(document.activeElement)) {
        botaoVoltarAoTopo?.classList.remove("oculto-durante-formulario");
      }
    }, 0);
  });

  const idsDasSecoes = ["sobre", "stacks", "projetos", "trajetoria", "contato"];
  const secoes = idsDasSecoes.map((id) => document.getElementById(id)).filter(Boolean);

  if ("IntersectionObserver" in window) {
    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!movimentoReduzido) document.documentElement.classList.add("revelacao-pronta");

    const observadorDeRevelacao = new IntersectionObserver((entradas, observador) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("esta-visivel");
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    document.querySelectorAll(".revelar").forEach((elemento) => observadorDeRevelacao.observe(elemento));

    const observadorDeSecoes = new IntersectionObserver((entradas) => {
      const visivel = entradas
        .filter((entrada) => entrada.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visivel) return;
      linksDaNavegacao.forEach((link) => link.classList.toggle("esta-ativo", link.hash === `#${visivel.target.id}`));
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.6] });

    secoes.forEach((secao) => observadorDeSecoes.observe(secao));
  } else {
    document.querySelectorAll(".revelar").forEach((elemento) => elemento.classList.add("esta-visivel"));
  }

  document.querySelector("[data-ano-atual]").textContent = new Date().getFullYear();
})();
