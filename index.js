function shopFunction() {
    document.getElementById("social").classList.remove('fb-customerchat');
    document.getElementById("shop").classList.add('fb-customerchat');
    alert("Shop");
}

function socialFunction() {
    document.getElementById("shop").classList.remove('fb-customerchat');
    document.getElementById("social").classList.add('fb-customerchat');
    alert("Social");
}