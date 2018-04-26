function submitTodo(event) {
  // stop the form from doing the default action, submitting...
  event.preventDefault();

  var title = $("#new-todo").val();

  createTodo(title);

  $("#new-todo").val(null);
  updateCounters();
}

function createTodo(title) {
  var checkboxId = "todo-" + nextTodoId();

  var listItem = $("<li></li>");
  listItem.addClass("todo");

  var checkbox = $('<input>');
  checkbox.attr('type', 'checkbox');
  checkbox.attr('id', checkboxId);
  checkbox.val(1);
  checkbox.on('change', toggleDone);

  var space = document.createTextNode(" ");

  var label = $('<label></label>');
  label.attr('for', checkboxId);
  label.html(title);

  listItem.append(checkbox);
  listItem.append(space);
  listItem.append(label);

  $("#todolist").append( listItem );

  updateCounters();
}

function nextTodoId() {
  return $(".todo").length + 1;
}

function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
}

function updateCounters() {
  var todoCount = $(".todo").length;
  var completedCount = $(".completed").length;

  $("#total-count").html(todoCount);
  $("#completed-count").html(completedCount);
  $("#todo-count").html(todoCount - completedCount);
}

function cleanUpDoneTodos(event) {
  event.preventDefault();
  $.when($(".completed").remove())
    .then(updateCounters);
}

$(document).ready(function() {
  $("input[type=checkbox]").on('change', toggleDone);
  updateCounters();
});

$("form").on('submit', submitTodo);

$("#clean-up").on('click', cleanUpDoneTodos);
