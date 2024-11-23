
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorMiddle = document.querySelector("[data-cursor-middle]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
  
window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorMiddle.style.left = `${posX}px`;
    cursorMiddle.style.top = `${posY}px`;

    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{duration: 500, fill: 'forwards'});
});


var btn = jQuery('#top-to-bottom');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 180) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});