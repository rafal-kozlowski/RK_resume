//========== contact hiding button ==========//
let contactShow = document.getElementById('contact-show');
let contactHide = document.getElementById('contact-hide');
let contactContent = document.getElementById('contact-content');

contactShow.style.display = 'none'; 

function hideContactContent() {
    contactContent.style.display = 'none';
    contactShow.style.display = ''; 
    contactHide.style.display = 'none'; 
}

contactHide.addEventListener('click', hideContactContent);

const showContactContent = () => {
    contactContent.style.display = '';
    contactShow.style.display = 'none'; 
    contactHide.style.display = ''; 
};
contactShow.onclick = showContactContent;

//========== software&languages hiding button ==========//

let softwareSkillShow = document.getElementById('software-skill-show');
let softwareSkillHide = document.getElementById('software-skill-hide');
let softwareSkillContent = document.getElementById('software-skill-content');

softwareSkillShow.style.display = 'none';

const hideSoftwareSkillContent = () => {
    softwareSkillContent.style.display ='none';
    softwareSkillHide.style.display = 'none';
    softwareSkillShow.style.display = '';
};

softwareSkillHide.onclick = hideSoftwareSkillContent;

const showSoftwareSkillContent = () => {
    softwareSkillContent.style.display = '';
    softwareSkillHide.style.display = '';
    softwareSkillShow.style.display = 'none';
};

softwareSkillShow.onclick = showSoftwareSkillContent;