
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open') 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);





TweenMax.from('.menu-button', 2, {opacity:0, scale:0, ease:Bounce.easeOut})

// menu.addEventListener('click', TweenMax.from('.menu', 0.5, {x:600, ease:Bounce.easeOut}))

// TweenLite.from('.menu', 2, {opacity: 5, left: '1000px'})

let tween = TweenLite.to(menu, 1, {left: '632px'});
menu.addEventListener('click', function () {
 
});
