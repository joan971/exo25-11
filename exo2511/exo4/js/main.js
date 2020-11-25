$( "span" ).click(function() {
    $( "div" ).fadeOut( "slow" );

    $( document.body ).click(function() {
        $( "div" ).first().fadeIn( "slow" );
      });
  });