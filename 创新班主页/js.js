const dormLinks = document.querySelectorAll('.dorm-link');

dormLinks.forEach((link) => {
    const dormName = link.dataset.dormName;
    const slogan = link.dataset.slogan;

    const dormInfoDiv = document.createElement('div');
    dormInfoDiv.classList.add('dorm-info');
    dormInfoDiv.textContent = `${dormName} - ${slogan}`;

    link.appendChild(dormInfoDiv);
});