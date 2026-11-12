const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const toast = (message) => { const el = $('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2400); };

$('#themeToggle').addEventListener('click', () => { document.body.classList.toggle('dark'); $('#themeToggle').textContent = document.body.classList.contains('dark') ? '☾' : '☼'; localStorage.setItem('al-dia-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); });
if (localStorage.getItem('al-dia-theme') === 'dark') { document.body.classList.add('dark'); $('#themeToggle').textContent = '☾'; }
$('#menuToggle').addEventListener('click', () => $('#sectionNav').classList.toggle('open'));
$('#refreshButton').addEventListener('click', () => toast('Edición actualizada · contenido demo'));
$('#quickReadButton').addEventListener('click', () => { document.querySelector('#mundo').scrollIntoView({ behavior: 'smooth' }); toast('Aquí tienes la versión esencial'); });

$$('.filter').forEach(button => button.addEventListener('click', () => { $$('.filter').forEach(b => b.classList.remove('active')); button.classList.add('active'); const filter = button.dataset.filter; $$('.news-item').forEach(item => { item.style.display = filter === 'todos' || item.dataset.category === filter ? 'grid' : 'none'; }); }));
$$('.section-nav a').forEach(link => link.addEventListener('click', () => $('#sectionNav').classList.remove('open')));
