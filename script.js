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
  },
  {
    id: 7,
    category: "marcas",
    categoryLabel: "Marcas & Campanhas",
    type: "foto",
    typeLabel: "Campanha",
    title: "Outdoor – Campanha de Natal",
    description: "Criação de outdoor para campanha de Natal com foco em impacto visual, mensagem direta e alto poder de atenção.",
    details: "Desenvolvimento do conceito criativo e do design do material, pensado para leitura rápida, forte presença visual e conexão emocional com o público.",
    meta: "Cliente: Clínica de Olhos São José • Veiculação: campanha sazonal de Natal",
    mediaUrl: "./img/portfolio/GH-006.png",
    projectUrl: "https://www.behance.net/gallery/241584079/Outdoor-Campanha-de-Natal-Clinica-de-Olhos-Sao-Jos"
  },
  {
    id: 8,
    category: "ensaios",
    categoryLabel: "Ensaios Fotográficos",
    type: "foto",
    typeLabel: "Fotografia",
    title: "Fotos - JISC 2025",
    description: "Cobertura fotográfica de evento acadêmico com foco em registros institucionais, interação e momentos-chave.",
    details: "Produção fotográfica completa durante o evento, valorizando palestras, networking e a experiência do público, com edição profissional para uso institucional e divulgação.",
    meta: "Evento: JISC 2025 • Entrega: galeria completa em alta resolução",
    mediaUrl: "./img/portfolio/GH-008.png",
    projectUrl: "https://www.behance.net/gallery/239219153/Fotografia-e-Edicao-JISC-2025"
  },
  {
    id: 9,
    category: "sites",
    categoryLabel: "Sites & Sistemas",
    type: "sites",
    typeLabel: "Sites",
    title: "Site de Links Rápidos",
    description: "Infraestrutura proprietária para gestão de imagem e conectividade entre lideranças acadêmicas e empresariais.",
    details: "Arquitetura de informação, programação web, web design, links rápidos",
    meta: "Cliente: Rafael Henriques • Entrega: site",
    mediaUrl: "./img/portfolio/GH-009.png",
    projectUrl: "https://www.behance.net/gallery/243661643/Rafael-Henriques-Personal-Digital-Hub?platform=direct"
  },
  {
    id: 10,
    category: "marcas",
    categoryLabel: "Marcas & Campanhas",
    type: "foto",
    typeLabel: "Campanha",
    title: "Artes para Campanha de Volta as Aulas - Atlética Cavalo de Troia",
    description: "Criação de artes para posts de volta as aulas da Atlética Cavalo de Troia. Apresentação da diretoria e procurando calouros.",
    details: "Desenvolvimento completo do material, desde a organização das informações até o design visual, garantindo comunicação objetiva, estética limpa e alinhada à identidade da atlética.",
    meta: "Cliente: Associação Atlética Acadêmica Cavalo de Troia • Entrega: material de uso digital",
    mediaUrl: "./img/portfolio/GH-010.png",
    projectUrl: "https://www.behance.net/gallery/243587261/Post-para-Instagram-Cavalo-de-Troia"
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



const reviewsTrack = document.getElementById("google-reviews-track");
const reviewsPrev = document.getElementById("reviews-prev");
const reviewsNext = document.getElementById("reviews-next");

const renderStars = (count = 5) => "★".repeat(Math.max(0, Math.min(5, Number(count || 0))));

const createReviewCard = (review) => {
  const card = document.createElement("article");
  card.className = "google-review-card";
  card.setAttribute("data-reveal", "");

  const link = review.url
    ? `<a class="google-review-card__link" href="${review.url}" target="_blank" rel="noreferrer">Ver no Google</a>`
    : "";

  card.innerHTML = `
    <h3 class="google-review-card__name">${review.nome || "Cliente"}</h3>
    <p class="google-review-card__stars" aria-label="${review.estrelas || 5} de 5 estrelas">${renderStars(review.estrelas)}</p>
    <p class="google-review-card__text">${review.texto || "Avaliação indisponível."}</p>
    ${link}
  `;

  return card;
};

const initGoogleReviews = async () => {
  if (!reviewsTrack) return;

  try {
    const response = await fetch("./avaliacoes-google.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Erro ao carregar avaliações (${response.status})`);
    }

    const reviews = await response.json();
    reviewsTrack.innerHTML = "";

    reviews.forEach((review) => {
      reviewsTrack.appendChild(createReviewCard(review));
    });

    initReveal();
  } catch (error) {
    reviewsTrack.innerHTML = `<p class="google-review-card__text">Não foi possível carregar as avaliações agora.</p>`;
  }

  const slide = () => Math.max(reviewsTrack.clientWidth * 0.82, 280);

  reviewsPrev?.addEventListener("click", () => {
    reviewsTrack.scrollBy({ left: -slide(), behavior: "smooth" });
  });

  reviewsNext?.addEventListener("click", () => {
    reviewsTrack.scrollBy({ left: slide(), behavior: "smooth" });
  });
};

initPortfolio();
initReveal();
initGoogleReviews();
