new TypeIt('#typer', {
    strings: ["Guardianes de tu salud.", "Exploradores médicos.", "Gente del pueblo.", "<i>Tu mejor opción.</i>"],
    speed: 75,
    breakLines: false,
    autoStart: false
});

new TypeIt('#doctors', {
    strings: ["Eficazes", "Inovadores", "Especialistas", "<i>Professionales</i>"],
    speed: 75,
    breakLines: false,
    autoStart: false
});

new TypeIt('#pacientes', {
    strings: ["Precios Accecibles", "Variedad en tratamiento", "Ayuda sin limites.", "Esperanza."],
    speed: 75,
    breakLines: false,
    autoStart: false
});

console.log("\nDisenado y Creado por Elizondo & Valencia." + "\nDirector Creativo: Juan Carlos Martinez"+"\nVean mas trabajos en https://elizondovalecnia.com");

function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "hide-nav ") {
        x.className += "show-menu";
    } else {
        x.className = "hide-nav ";
    }
    const y = document.getElementById("overlayShow");
    if (y.className === ""){
        y.className = "overlay";
    } else {
        y.className = "";
    }
}

function hideShowVid() {
    const x = document.getElementById("has-vid");
    if (x.className === "has-video ") {
        x.className += "hide";
    } else {
        x.className = "";
    }
    const y = document.getElementById("real-vid");
    if (y.className === "about-video "){
        y.className = "show";
    } else {
        y.className = "about-video ";
    }
    const z = document.getElementById("video-img");
    if (z.className === "video-placeholder") {
        z.className = "hide";
    } else {
        z.className = "video-placeholder";
    }
}

function moreStories() {
    document.getElementById("more-story").innerHTML = "Sin mas historia por el momento.";
}


let map;
function initialize()
{
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(18.462915,-97.389533),//Setting Initial Position
        zoom: 20
    });
    let marker = new google.maps.Marker({
        position: map.center,
        map: map
    });
}

function newLocation(newLat,newLng)
{
    map.setCenter({
        lat : newLat,
        lng : newLng
    });
    let marker = new google.maps.Marker({
        position: map.center,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

//Setting Location with jQuery
$(document).ready(function ()
{
    $("#1").on('click', function ()
    {
        newLocation(18.462915,-97.388133);
    });

    $("#2").on('click', function ()
    {
        newLocation(18.477734,-97.3982676);
    });

    $("#3").on('click', function ()
    {
        newLocation(18.4652804,-97.4107778);
    });
    $("#4").on('click', function ()
    {
        newLocation(18.4633879,-97.4010753);
    });

});



