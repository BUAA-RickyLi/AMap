const copyButton = document.querySelector("[data-copy-target]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const originalText = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      copyButton.textContent = "Copied";
      copyButton.classList.add("is-copied");
    } catch {
      copyButton.textContent = "Copy Failed";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
      copyButton.classList.remove("is-copied");
    }, 1800);
  });
}

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  let activeIndex = 0;
  let autoplayId;

  const renderCarousel = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  const restartAutoplay = () => {
    window.clearInterval(autoplayId);
    autoplayId = window.setInterval(() => {
      renderCarousel(activeIndex + 1);
    }, 3500);
  };

  prevButton?.addEventListener("click", () => {
    renderCarousel(activeIndex - 1);
    restartAutoplay();
  });

  nextButton?.addEventListener("click", () => {
    renderCarousel(activeIndex + 1);
    restartAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      renderCarousel(index);
      restartAutoplay();
    });
  });

  renderCarousel(0);
  restartAutoplay();
}
