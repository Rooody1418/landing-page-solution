/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 *  
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


function init() {
    initNavBar("navbar__list");
    scrollHandler();
    toggleActiveState();
}




function createNavItem(section) {
    //create li element
    const newliElement = document.createElement('li');
    //create anchor element
    const newaElement = document.createElement('a');
    //Get text for the anchor from data-nav attribute form each section
    newaElement.textContent = section.dataset.nav;
    //set harf attrbute for anchor 
    newaElement.setAttribute('href', '#' + section.id);
    //add menu__link class to anchor 
    newaElement.classList.add('menu__link');
    //active first link by adding link__active class
    newaElement.classList.add('link__active');
    //add menuLink to menuItem
    newliElement.appendChild(newaElement);
    //return menuItem 
    return newliElement;

}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//buld the navbar
function initNavBar(navElement) {
    //Get The Nav list element
    const navlist = document.getElementById(navElement);
    console.log(navlist)
    //Get All Sections in the page 
    const sections = document.querySelectorAll('section');
    //Nav list holder use fragment
    const navfragment = document.createDocumentFragment();
    //Iterate through the sections to build nav using creatNavItem
    sections.forEach(section => {
        const menuItem = createNavItem(section);
        //Append nav to view
        navfragment.appendChild(menuItem);
    })
    navlist.appendChild(navfragment);
}


function scrollHandler() {
    //Get The Nav list element
    const getNavlist = document.getElementById('navbar__list');
    //add Event Listener to this nav to know when user click partcular menu item
    getNavlist.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('target link ' + e.target.textContent);
        console.log("target link: " + location.href);
        //get the target link
        const targetLink = e.target;
        //get the target section based on href from target link
        // const a =document.querySelector('a');
        const targetSection = document.querySelector(targetLink.getAttribute('href'));
        //get the menu link that have the active class
        const menulink = document.getElementsByClassName('menu__link');
        const linkactive = document.querySelector(".link__active");
        //remove old active menu link
        linkactive.classList.remove(".link__active");
        //set new active new menu link
        targetLink.classList.add(".link__active");
        //Scroll to target section using scrollIntoView method
        targetSection.scrollIntoView({ behavior: "smooth" });
    });

}


//event, This event is triggered during window scroll.
// window.scrollTo(window.scrollX, window.scrollY);

function toggleActiveState() {
    //Add Event Listener to listen when the page scroll
    window.addEventListener('scroll', function (e) {
        e.preventDefault();
        //Get All Sections in the  page
        const getAllsection = document.querySelectorAll('section');
        //Iterate through the sections 
        for (const section of getAllsection) {
            //check if current section on screen or not and save result to a variable
            const checkSection = isInViewport(section);
            //Add/Remove visible stste, depending on if element on the screen or not
            section.classList.toggle(".link__active", checkSection);
            //Assign active class to nav links while scrolling
            if (checkSection) {
                const menulink = document.getElementsByClassName('menu__link');
                for (let link of menulink) {
                    const Activelink = link.getAttribute('href') === '#' + section.id;
                    const actScroll = link.classList.toggle('.link__active', Activelink);
                }
            }
        }
    })
}


init()
