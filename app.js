$(function () {
  $("#exercise1Button").on("click", function () {
    $("#exercise1 ul li").css("color", "blue");
  });

  $("#exercise2Button").on("click", function () {
    $("#exercise2 p").parent("div").css("background-color", "yellow");
  });

  $("#exercise3Button").on("click", function () {
    $("#exercise3 p").parents("div").css("background-color", "lightgreen");
  });

  $("#exercise4Button").on("click", function () {
    $(this).siblings("h3").nextAll("p").eq(1).hide();
  });

  $("#exercise5Button").on("click", function () {
    $(this).closest("div").find("p").css("border", "1px solid black");
  });

  $("#exercise6Button").on("click", function () {
    $("ul").find("span:contains('Item 5')").css("color", "red");
  });
});
