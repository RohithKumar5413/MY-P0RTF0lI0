document.getElementById('year').textContent = new Date().getFullYear().toString();

document.getElementById('get-started').addEventListener('click', () => {
	window.location.hash = '#features';
});

document.getElementById('watch-demo').addEventListener('click', () => {
	window.open('https://github.com/SubashSK777/Naan_Mudhalvan_Projects/blob/main/Money%20Matters%20A%20Personal%20Finance%20Management%20App/Expense%20Manager%20App%20%20Part%2038%20%20Logout%20Part%20%20Last%20Tutorial720p.mp4', '_blank', 'noopener,noreferrer');
});