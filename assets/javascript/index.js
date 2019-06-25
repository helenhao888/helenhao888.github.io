// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, edge);
//     var instance = M.Sidenav.getInstance(elems);

  
//     instance.open();
//   });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

 $(document).ready(function(){

  $(".sidenav").sidenav();

  $(".contact-form").hide();

  //initialize tooltips
  $(".tooltip").tooltip("show");


 })
