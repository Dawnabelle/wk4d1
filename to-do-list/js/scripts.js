function formOne (stuff) {
  this.thing = stuff;

}

  formOne.prototype.strike = function() {
  if ("input:checkbox[name=item]:checked") {
    console.log($("input:checkbox[name=item]:checked"));
    $("input:checkbox[name=item]:checked").addClass('lineThrough')
  }
}

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = new formOne ($("#thing").val());

     $("#listyList").append('<li>' + userInput.thing + '<input type="checkbox" name="item" value="">' + '</li>')

     $("input:checkbox[name=item]").click(function() {
       console.log("click");
       $("input:checkbox[name=item]:checked").addClass('lineThrough')

     });
  });
});
