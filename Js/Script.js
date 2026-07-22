document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Mensagem de Boas-Vindas
  alert("Bem-vindo ao nosso site oficial!");

  // 2. Botão "Voltar ao Topo"
  const btnTopo = document.getElementById("btnTopo");
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  };

  btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 3. Validação do Formulário de Contato
  const form = document.getElementById("formContato");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
      alert("Por favor, preencha todos os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    }
  });

  // 4. Troca Automática do Banner (Troca de background/frase a cada 5s)
  const hero = document.querySelector(".hero-banner h1");
  const frases = [
    "Bem-vindo ao Nosso Projeto",
    "Desenvolvimento Web Responsivo",
    "Soluções Modernas para Seu Negócio"
  ];
  let indice = 0;

  setInterval(() => {
    indice = (indice + 1) % frases.length;
    hero.textContent = frases[indice];
  }, 5000);

  // 5. Menu Mobile Fechar Automaticamente ao Clicar em um Link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const menuToggle = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (menuToggle.classList.contains('show')) {
        bsCollapse.toggle();
      }
    });
  });

});

