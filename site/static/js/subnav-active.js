$(".nav a").click(function () { 
    $(".nav a").css("color", "#050403").removeClass("highlight");
    $(".nav li").removeClass("active");
    $(this).css("color", "#E24000").addClass("highlight");
  });

  $(".subnav a").click(function () { 
    $(".subnav a").css("color", "#050403").removeClass("highlight");
    $(this).css("color", "#E24000").addClass("highlight");
  });  

  $(".alt-bg .nav a").click(function () { 
    $(".nav a").css("color", "#fff").removeClass("highlight");
    $(".nav li").removeClass("active");
    $(this).css("color", "#E24000").addClass("highlight");
  });