(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const headerActions = document.querySelector(".header-actions");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (nav && headerActions && !nav.querySelector(".mobile-nav-actions")) {
    const mobileActions = document.createElement("div");
    mobileActions.className = "mobile-nav-actions";
    headerActions.querySelectorAll("a").forEach((link) => {
      mobileActions.append(link.cloneNode(true));
    });
    nav.append(mobileActions);
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.classList.toggle("is-active", !isOpen);
      nav.classList.toggle("is-open", !isOpen);
      headerActions?.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.classList.remove("is-active");
      nav.classList.remove("is-open");
      headerActions?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-filter-scope]").forEach((scope) => {
    const groups = Array.from(scope.querySelectorAll("[data-filter-key]"));
    const items = Array.from(scope.querySelectorAll("[data-filter-item]"));
    const active = {};

    groups.forEach((group) => {
      const key = group.dataset.filterKey;
      const buttons = Array.from(group.querySelectorAll("[data-filter-value]"));
      if (!key) return;
      active[key] = "all";

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          active[key] = button.dataset.filterValue || "all";
          buttons.forEach((item) => item.classList.toggle("is-active", item === button));

          items.forEach((item) => {
            const isVisible = Object.entries(active).every(([filterKey, value]) => {
              if (value === "all") return true;
              const values = (item.dataset[filterKey] || "").split(/\s+/);
              return values.includes(value);
            });
            item.classList.toggle("is-hidden", !isVisible);
          });
        });
      });
    });
  });

  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const buttons = Array.from(group.querySelectorAll("[data-filter]"));
    const scope = group.closest(".section") || document;
    const items = Array.from(scope.querySelectorAll("[data-category]"));

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter || "all";

        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        items.forEach((item) => {
          const category = item.dataset.category || "";
          item.classList.toggle("is-hidden", filter !== "all" && category !== filter);
        });
      });
    });
  });

  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    accordion.querySelectorAll("[data-accordion-trigger]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const panel = trigger.parentElement?.querySelector(".accordion-panel");
        if (!panel) return;
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
      });
    });
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // TODO: подключить обработчик формы, CRM, Telegram или email-маршрутизацию.
      if (status) {
        status.textContent = "Заявка подготовлена. Подключите обработчик формы / CRM / Telegram / email.";
      }
      form.reset();
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
