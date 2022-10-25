// $(document).ready(function(){
//     $('.sub-btn').click(function(){
//         $(this).next('.sub-menu').slideToggle(); 
//     });
// });

$.event.special.rightclick = {
  bindType: "contextmenu",
  delegateType: "contextmenu"
};

$(document).on("rightclick", ".sub-btn", function() {
  $(this).next('.sub-menu').slideToggle(); 
  return false;
});

function Show_createplaylist_tab() {
    var x = document.getElementById("Create-playlist");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }