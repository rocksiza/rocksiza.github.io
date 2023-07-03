window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const textSections = document.querySelectorAll('.text-section');

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const textSection = textSections[i];

        if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0) {
            textSection.style.position = 'fixed';
        } else {
            textSection.style.position = 'sticky';
        }
    }
});
