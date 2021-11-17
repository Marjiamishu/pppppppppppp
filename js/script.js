setTimeout(function(){
            $('.loader-bg').fadeToggle();            
        }, 1500);


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function openSearch(){
    document.getElementById("searchOverlay").style.display="block";
}

function closeSearch(){
    document.getElementById("searchOverlay").style.display="none";
}