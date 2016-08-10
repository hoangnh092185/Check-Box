

$(document).ready(function(){

  $("form#survey").submit(function(event){
    var checkboxInput = $("input:checkbox[name=checkboxselect]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $(".appetizer").text(checkboxInput);
    $(".icecream").text(flavor);
    $(".dateavailable").text(dob);
    $(".stringcolor").text(favoriteColor);

    event.preventDefault();

    });
  });
