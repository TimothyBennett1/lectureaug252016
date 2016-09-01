$(document).ready( function() {
  var todos = [];
  var idMaker = generateId();

function generateId() {
  var currentId = 0;
  return function() {
    currentId++;
    return currentId;
  }
}
  // $('.todo').click(function() {
  //   $(this)
  //   .css("text-decoration", "line-through");
  //   .prop("disabled", true)
  //   .whatever()
  // });
  function deleteTodo() {
    $( ".delete-todo").click(function() {
      $(this).parent().remove();
    })
  }

  $( "#submit-new-todo" ).click( function () {
    var newTodoText = $( "#new-todo" ).val();
    if (newTodoText === "") {
      return alert("Text is required!")
    }
    var currentId = idMaker;
    todos.push(
      {content: newTodoText,
              complete: false,
            id: idMaker()} );
    $("#todo-list").prepend( "<li class='todo' id=\"" + currentId + "\">" +
      newTodoText +
        "<button class='delete-todo'>Delete ToDo</button>" +
      "</li>"
    ).children().first().click(function() {
      if ($(this).css(("text-decoration") === "line-through")) {
        $(this).css("text-decoration", "none");
      }
      else{
      $(this).css("text-decoration", "line-through");
      }
    });
    deleteTodo();
  });

});
