window.Fuelr = {
  init: function() {
    console.log('Initializing Fueler app');

    $('#calculate').tap(function() {
      console.log('caculated!');

      //Clear previous values
      $('#fuelactual').val('');
      $('#discrepency').val('');
      $('#percent').val('');

      var fob = parseFloat($('#fob').val());
      var target = parseFloat($('#target').val());
      var fueluplift = parseFloat($('#fueluplift').val());
      var density = parseFloat($('#density').val());
      var actualuplift = fueluplift * density;
      var fuelactual = actualuplift + fob;
      var discrepency = target - fuelactual;
      var percentage = (discrepency / target) * 100;

      if (!isNaN(fuelactual) && !isNaN(discrepency)) {
        $('#fuelactual').val(fuelactual);
        $('#discrepency').val(discrepency);
        $('#percent').val(percentage);
      }
    });
  }
}
