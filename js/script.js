$(document).ready(function() {
  $(document).on("pageshow", "[data-role='page']", function() {
    $.mobile.resetActivePageHeight();
    var current = $(".ui-page-active").attr('id');

    $("[data-role='footer'] a.ui-btn-active").removeClass("ui-btn-active");
    $("[data-role='footer'] a").each(function() {
      if ($(this).attr('href') === '#' + current) {
        $(this).addClass("ui-btn-active");
      }
    }); //each link in navbar

  }); //show_page
}); //document.ready


$(document).delegate("#submit", "vclick", function () {

    if ($("#gender").val() == "boy") {
        var utterance = new SpeechSynthesisUtterance("I'm sorry. Please forgive me.");
        utterance.pitch = .1;
        window.speechSynthesis.speak(utterance);
    } else if ($("#gender").val() == "girl") {
        var utterance = new SpeechSynthesisUtterance("I'm sorry. Please forgive me.");
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        var utterance = new SpeechSynthesisUtterance("Fuck you bitch! Go to Hell!!!");
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
});
