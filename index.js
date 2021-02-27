function shopFunction() {
    // document.getElementById("social").classList.remove('fb-customerchat');
    // document.getElementById("shop").classList.add('fb-customerchat'); 
    document.getElementById("shop").setAttribute("page_id", "102167945262445");
    // document.getElementById("shop").className = "fb-customerchat";
    alert("Shop");
}

function socialFunction() {
    // document.getElementById("shop").classList.remove('fb-customerchat');
    // document.getElementById("social").classList.add('fb-customerchat');
    // document.getElementById("shop").className = "fb-customerchat-shop";
    // document.getElementById("social").className = "fb-customerchat";
    document.getElementById("shop").setAttribute("page_id", "107507041389912");
    alert("Social");
}