const cards = document.querySelectorAll('.technologies__container_startups-card');

function setBackgroundStyle() {
    const secondCardBackground = document.querySelector('.technologies__container_startups-card:nth-child(2) .technologies__container_startups-background');
    secondCardBackground.style.backgroundColor = 'rgba(255, 255, 255, 0.850)';
}

function removeBackgroundStyle() {
    const secondCardBackground = document.querySelector('.technologies__container_startups-card:nth-child(2) .technologies__container_startups-background');
    secondCardBackground.style.backgroundColor = 'rgba(255, 255, 255, 0.850)';
}

cards.forEach((card, index) => {
    card.addEventListener('mouseenter', removeBackgroundStyle);

    card.addEventListener('focus', removeBackgroundStyle);

    card.addEventListener('click', () => {
        const secondCardBackground = document.querySelector('.technologies__container_startups-card:nth-child(2) .technologies__container_startups-background');
        if (index === 1 && secondCardBackground.style.backgroundColor !== 'white') {
            setBackgroundStyle();
        } else {
            removeBackgroundStyle();
        }
    });
});
