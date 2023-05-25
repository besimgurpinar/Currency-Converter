$(function() {
  // Get the currency rates from the API
  $.getJSON("https://api.exchangerate-api.com/latest", function(data) {
    // Update the options in the from and to currency selects
    $("#from-currency option").each(function() {
      $(this).text(data.rates[$(this).val()]);
    });
    $("#to-currency option").each(function() {
      $(this).text(data.rates[$(this).val()]);
    });

    // Convert the amount when the Convert button is clicked
    $("#convert").on("click", function() {
      var fromCurrency = $("#from-currency").val();
      var toCurrency = $("#to-currency").val();
      var amount = $("#amount").val();

      // Get the exchange rate
      var rate = data.rates[fromCurrency] / data.rates[toCurrency];

      // Calculate the converted amount
      var convertedAmount = amount * rate;

      // Update the result
      $("#result").text(convertedAmount);
    });
  });
});