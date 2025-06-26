// Função para controlar exibição das seções via botões do menu
const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('.content-section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-section');
    sections.forEach(sec => {
      sec.style.display = (sec.id === target) ? 'block' : 'none';
    });
  });
});

// Inicializar com a primeira seção visível e botão ativo
buttons[0].classList.add('active');
sections.forEach((sec, i) => sec.style.display = i === 0 ? 'block' : 'none');

// Busca simples dentro do texto de todas as seções
document.getElementById('searchInput').addEventListener('input', e => {
  const termo = e.target.value.toLowerCase();
  if(!termo) {
    // Se não tem filtro, mostrar a seção ativa só
    const ativo = document.querySelector('nav button.active').getAttribute('data-section');
    sections.forEach(sec => sec.style.display = (sec.id === ativo) ? 'block' : 'none');
    return;
  }
  // Se tem termo, mostrar só as seções que contêm o termo
  sections.forEach(sec => {
    const texto = sec.textContent.toLowerCase();
    sec.style.display = texto.includes(termo) ? 'block' : 'none';
  });
});
/* Para links na seção Informações */
#informacoes a {
  color: #007bff;
  text-decoration: none;
}
#informacoes a:hover {
  text-decoration: underline;
}

