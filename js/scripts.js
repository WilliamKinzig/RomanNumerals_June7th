$(document).ready(function() {
  $("#formOne").submit(function(event) {

    event.preventDefault();
      var inputNum = $("input#person1").val();

      var output = convertedNumber(inputNum);

      $("#story").text(output);

  });
});


var convertedNumber = function(x){
  var inNumArray = x.split("");
  console.log(inNumArray);
}
