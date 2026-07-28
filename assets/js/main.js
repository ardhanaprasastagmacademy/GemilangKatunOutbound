document.addEventListener("DOMContentLoaded", function () {
  // ========== MOBILE NAV TOGGLE ==========
  var toggle = document.getElementById("navToggle");
  var overlay = document.getElementById("mainNav");
  var header = document.getElementById("siteHeader");
  var navLinks = overlay ? overlay.querySelectorAll(".nav-link, .btn-wa") : [];

  function openNav() {
    overlay.classList.add("show");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Tutup menu");
    document.body.classList.add("nav-open");
  }
  function closeNav() {
    overlay.classList.remove("show");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
    document.body.classList.remove("nav-open");
  }

  if (toggle && overlay) {
    toggle.addEventListener("click", function () {
      overlay.classList.contains("show") ? closeNav() : openNav();
    });
    // Tutup saat klik item menu
    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    // Tutup dengan tombol Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("show")) closeNav();
    });
    // Tutup otomatis jika resize ke desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992 && overlay.classList.contains("show"))
        closeNav();
    });
  }

  // ========== STICKY HEADER SHADOW ==========
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    });
  }

  // ========== REVEAL ON SCROLL ==========
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  }

  // ========== PACKAGE FILTER (jika ada) ==========
  var pills = document.querySelectorAll(".filter-pill");
  var pkgCards = document.querySelectorAll("[data-category]");
  if (pills.length && pkgCards.length) {
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        pills.forEach(function (p) {
          p.classList.remove("active");
        });
        pill.classList.add("active");
        var cat = pill.getAttribute("data-filter");
        pkgCards.forEach(function (card) {
          var show =
            cat === "semua" || card.getAttribute("data-category") === cat;
          card.closest(".pkg-col").style.display = show ? "" : "none";
        });
      });
    });
  }

  // ========== GALLERY LIGHTBOX (jika ada) ==========
  var galleryLinks = document.querySelectorAll(".gallery-item");
  var lightboxImg = document.getElementById("lightboxImg");
  if (galleryLinks.length && lightboxImg) {
    galleryLinks.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        lightboxImg.src = item.getAttribute("href");
        var modal = new bootstrap.Modal(
          document.getElementById("lightboxModal"),
        );
        modal.show();
      });
    });
  }

  // ========== GALLERY FILTER (jika ada) ==========
  var gpills = document.querySelectorAll(".gfilter-pill");
  var gitems = document.querySelectorAll("[data-gcat]");
  if (gpills.length && gitems.length) {
    gpills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        gpills.forEach(function (p) {
          p.classList.remove("active");
        });
        pill.classList.add("active");
        var cat = pill.getAttribute("data-gfilter");
        gitems.forEach(function (it) {
          var show = cat === "semua" || it.getAttribute("data-gcat") === cat;
          it.style.display = show ? "" : "none";
        });
      });
    });
  }

  // ========== CONTACT FORM TO WHATSAPP (jika ada) ==========
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nama = document.getElementById("cfNama").value.trim();
      var instansi = document.getElementById("cfInstansi").value.trim();
      var paket = document.getElementById("cfPaket").value;
      var peserta = document.getElementById("cfPeserta").value.trim();
      var pesan = document.getElementById("cfPesan").value.trim();
      var text =
        "Halo Gemilang Katun Outbound, saya ingin bertanya:%0A" +
        "Nama: " +
        nama +
        "%0A" +
        (instansi ? "Instansi/Perusahaan: " + instansi + "%0A" : "") +
        (paket ? "Paket diminati: " + paket + "%0A" : "") +
        (peserta ? "Estimasi peserta: " + peserta + "%0A" : "") +
        (pesan ? "Pesan: " + pesan : "");
      window.open("https://wa.me/6282211221909?text=" + text, "_blank");
    });
  }
});

// ==========================================================
// PRELOADER - SANGAT CEPAT (0.2 DETIK)
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    // Langsung tambahkan class hide setelah 200ms
    setTimeout(function () {
      preloader.classList.add("hide");
    }, 200); // 0.2 detik
  }
});

// Backup: jika load terjadi lebih cepat, tetap tunggu 200ms
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add("hide");
    }, 200);
  }
});
