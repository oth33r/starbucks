export const scrollToElement = (selector: string) => {
	const element = document.querySelector(selector);
	if (!element) return;

	const position = element.getBoundingClientRect().top;
	const offset = position + window.scrollY;

	window.scrollTo({
		top: offset,
		behavior: 'smooth'
	});
};
