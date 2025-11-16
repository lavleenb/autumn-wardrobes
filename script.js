function toggle(targetID) {
    var elem = document.getElementById(targetID);
    if (elem.style.display == "none"){
        elem.style.display = "block";
    }else {
        elem.style.display = "none";
    }
};