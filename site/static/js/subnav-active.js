$(".subnav a").click(function () { 
    $(".subnav a").css("color", "#050403").removeClass("highlight");
    $(this).css("color", "#E24000").addClass("highlight");
  });