const selectors = {
    mode: 'section.main .mode',
    section: 'section.main',
    title: 'section.main .title',
    clouds: 'section.main .clouds img',
};

const mode      = document.querySelector(selectors.mode);
const section   = document.querySelector(selectors.section);
const title     = document.querySelector(selectors.title);
const clouds    = document.querySelectorAll(selectors.clouds);

console.log(mode, section, title, clouds);