$( document ).ready(function() {
  $( "p.display1" ).hide();
  $( "p.display2" ).hide();
  $( "p.display3" ).hide();
  $( "p.display4" ).hide();
    $( "p.button1" ).click(function() {
      $( "p.display1" ).slideToggle( "slow" );
    });
    $( "p.button2" ).click(function() {
      $( "p.display2" ).slideToggle( "slow" );
    });
    $( "p.button3" ).click(function() {
      $( "p.display3" ).slideToggle( "slow" );
    });
    $( "p.button4" ).click(function() {
      $( "p.display4" ).slideToggle( "slow" );
    });
  });
