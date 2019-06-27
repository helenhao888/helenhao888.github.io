

 $(document).ready(function(){

// initialize materialized sidenav. after click, close the sidenav. 

  $('.sidenav').sidenav()
    .on('click tap', 'li a', () => {
        $('.sidenav').sidenav('close');
  });

 })
