  //Menu
  
  // First Level - Menu click
  $(document).ready(function(){
    $(".ab-menu-item__level1 a").click(function(event) {
            event.preventDefault(); 
            $('.ab-menu-item__level1').removeClass('open');
            $(this).next('.ab-menu-list-level2').slideToggle();
            $(this).parents().addClass('open');
            
    });

    // Second Level - Menu click
      $(".ab-menu-item__level2 a").click(function(event) {
        event.preventDefault(); 
        $('.ab-menu-item__level2').removeClass('open');
        $(this).parents().addClass('open');
      });

  });
 

 



