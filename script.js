function toggle(targetID) {
    if(!window.getComputedStyle){
        window.getComputedStyle = function(e) {
            return e.currentStyle;
        }
    }
    var elem = document.getElementById(targetID);
    if(getComputedStyle(elem).display == "none"){
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
};

const clothes = document.querySelectorAll('button[type]');
clothes.forEach(clothing => {
    clothing.addEventListener('click', () => {
        const objectID = clothing.getAttribute('type');
        toggle(objectID)
    })
})