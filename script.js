(function () {
  const productFilters = [
    { id: "all", label: "Все" },
    { id: "protection", label: "СЗР" },
    { id: "nutrition", label: "Питание" },
    { id: "seeds", label: "Семена" }
  ];

  const products = [
    {
      title: "Гербициды",
      kicker: "СЗР",
      category: "protection",
      text: "Решения для контроля сорной растительности в составе общей схемы."
    },
    {
      title: "Фунгициды",
      kicker: "СЗР",
      category: "protection",
      text: "Профилактика и контроль болезней с учетом культуры и фазы."
    },
    {
      title: "Инсектициды",
      kicker: "СЗР",
      category: "protection",
      text: "Контроль вредителей после мониторинга и оценки риска."
    },
    {
      title: "Протравители",
      kicker: "СЗР",
      category: "protection",
      text: "Предпосевная защита семенного материала; нормы уточняются."
    },
    {
      title: "Семена",
      kicker: "Семена",
      category: "seeds",
      text: "Направление ассортимента и условия поставки: [уточнить]."
    },
    {
      title: "Микроудобрения Янтари",
      kicker: "Питание",
      category: "nutrition",
      text: "Суббренд жидких микроудобрений внутри системы Pesticides RU."
    }
  ];

  const yantariProducts = [
    "Семена",
    "Профи",
    "Бор",
    "Цинк",
    "Молибден",
    "Калий",
    "Фосфор",
    "Кремний"
  ];

  const crops = [
    {
      id: "wheat",
      label: "Пшеница",
      focus: "Протравка, гербицидная защита, фунгицидные окна, листовое питание."
    },
    {
      id: "sunflower",
      label: "Подсолнечник",
      focus: "Сорная растительность, борное питание, стресс после обработки."
    },
    {
      id: "corn",
      label: "Кукуруза",
      focus: "Стартовое развитие, контроль сорняков, цинковое питание."
    },
    {
      id: "soy",
      label: "Соя",
      focus: "Протравка, болезни, молибденовое питание и антистресс."
    },
    {
      id: "rape",
      label: "Рапс",
      focus: "Вредители, фунгицидная защита, бор по ключевым фазам."
    },
    {
      id: "beet",
      label: "Свекла",
      focus: "Гербицидные окна, бор, калийное питание и сопровождение."
    }
  ];

  const schemeStages = [
    "Семена / протравка",
    "Гербицидная защита",
    "Фунгицидная защита",
    "Инсектицидный контроль",
    "Янтари / питание / антистресс"
  ];

  const sections = [
    {
      id: "home",
      label: "Главная",
      railTitle: "Система защиты и питания",
      railText: "СЗР, Янтари и сервис собраны в один рабочий контур для хозяйства.",
      status: "Главная",
      visual: "assets/img/image-overview.png",
      visualAlt: "Техническая агро-схема системы защиты, питания и сервиса",
      factsTitle: "Система",
      facts: [
        ["СЗР + питание", "Защита культур и питание рассматриваются как связанная схема."],
        ["Янтари", "Суббренд жидких микроудобрений внутри Pesticides RU."],
        ["Агросопровождение", "Подбор решений по культуре, региону и сезонной задаче."]
      ],
      render: renderHome
    },
    {
      id: "products",
      label: "Продукция",
      railTitle: "Каталог направлений",
      railText: "Категории продукта без неподтвержденных составов, норм и регистрационных заявлений.",
      status: "Продукция",
      visual: "assets/img/image-products.png",
      visualAlt: "Техническая иллюстрация каталога агрохимической продукции",
      factsTitle: "Запрос продукта",
      facts: [
        ["Категории", "Гербициды, фунгициды, инсектициды, протравители, семена, Янтари."],
        ["Наличие и цена", "Актуальные позиции, фасовки и условия поставки: [уточнить]."],
        ["Документы", "Регистрационные данные и инструкции добавляются после проверки."]
      ],
      render: renderProducts
    },
    {
      id: "yantari",
      label: "Янтари",
      railTitle: "Суббренд питания",
      railText: "Янтари показан как линейка микроудобрений внутри главного бренда Pesticides RU.",
      status: "Янтари",
      visual: "assets/img/image-yantari.png",
      visualAlt: "Техническая иллюстрация жидких микроудобрений Янтари",
      factsTitle: "Архитектура бренда",
      facts: [
        ["Pesticides RU → Янтари", "Главный бренд удерживает систему, Янтари отвечает за питание."],
        ["Составы", "Точные составы, нормы и регламенты применения: [уточнить]."],
        ["Каталог", "PDF и карточки продуктов подключаются после согласования."]
      ],
      diagram: true,
      render: renderYantari
    },
    {
      id: "schemes",
      label: "Схемы",
      railTitle: "Культура → фаза → решение",
      railText: "Схемы работают как предварительная карта, не как финальная агрономическая инструкция.",
      status: "Схемы",
      visual: "assets/img/image-schemes.png",
      visualAlt: "Техническая иллюстрация схем защиты и питания по фазам культуры",
      factsTitle: "Схемы",
      facts: [
        ["Культуры", "Пшеница, подсолнечник, кукуруза, соя, рапс, свекла."],
        ["Этапы", "Протравка, защита, контроль вредителей, питание Янтари."],
        ["Важно", "Финальные рекомендации зависят от поля, фазы, региона и ограничений."]
      ],
      render: renderSchemes
    },
    {
      id: "services",
      label: "Услуги",
      railTitle: "Полевой сервис",
      railText: "Сервисные направления соединяют поставку, консультацию и полевые операции.",
      status: "Услуги",
      visual: "assets/img/image-services.png",
      visualAlt: "Техническая иллюстрация агросервиса, диагностики и обработки посевов",
      factsTitle: "Сервис",
      facts: [
        ["Подбор схем", "Связка СЗР, питания и операции под задачу хозяйства."],
        ["Диагностика", "Анализы почвы, воды и листа: [уточнить]."],
        ["Полевые работы", "Техника, регионы и условия обработки: [уточнить]."]
      ],
      render: renderServices
    },
    {
      id: "company",
      label: "Компания",
      railTitle: "Группа направлений",
      railText: "Компания показана как система направлений, без неподтвержденной юридической детализации.",
      status: "Компания",
      visual: "assets/img/image-company.png",
      visualAlt: "Техническая схема структуры агрокомпании и направлений работы",
      factsTitle: "Компания",
      facts: [
        ["Главный бренд", "Pesticides RU объединяет защиту, питание и сопровождение."],
        ["Янтари", "Линейка микроудобрений внутри общей структуры."],
        ["Данные", "Реквизиты, документы и структура группы: [уточнить]."]
      ],
      diagram: true,
      render: renderCompany
    },
    {
      id: "contacts",
      label: "Контакты",
      railTitle: "Запрос рекомендации",
      railText: "Форма собирает вводные для подбора схемы или коммерческого предложения.",
      status: "Контакты",
      visual: "assets/img/image-contacts.png",
      visualAlt: "Техническая карта заявок и регионального агросопровождения",
      factsTitle: "Контакты",
      facts: [
        ["Телефон", "[уточнить]"],
        ["Email", "[уточнить]"],
        ["Регион", "[уточнить]"]
      ],
      render: renderContacts
    }
  ];

  const state = {
    activeId: "home",
    activeIndex: 0,
    cropId: "wheat"
  };

  const sectionMap = new Map(sections.map((section, index) => [section.id, { section, index }]));
  const contentPanel = document.querySelector("[data-content-panel]");
  const railIndex = document.querySelector("[data-rail-index]");
  const railTitle = document.querySelector("[data-rail-title]");
  const railText = document.querySelector("[data-rail-text]");
  const leftRail = document.querySelector(".left-rail");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMedia = window.matchMedia("(max-width: 960px)");

  function setMobileMenu(isOpen) {
    if (!leftRail || !menuToggle) return;
    leftRail.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  function renderHome() {
    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Pesticides RU · СЗР · Янтари · агросервис</span>
          <h1>СЗР, микроудобрения Янтари и агросопровождение в одной системе</h1>
          <p>Пестициды РУ объединяет поставку средств защиты растений, собственную линейку жидких микроудобрений Янтари, услуги обработки и агрономическое сопровождение.</p>
        </div>
        <div class="module-grid">
          ${renderCard("Защита", "Гербициды, фунгициды, инсектициды, протравители.", "СЗР")}
          ${renderCard("Питание", "Янтари как суббренд жидких микроудобрений.", "Янтари", "card--accent")}
          ${renderCard("Сервис", "Подбор схем, обработка, консультации, сопровождение.", "Агросервис")}
        </div>
        <div class="action-row">
          <button class="button" type="button" data-section-link data-section="schemes">Подобрать схему</button>
          <button class="button button--secondary" type="button" data-section-link data-section="yantari">Смотреть Янтари</button>
        </div>
      </div>
    `;
  }

  function renderProducts(activeFilter = "all") {
    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Категории</span>
          <h1>Продукция для защиты и питания культур</h1>
          <p>Каталог собран по направлениям. Точные позиции, составы, фасовки, наличие, цены и регистрационные данные добавляются только после проверки.</p>
        </div>
        <div class="filter-row" role="group" aria-label="Фильтр продукции">
          ${productFilters.map((filter) => `
            <button class="filter-button${filter.id === activeFilter ? " is-active" : ""}" type="button" data-product-filter="${filter.id}">${filter.label}</button>
          `).join("")}
        </div>
        <div class="product-grid" data-product-grid>
          ${products.map((product) => `
            <article class="card product-card${activeFilter !== "all" && activeFilter !== product.category ? " is-hidden" : ""}" data-category="${product.category}">
              <span class="card-kicker">${product.kicker}</span>
              <h2>${product.title}</h2>
              <p>${product.text}</p>
            </article>
          `).join("")}
        </div>
        <div class="action-row">
          <button class="button" type="button" data-section-link data-section="contacts">Запросить наличие и цену</button>
        </div>
      </div>
    `;
  }

  function renderYantari() {
    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Суббренд питания</span>
          <h1>Янтари — линейка жидких микроудобрений Пестициды РУ</h1>
          <p>Янтари работает как собственное продуктовое направление внутри Pesticides RU. Точные составы, нормы, регламенты применения и регистрационные данные уточняются для финальной версии сайта.</p>
        </div>
        <div class="yantari-grid">
          ${yantariProducts.map((name) => `
            <article class="mini-card">
              <span class="card-kicker">Янтари</span>
              <h3>${name}</h3>
              <p>Назначение и состав: [уточнить].</p>
            </article>
          `).join("")}
        </div>
        <div class="action-row">
          <button class="button button--amber" type="button" data-section-link data-section="contacts">Получить каталог Янтари</button>
        </div>
      </div>
    `;
  }

  function renderSchemes() {
    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Культуры</span>
          <h1>Схемы защиты и питания по культурам</h1>
          <p>Выберите культуру, чтобы увидеть предварительную логику этапов. Финальная схема требует уточнения региона, фазы, истории поля и ограничений.</p>
        </div>
        <div class="crop-row" role="group" aria-label="Культуры">
          ${crops.map((crop) => `
            <button class="crop-button${crop.id === state.cropId ? " is-active" : ""}" type="button" data-crop="${crop.id}">${crop.label}</button>
          `).join("")}
        </div>
        <div data-scheme-zone>
          ${renderSchemeZone(state.cropId)}
        </div>
        <div class="action-row">
          <button class="button" type="button" data-section-link data-section="contacts">Подобрать схему под поле</button>
        </div>
      </div>
    `;
  }

  function renderServices() {
    const services = [
      ["Подбор СЗР и схем питания", "Связываем защиту, питание и сервис под конкретную задачу."],
      ["Консультация агронома", "Уточнение культуры, фазы, региона и сезонных ограничений."],
      ["Обработка посевов", "Полевые операции, техника и условия: [уточнить]."],
      ["Протравливание семян", "Предпосевная обработка; регламент и формат: [уточнить]."],
      ["Анализ почвы / воды / листа", "Диагностическое направление: [уточнить]."],
      ["Полевое сопровождение", "Мониторинг и сопровождение хозяйства: [уточнить]."]
    ];

    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Сервис</span>
          <h1>Услуги и агросопровождение</h1>
          <p>Сервисный слой помогает перейти от перечня товаров к рабочей схеме: диагностика, подбор, обработка и сопровождение.</p>
        </div>
        <div class="service-grid">
          ${services.map(([title, text]) => renderCard(title, text, "Услуги")).join("")}
        </div>
      </div>
    `;
  }

  function renderCompany() {
    const blocks = [
      ["Что делаем", "Поставка агрохимической продукции, питание, сервис и сопровождение."],
      ["Для кого работаем", "Сельхозпроизводители, хозяйства и B2B-партнеры: [уточнить]."],
      ["Связка с Янтари", "Янтари встроен как собственная линейка микроудобрений."],
      ["Документы и реквизиты", "Юридические данные и структура группы: [уточнить]."]
    ];

    return `
      <div class="section-shell">
        <div class="section-header">
          <span class="meta-label">Компания</span>
          <h1>Пестициды РУ — группа компаний в сфере защиты и питания растений</h1>
          <p>Компания объединяет поставку агрохимической продукции, собственную линейку Янтари, сервисные направления и агрономическую экспертизу. Юридические данные и структура группы уточняются для финальной версии сайта.</p>
        </div>
        <div class="company-grid">
          ${blocks.map(([title, text]) => renderCard(title, text, "Структура")).join("")}
        </div>
      </div>
    `;
  }

  function renderContacts() {
    return `
      <div class="section-shell section-shell--contacts">
        <div class="section-header">
          <span class="meta-label">Заявка</span>
          <h1>Получить рекомендацию или коммерческое предложение</h1>
          <p>Опишите культуру, регион и задачу. В статическом MVP форма показывает статус без реальной отправки.</p>
        </div>
        <div class="contacts-layout">
          <div class="form-card">
            <form class="request-form" data-request-form>
              <div class="field">
                <label for="name">Имя</label>
                <input id="name" name="name" type="text" autocomplete="name" required>
              </div>
              <div class="field">
                <label for="phone">Телефон</label>
                <input id="phone" name="phone" type="tel" autocomplete="tel" required>
              </div>
              <div class="field">
                <label for="region">Регион</label>
                <input id="region" name="region" type="text">
              </div>
              <div class="field">
                <label for="culture">Культура</label>
                <input id="culture" name="culture" type="text">
              </div>
              <fieldset class="field field--full">
                <legend>Задача</legend>
                <div class="contact-tags">
                  <label><input type="checkbox" name="task" value="Сорняки"><span>Сорняки</span></label>
                  <label><input type="checkbox" name="task" value="Болезни"><span>Болезни</span></label>
                  <label><input type="checkbox" name="task" value="Вредители"><span>Вредители</span></label>
                  <label><input type="checkbox" name="task" value="Питание"><span>Питание</span></label>
                  <label><input type="checkbox" name="task" value="Стресс"><span>Стресс после обработки</span></label>
                  <label><input type="checkbox" name="task" value="Схема"><span>Нужна схема</span></label>
                </div>
              </fieldset>
              <div class="field field--full field--comment">
                <label for="comment">Задача / комментарий</label>
                <textarea id="comment" name="comment"></textarea>
              </div>
              <div class="form-footer">
                <button class="button" type="submit">Отправить заявку</button>
                <span class="form-status" data-form-status aria-live="polite"></span>
              </div>
            </form>
          </div>
          <div class="contact-directory" aria-label="Контактные данные">
            <article>
              <span>Email</span>
              <strong>[уточнить]</strong>
            </article>
            <article>
              <span>Телефон №1</span>
              <strong>+7(347)293-47-11</strong>
            </article>
            <article>
              <span>Телефон №2</span>
              <strong>[уточнить]</strong>
            </article>
            <article>
              <span>MAX</span>
              <strong>[ссылка уточняется]</strong>
            </article>
            <article>
              <span>Telegram</span>
              <strong>[ссылка уточняется]</strong>
            </article>
            <article>
              <span>Instagram</span>
              <strong>[ссылка уточняется]</strong>
            </article>
          </div>
        </div>
      </div>
    `;
  }

  function renderCard(title, text, kicker, extraClass = "") {
    return `
      <article class="card ${extraClass}">
        <span class="card-kicker">${kicker}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </article>
    `;
  }

  function renderSchemeZone(cropId) {
    const crop = crops.find((item) => item.id === cropId) || crops[0];
    return `
      <article class="scheme-zone">
        <h2>${crop.label}</h2>
        <p class="scheme-focus">${crop.focus}</p>
        <div class="timeline">
          ${schemeStages.map((stage, index) => `
            <div class="timeline-step">
              <span>0${index + 1}</span>
              <strong>${stage}</strong>
            </div>
          `).join("")}
        </div>
        <p class="disclaimer">Схемы являются предварительными. Для применения требуется консультация специалиста и проверка регламентов.</p>
      </article>
    `;
  }

  function renderSection(sectionId, options = {}) {
    const match = sectionMap.get(sectionId) || sectionMap.get("home");
    const { section, index } = match;
    state.activeId = section.id;
    state.activeIndex = index;

    contentPanel.innerHTML = section.render();
    contentPanel.scrollTop = 0;
    railIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
    railTitle.textContent = section.railTitle;
    railText.textContent = section.railText;

    document.querySelectorAll("[data-section-link]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.section === section.id);
    });

    if (options.updateHash !== false) {
      history.replaceState(null, "", `#${section.id}`);
    }
  }

  function readHash() {
    const hash = window.location.hash.replace("#", "");
    return sectionMap.has(hash) ? hash : "home";
  }

  document.addEventListener("click", (event) => {
    const menuTrigger = event.target.closest("[data-menu-toggle]");
    if (menuTrigger) {
      event.preventDefault();
      setMobileMenu(!leftRail.classList.contains("is-open"));
      return;
    }

    const sectionTrigger = event.target.closest("[data-section-link]");
    if (sectionTrigger) {
      event.preventDefault();
      renderSection(sectionTrigger.dataset.section || "home");
      if (mobileMedia.matches) {
        closeMobileMenu();
      }
      return;
    }

    const filterButton = event.target.closest("[data-product-filter]");
    if (filterButton) {
      const filter = filterButton.dataset.productFilter || "all";
      document.querySelectorAll("[data-product-filter]").forEach((button) => {
        button.classList.toggle("is-active", button === filterButton);
      });
      document.querySelectorAll("[data-category]").forEach((card) => {
        const isVisible = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !isVisible);
      });
      return;
    }

    const cropButton = event.target.closest("[data-crop]");
    if (cropButton) {
      state.cropId = cropButton.dataset.crop || "wheat";
      document.querySelectorAll("[data-crop]").forEach((button) => {
        button.classList.toggle("is-active", button === cropButton);
      });
      const zone = document.querySelector("[data-scheme-zone]");
      if (zone) {
        zone.innerHTML = renderSchemeZone(state.cropId);
      }
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-request-form]");
    if (!form) return;
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Заявка подготовлена. Подключение обработчика формы: [уточнить].";
    }
    form.reset();
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
    if (isTyping) return;

    if (event.key === "ArrowRight") {
      const next = sections[(state.activeIndex + 1) % sections.length];
      renderSection(next.id);
    }

    if (event.key === "ArrowLeft") {
      const previous = sections[(state.activeIndex - 1 + sections.length) % sections.length];
      renderSection(previous.id);
    }

    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  const handleMobileChange = (event) => {
    if (!event.matches) {
      closeMobileMenu();
    }
  };

  if (mobileMedia.addEventListener) {
    mobileMedia.addEventListener("change", handleMobileChange);
  } else {
    mobileMedia.addListener(handleMobileChange);
  }

  window.addEventListener("hashchange", () => {
    renderSection(readHash(), { updateHash: false });
  });

  renderSection(readHash(), { updateHash: false });
})();
