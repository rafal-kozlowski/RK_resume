//========== showing button ==========//
let show = document.getElementById('contact-show');
let hide = document.getElementById('contact-hide');

let content = document.getElementById('contact-content');

show.style.display = 'none'; 

function hideContent() {
    content.style.display = 'none';
    show.style.display = ''; 
    hide.style.display = 'none'; 
}

hide.addEventListener('click', hideContent);

const showContent = () => {
    content.style.display = '';
    show.style.display = 'none'; 
    hide.style.display = ''; 
};

show.onclick = showContent;



