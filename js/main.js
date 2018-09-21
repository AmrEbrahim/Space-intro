{
    const circleOne = document.querySelector('.circle-1');
    const circleEight = document.querySelector('.circle-8');
    const stage = document.querySelector('.stage');
    const stars = document.querySelector('.stars');
    const starOne = document.querySelector('.star-1');
    const starTwo = document.querySelector('.star-2');
    const starThree = document.querySelector('.star-3');
    const firstBackground = document.querySelector('.first-background');
    const secondBackground = document.querySelector('.second-background');
    circleOne.addEventListener('animationend', function () {
        firstBackground.style.backgroundColor = '#373c46cc';
        stage.style.display = 'none';
        stars.style.display = 'none';
        starOne.style.display = 'none';
        starTwo.style.display = 'none';
        starThree.style.display = 'none';
    });
    circleEight.addEventListener('animationend', function () {
        firstBackground.style.display = 'none';
        secondBackground.style.display = 'block';
    });
}