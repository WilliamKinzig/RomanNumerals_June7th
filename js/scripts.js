$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var inputNum = parseInt($("input#person1").val());

      var output = convertedNumber(inputNum);

      $("#story").text(output)

    event.preventDefault();
  });
});


var convertedNumber = function(x){
  if(x === 0){
    return x;
    console.log("dkfjsal");

  }
}
