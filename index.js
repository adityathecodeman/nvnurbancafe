/*sec beranda */
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector("#home");
  const title = document.querySelector(".hero-title");
  const text = document.querySelector(".hero-text");
  const button = document.querySelector(".btn-readmore");

  const elements = [title, text, button];

  // kondisi awal (hilang)
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // MUNCUL bertahap
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, index * 200);
          });
        } else {
          // HILANG saat keluar section
          elements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
          });
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(heroSection);
});

/*sec beranda */
document.addEventListener("DOMContentLoaded", () => {

  function animateSection(sectionSelector, itemSelector, sliderSelector = null) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = section.querySelectorAll(itemSelector);
    const slider = sliderSelector ? section.querySelector(sliderSelector) : null;

    // kondisi awal
    items.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px) scale(0.96)";
      el.style.transition = "0.7s ease";
    });

    if (slider) {
      slider.style.opacity = 0;
      slider.style.transform = "translateX(50px)";
      slider.style.transition = "0.9s ease";
    }

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0) scale(1)";
          }, i * 150);
        });

        if (slider) {
          setTimeout(() => {
            slider.style.opacity = 1;
            slider.style.transform = "translateX(0)";
          }, items.length * 150);
        }

      } else {
        items.forEach(el => {
          el.style.opacity = 0;
          el.style.transform = "translateY(40px) scale(0.96)";
        });

        if (slider) {
          slider.style.opacity = 0;
          slider.style.transform = "translateX(50px)";
        }
      }

    }, { threshold: 0.35 });

    observer.observe(section);
  }

  // HERO
  animateSection(
    ".hero-section",
    ".hero-title, .hero-text, .btn-readmore"
  );

  // ABOUT
  animateSection(
    ".about-section",
    ".about-title, .about-desc, .about-buttons",
    ".about-slider"
  );

});

/*sec fasilitas */
document.addEventListener("DOMContentLoaded", () => {

  function animateSection(sectionSelector, itemSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = section.querySelectorAll(itemSelector);

    // kondisi awal
    items.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(50px) scale(0.9)";
      el.style.transition = "0.7s ease";
    });

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0) scale(1)";
          }, i * 120);
        });
      } else {
        items.forEach(el => {
          el.style.opacity = 0;
          el.style.transform = "translateY(50px) scale(0.9)";
        });
      }

    }, { threshold: 0.3 });

    observer.observe(section);
  }

  // HERO
  animateSection(
    ".hero-section",
    ".hero-title, .hero-text, .btn-readmore"
  );

  // FACILITY
  animateSection(
    ".facility-section",
    ".facility-card"
  );

});

/*sec menu */
document.addEventListener("DOMContentLoaded", () => {

  function animate(sectionSelector, itemsSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = section.querySelectorAll(itemsSelector);

    items.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "scale(0.85) rotate(-3deg)";
      el.style.transition = "0.7s cubic-bezier(.2,.8,.2,1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = 1;
              el.style.transform = "scale(1) rotate(0deg)";
            }, i * 120);
          });
        } else {
          items.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = "scale(0.85) rotate(-3deg)";
          });
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
  }

  animate("#about", ".about-title, .about-desc, .about-buttons, .about-slider");
  animate("#facility", ".facility-card");
  animate("#menu", ".section-title, .menu-buttons, .menu-card");

});

/*sec galeri */
document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector("#gallery");
  if (!section) return;

  const title = section.querySelector(".gallery-title");
  const items = section.querySelectorAll(
    ".gallery-item, .youtube-preview, .gallery-buttons"
  );

  // kondisi awal
  [title, ...items].forEach(el => {
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = el === title
      ? "translateY(-20px)"
      : "translateY(40px) scale(0.9)";
    el.style.filter = el === title ? "none" : "blur(6px)";
    el.style.transition = "0.6s ease";
  });

  new IntersectionObserver(
    ([entry]) => {
      [title, ...items].forEach((el, i) => {
        if (!el) return;

        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0) scale(1)";
            el.style.filter = "blur(0)";
          }, i * 120);
        } else {
          el.style.opacity = 0;
          el.style.transform = el === title
            ? "translateY(-20px)"
            : "translateY(40px) scale(0.9)";
          el.style.filter = el === title ? "none" : "blur(6px)";
        }
      });
    },
    { threshold: 0.3 }
  ).observe(section);

});

/*sec testimoni*/
document.addEventListener("DOMContentLoaded", () => {

  const reviewSection = document.querySelector("#review");
  if (!reviewSection) return;

  const title = reviewSection.querySelector(".review-title");
  const cards = reviewSection.querySelectorAll(".review-card");

  // kondisi awal
  if (title) {
    title.style.opacity = 0;
    title.style.transform = "translateY(-30px)";
    title.style.transition = "0.6s ease";
  }

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "rotateX(25deg) translateY(40px)";
    card.style.transformStyle = "preserve-3d";
    card.style.transition = "0.7s cubic-bezier(.2,.7,.2,1)";
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {

        if (title) {
          title.style.opacity = 1;
          title.style.transform = "translateY(0)";
        }

        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "rotateX(0deg) translateY(0)";
          }, i * 120);
        });

      } else {

        if (title) {
          title.style.opacity = 0;
          title.style.transform = "translateY(-30px)";
        }

        cards.forEach(card => {
          card.style.opacity = 0;
          card.style.transform = "rotateX(25deg) translateY(40px)";
        });
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(reviewSection);

});

/*sec kontak */
document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector("#contact");
  const items = section.querySelectorAll(".contact-title, .contact-card, .map-frame");

  // kondisi awal
  items.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      items.forEach((el, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
          }, i * 120);
        } else {
          el.style.opacity = 0;
          el.style.transform = "translateY(40px)";
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);

});

/*sec waktu */
function checkOpenStatus() {
    const now = new Date();

    // Sesuaikan ke zona waktu WITA (UTC+8)
    const utcHours = now.getUTCHours();
    const witaHours = (utcHours + 8) % 24;

    // Jam buka 16:00–00:00 WITA
    const isOpen = (witaHours >= 16 || witaHours < 0);

    const popup = document.getElementById('openStatusPopup');

    if (isOpen) {
      popup.innerHTML = "✅ We’re <b>Open Now!</b><br>Until 00.00 WITA";
      popup.style.backgroundColor = "#4CAF50";
    } else {
      popup.innerHTML = "❌ We’re <b>Closed</b><br>Open again at 16.00 WITA";
      popup.style.backgroundColor = "#B22222";
    }

    popup.classList.add('show');

    // Popup hilang otomatis setelah 6 detik
    setTimeout(() => popup.classList.remove('show'), 6000);
  }

  window.onload = checkOpenStatus;