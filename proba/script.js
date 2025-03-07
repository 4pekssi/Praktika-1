const circles = [
    { id: 'circle1', textId: 'text1', top: '50px', left: '125px' },
    { id: 'circle2', textId: 'text2', top: '150px', left: '50px' },
    { id: 'circle3', textId: 'text3', top: '250px', left: '125px' }
];

let currentIndex = 0;

function moveCircles() {
    circles.forEach((circle, index) => {
        const nextIndex = (index + 1) % circles.length;
        const circleElement = document.getElementById(circle.id);
        const textElement = document.getElementById(circle.textId);

        const nextCircle = circles[nextIndex];

        circleElement.style.transform = `translate(${nextCircle.left}, ${nextCircle.top})`;
        textElement.style.transform = `translate(${parseInt(nextCircle.left) + 150}px, ${nextCircle.top})`;
        textElement.style.opacity = '1';
    });

    currentIndex = (currentIndex + 1) % circles.length;
}

setInterval(moveCircles, 1000); // Меняем позиции каждые 3 секунды
