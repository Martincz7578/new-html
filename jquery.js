function toggleTab() {
    const tab = document.getElementById('tab');
    const menuIcon = document.querySelector('.menu-icon');
    if (tab.classList.contains('show')) {
        tab.classList.remove('show');
        menuIcon.classList.remove('rotate');
        menuIcon.classList.add('rotate-back');
    } else {
        tab.classList.add('show');
        menuIcon.classList.remove('rotate-back');
        menuIcon.classList.add('rotate');
    }
}

function changeMode(mode) {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const tab = document.querySelector('.tab');
    const links = document.querySelectorAll('.tab a');
    const labels = document.querySelectorAll('.settings label');
    switch (mode) {
        case 'bright':
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            body.style.color = '#000000';
            header.style.backgroundColor = 'rgba(240, 240, 240, 0.8)';
            header.style.color = '#000000';
            footer.style.backgroundColor = 'rgba(240, 240, 240, 0.8)';
            footer.style.color = '#000000';
            tab.style.backgroundColor = 'rgba(240, 240, 240, 0.8)';
            tab.style.color = '#000000';
            links.forEach(link => link.style.color = '#000000');
            labels.forEach(label => label.style.color = '#000000');
            break;
        case 'dark':
            body.style.backgroundColor = 'rgba(51, 51, 51, 0.7)';
            body.style.color = '#ffffff';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
            header.style.color = '#ffffff';
            footer.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
            footer.style.color = '#ffffff';
            tab.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
            tab.style.color = '#ffffff';
            links.forEach(link => link.style.color = '#ffffff');
            labels.forEach(label => label.style.color = '#ffffff');
            break;
        case 'ultra-white':
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            body.style.color = '#000000';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.color = '#000000';
            footer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            footer.style.color = '#000000';
            tab.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            tab.style.color = '#000000';
            links.forEach(link => link.style.color = '#000000');
            labels.forEach(label => label.style.color = '#000000');
            break;
        case 'ultra-dark':
            body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            body.style.color = '#ffffff';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.color = '#ffffff';
            footer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            footer.style.color = '#ffffff';
            tab.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            tab.style.color = '#ffffff';
            links.forEach(link => link.style.color = '#ffffff');
            labels.forEach(label => label.style.color = '#ffffff');
            break;
        case 'high-contrast':
            body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            body.style.color = '#ffff00';
            header.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
            header.style.color = '#000000';
            footer.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
            footer.style.color = '#000000';
            tab.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
            tab.style.color = '#000000';
            links.forEach(link => link.style.color = '#000000');
            labels.forEach(label => link.style.color = '#000000');
            break;
    }
}

$(document).ready(function() {
    $('.green, .magenta').each(function() {
        const text = $(this).text();
        $(this).html(text.split('').map(letter => `<span>${letter}</span>`).join(''));
    });

    $('.green, .magenta').on('mousemove', function(e) {
        const spans = $(this).find('span');
        spans.each(function(index) {
            const rect = this.getBoundingClientRect();
            const distance = Math.abs(e.clientX - rect.left);
            const waveHeight = Math.max(0, 20 - distance / 5);
            $(this).css('transform', `translateY(-${waveHeight}px)`);
        });
    });

    $('.green, .magenta').on('mouseleave', function() {
        $(this).find('span').css('transform', 'translateY(0)');
    });

    // Add images to the background
    const images = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png'];
    images.forEach((image, index) => {
        $('.background-images').append(`<img src="${image}" alt="${image}">`);
    });
});