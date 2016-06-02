//   business logic
var isATriangle = function(s1, s2, s3) {
  var nat1 = (s1+s2 <= s3);
  var nat2 = (s1+s3 <= s2);
  var nat3 = (s3+s2 <= s1);

  if(nat1 || nat2 || nat3) {
    return false;
  } else {
    return true;
  }
}

var trackTriangle = function(s1,s2,s3) {
  if(!isATriangle(s1,s2,s3)) {
    return "Not a Triangle"
  }
  if(s1===s2){
    if(s1===s3) {
      return "Equallateral";
    } else {
      return "Isosceles";
    }
  } else {
    if(s2===s3) {
      return "Isosceles";
    } else {
      if(s1===s3) {
        return "Isosceles";
      } else {
      return "Scalene";
      }
    }
  }
}

//   ui stuff
$(document).ready(function(){
  $("form").submit(function(event){
    var firstInput = parseInt($("#input1").val());
    var secondInput =parseInt($("#input2").val());
    var thirdInput = parseInt($("#input3").val());
    if (firstInput && secondInput && thirdInput){
      $("#message").text(trackTriangle(firstInput,secondInput,thirdInput));
    } else {
      alert("numbers only")
    }


    event.preventDefault();

  });

});
