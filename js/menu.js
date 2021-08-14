// Hamburger menu event listeners
    
const openHamburgerMenu = () => {
    hamburgerTop.style = "transform: rotate(45deg);"
    hamburgerMid.style = "transform: translateX(10px); opacity: 0;"
    hamburgerBot.style = "transform: rotate(-45deg);"
    menu.style = "opacity: 1; z-index: 1000; transition: 1s;";
    footer.style = "opacity: 0; transition: 1s;";
    
    menu.className += " open";
}
const closeHamburgerMenu = () => {
    hamburgerTop.style = "transform: rotate(0deg);"
    hamburgerMid.style = "transform: translateX(0px); opacity: 1;"
    hamburgerBot.style = "transform: rotate(0deg);"
    menu.style = "opacity: 0; z-index: -5; transition: 1s;";
    footer.style = "opacity: 1; transition: 1s;";
    
    menu.classList.remove("open");
}

hamburger.addEventListener('click', (e) => {
    console.log('hamburgers go on top');
    // let section = e.target.closest('section');
    // let title = section.query
    // title.style.color = "red";
    if (!menu.matches('.open')) {
        console.log('opening now!');
        openHamburgerMenu();
    } 
    else if (menu.matches('.open')){
        console.log('closing now!');
        closeHamburgerMenu();
    }
})
