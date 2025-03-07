const circles = [
    { id: 'circle1', textId: 'text1', top: '', left: '0' },
    { id: 'circle2', textId: 'text2', top: '', left: '0' },
    { id: 'circle3', textId: 'text3', top: '', left: '0' }
];

let currentIndex = 0;

function moveCircles() {
    circles.forEach((circle, index) => {
        const nextIndex = (index + 1) % circles.length;
        const circleElement = document.getElementById(circle.id);
        const textElement = document.getElementById(circle.textId);

        const nextCircle = circles[nextIndex];

        circleElement.style.transform = `translate(${nextCircle.left}, ${nextCircle.top})`;
        textElement.style.transform = `translate(${parseInt(nextCircle.left) + 10}px, ${nextCircle.top})`;
        textElement.style.opacity = '1';
    });

    currentIndex = (currentIndex + 1) % circles.length;
}

setInterval(moveCircles, 3000); // Меняем позиции каждые 3 секунды
