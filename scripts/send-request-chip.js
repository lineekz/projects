jQuery(document).ready(function () {
  jQuery(".chip-preview-button").click(function () {
    var form = jQuery(this).closest("form");

    var actUrl = form.attr("action");

    jQuery.ajax({
      url: actUrl,
      type: "post",
      dataType: "html",
      data: form.serialize(),
      success: function (data) {
        alert("Ваша заявка принята, скоро мы Вам перезвоним");
        $("form")[0].reset();
      },
      error: function () {
        alert("Что-то пошло не так, попробуйте ещё раз");
        $("form")[0].reset();
      },
    });
  });
});
