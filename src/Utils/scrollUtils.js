export const scrollToCenter = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);

        window.scrollTo({
            top: middle,
            behavior: 'smooth'
        });
    }
};