const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})

$(window).load(function () {
    $('#example1').imageReveal({
        barWidth: 10,
        touchBarWidth: 10,
        paddingLeft: 0,
        paddingRight: 0,
        startPosition: 0.25,
        showCaption: true,
        captionChange: 0.5,
        width: 400,
        height: 350
    });

    $('#example2').imageReveal({
        barWidth: 10,
        touchBarWidth: 10,
        paddingLeft: 0,
        paddingRight: 0,
        startPosition: 0.25,
        showCaption: true,
        captionChange: 0.5,
        width: 400,
        height: 350
    });

    $('#example3').imageReveal({
        barWidth: 10,
        touchBarWidth: 10,
        paddingLeft: 0,
        paddingRight: 0,
        startPosition: 0.25,
        showCaption: true,
        captionChange: 0.5,
        width: 400,
        height: 350
    });
});