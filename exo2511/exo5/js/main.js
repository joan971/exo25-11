$("#effet").click(function () {
    jQuery.fx.off = false;
  });
  $("#no-effet").click(function () {
    jQuery.fx.off = true;
  });
  $("#toggle").click(function () {
    $("div").toggle("slow");
  });