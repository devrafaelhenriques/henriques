const portfolioItems = [
  {
    id: 1,
    category: "ensaios",
    categoryLabel: "Ensaios Fotográficos",
    type: "foto",
    typeLabel: "Fotografia",
    title: "Editorial Premium para Marca de Moda",
    description: "Direção de arte e fotografia para reposicionamento de coleção com linguagem sofisticada.",
    details: "Produção completa com moodboard, direção criativa e pós-produção. Resultado: aumento de percepção premium e maior engajamento nos lançamentos.",
    meta: "Cliente: Marca Aurora • Entrega: 48 fotos tratadas",
    mediaUrl: "./img/fundo2.png",
    projectUrl: "https://www.instagram.com/henriquesgrupo"
  },
  {
    id: 2,
    category: "videos",
    categoryLabel: "Vídeos",
    type: "video",
    typeLabel: "Audiovisual",
    title: "Vídeo Manifesto de Posicionamento",
    description: "Filme institucional com foco emocional e roteiro para conversão.",
    details: "Captação em múltiplas locações, motion graphics e trilha licenciada para reforçar autoridade da marca.",
    meta: "Cliente: Grupo Atria • Entrega: filme 90s + recortes",
    projectUrl: "https://www.youtube.com/"
  },
  {
    id: 3,
    category: "sites",
    categoryLabel: "Sites & Sistemas",
    type: "site",
    typeLabel: "Site",
    title: "Plataforma Comercial de Alto Desempenho",
    description: "Website premium com estrutura orientada a leads e performance.",
    details: "Arquitetura de informação, copy estratégica e otimização técnica para velocidade e SEO local.",
    meta: "Cliente: Prime Consultoria • Entrega: site + dashboard",
    mediaUrl: "./img/logo2.png",
    projectUrl: "https://example.com"
  },
  {
    id: 4,
    category: "marcas",
    categoryLabel: "Marcas & Campanhas",
    type: "foto",
    typeLabel: "Campanha",
    title: "Lançamento de Marca com Campanha 360º",
    description: "Identidade visual, peças digitais e plano de conteúdo coordenado.",
    details: "Estratégia de entrada no mercado com criativos para awareness e performance em mídia paga.",
    meta: "Cliente: Nexo Tech • Entrega: branding + campanha"
  },
  {
    id: 5,
    category: "ensaios",
    categoryLabel: "Ensaios Fotográficos",
    type: "foto",
    typeLabel: "Fotografia",
    title: "Retratos Corporativos para Liderança",
    description: "Sessão fotográfica executiva para fortalecer autoridade pessoal e institucional.",
    details: "Captação em estúdio e ambiente corporativo com direção de poses e tratamento refinado.",
    meta: "Cliente: Atlas Partners • Entrega: 30 retratos"
  },
  {
    id: 6,
    category: "videos",
    categoryLabel: "Vídeos",
    type: "video",
    typeLabel: "Audiovisual",
    title: "Série de Reels para Conversão",
    description: "Pacote audiovisual com foco em retenção, prova social e chamadas para ação.",
    details: "Roteiros curtos, filmagem vertical e edição otimizada para plataformas sociais.",
    meta: "Cliente: Clínica Vitta • Entrega: 20 vídeos"
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
