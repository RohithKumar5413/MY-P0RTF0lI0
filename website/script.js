document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.nav__toggle');
	const menu = document.getElementById('nav-menu');

	if (toggleButton && menu) {
		toggleButton.addEventListener('click', () => {
			const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
			const next = !isOpen;
			toggleButton.setAttribute('aria-expanded', String(next));
			menu.setAttribute('aria-expanded', String(next));
		});
	}

	// Smooth scroll for in-page anchors
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	anchorLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			const targetId = (link.getAttribute('href') || '').substring(1);
			if (!targetId) return;
			const target = document.getElementById(targetId);
			if (!target) return;
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});

	// Dynamic year in footer
	const yearSpan = document.getElementById('year');
	if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
});