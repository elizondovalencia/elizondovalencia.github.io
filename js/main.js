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


// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
