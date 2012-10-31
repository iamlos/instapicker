var grid = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);

    $element.on( 'click', '.thumb', function( event ){
      viewModel.faves.push( ko.dataFor(this) );
    });
  };

  return{
    init: init
  };
}();