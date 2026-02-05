const portfolioItems = [
  {
    id: 1,
    category: "ensaios",
    categoryLabel: "Ensaios Fotográficos",
    type: "foto",
    typeLabel: "Fotografia",
    title: "Janta de Formatura",
    description: "Cobertura fotográfica de evento com foco em emoção, detalhes e registros espontâneos.",
    details: "Captação completa do evento com olhar documental e edição profissional, garantindo memórias autênticas e imagens prontas para compartilhamento.",
    meta: "Cliente: Evento Particular • Entrega: galeria completa em alta resolução",
    mediaUrl: "./img/portfolio/GH-002.jpg",
    projectUrl: "https://www.behance.net/gallery/241582827/Fotografia-de-Janta-de-Formatura-Terceirao-261225"
  },
  {
    id: 2,
    category: "videos",
    categoryLabel: "Vídeos",
    type: "video",
    typeLabel: "Audiovisual",
    title: "Vídeo Institucional Avatim",
    description: "Filme institucional com foco em conversão.",
    details: "Captação de múltiplos produtos e da loja para reforçar autoridade da marca.",
    meta: "Cliente: Avatim Araranguá • Entrega: vídeo institucional",
    projectUrl: "https://www.behance.net/gallery/243147295/Video-Institucional-para-a-Avatim-AraranguaSC"
  },
  {
    id: 3,
    category: "sites",
    categoryLabel: "Sites & Sistemas",
    type: "sistema",
    typeLabel: "Sistema",
    title: "Sistema de Gestão de Estoque com Financeiro",
    description: "Sistema para gerir o estoque de clinicas com financeiro incluso, gerando uma velocidade muito maior nos processos.",
    details: "Arquitetura de informação, programação web, web design.",
    meta: "Cliente: -- • Entrega: site + dashboard",
    mediaUrl: "./img/portfolio/GH-003.png",
    projectUrl: "https://www.behance.net/gallery/243595071/Sistema-de-Gestao-de-Estoque-com-Financeiro?platform=direct"
  },
  {
    id: 4,
    category: "marcas",
    categoryLabel: "Marcas & Campanhas",
    type: "foto",
    typeLabel: "Campanha",
    title: "Folder Institucional - ISO 9001 – Clínica de Olhos São José",
    description: "Criação de folder institucional com foco em clareza, credibilidade e posicionamento profissional na área da saúde.",
    details: "Desenvolvimento completo do material, desde a organização das informações até o design visual, garantindo comunicação objetiva, estética limpa e alinhada à identidade da clínica.",
    meta: "Cliente: Clínica de Olhos São José • Entrega: material pronto para impressão e uso digital",
    projectUrl: "https://www.behance.net/gallery/239181355/Folder-Semana-da-Qualidade-Clinica-de-Olhos-Sao-Jos"
  },
  {
    id: 5,
    category: "ensaios",
    categoryLabel: "Ensaios Fotográficos",
    type: "foto",
    typeLabel: "Fotografia",
    title: "Chá de Fralda",
    description: "Registro fotográfico e audiovisual de Chá de Fralda com narrativa leve e afetiva.",
    details: "Cobertura completa com atenção aos momentos-chave, interação entre convidados e entrega otimizada para redes sociais.",
    meta: "Cliente: Evento Particular • Entrega: todas as fotos tratadas em alta resolução",
    mediaUrl: "./img/portfolio/GH-01.jpg",
    projectUrl: "https://www.behance.net/gallery/243140043/Fotografia-e-Edicao-Cha-de-Fralda-Maria-Eduarda"
  },
  {
    id: 6,
    category: "videos",
    categoryLabel: "Vídeos",
    type: "video",
    typeLabel: "Audiovisual",
    title: "Vídeo Institucional Nyldora",
    description: "Filme institucional com foco em conversão.",
    details: "Captação de múltiplos produtos e da loja para reforçar autoridade da marca.",
    meta: "Cliente: Nyldora Beauty • Entrega: vídeo institucional",
    projectUrl: "https://www.behance.net/gallery/243163421/Video-Institucional-Nyldora-Beauty-AraranguaSC"
  }
];

const portfolioGrid = document.getElementById("portfolio-grid");
const filterContainer = document.getElementById("portfolio-filters");
const modal = document.getElementById("portfolio-modal");
const modalClose = document.getElementById("portfolio-modal-close");
const modalType = document.getElementById("portfolio-modal-type");
const modalTitle = document.getElementById("portfolio-modal-title");
const modalDescription = document.getElementById("portfolio-modal-description");
const modalMeta = document.getElementById("portfolio-modal-meta");
const modalLink = document.getElementById("portfolio-modal-link");

const mediaTagByType = {
  foto: "FOTO",
  video: "VÍDEO",
  site: "SITE"
};

const cardMedia = (item) => {
  if (item.mediaUrl) {
    return `<img src="${item.mediaUrl}" alt="${item.title}" class="portfolio-card__thumb">`;
  }

  return mediaTagByType[item.type] || "PROJETO";
};

const renderPortfolio = (filter = "todos") => {
  if (!portfolioGrid) return;

  const visibleItems =
    filter === "todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  portfolioGrid.innerHTML = visibleItems
    .map(
      (item) => `
      <article class="portfolio-card" data-id="${item.id}" data-type="${item.type}" data-reveal>
        <div class="portfolio-card__media">${cardMedia(item)}</div>
        <div class="portfolio-card__body">
          <p class="portfolio-card__category">${item.categoryLabel}</p>
          <h3 class="portfolio-card__title">${item.title}</h3>
          <p class="portfolio-card__desc">${item.description}</p>
        </div>
      </article>
    `
    )
    .join("");

  initReveal();
};

const openModal = (item) => {
  if (!modal) return;
  modalType.textContent = item.typeLabel;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.details;
  modalMeta.textContent = item.meta;

  if (item.projectUrl) {
    modalLink.href = item.projectUrl;
    modalLink.style.display = "inline-flex";
  } else {
    modalLink.removeAttribute("href");
    modalLink.style.display = "none";
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const initPortfolio = () => {
  if (!portfolioGrid || !filterContainer) return;

  renderPortfolio("todos");

  filterContainer.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;

    filterContainer
      .querySelectorAll(".filter-btn")
      .forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    renderPortfolio(btn.dataset.filter);
  });

  portfolioGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".portfolio-card");
    if (!card) return;

    const item = portfolioItems.find((entry) => entry.id === Number(card.dataset.id));
    if (item) openModal(item);
  });

  modal?.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  modalClose?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
};

const initReveal = () => {
  const revealElements = document.querySelectorAll("[data-reveal]:not(.revealed)");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => observer.observe(element));
};

initPortfolio();
initReveal();
