var todoList = [];
var activeList = [];


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
  todoList.push(listItem[0].innerText);
  activeList.push(listItem[0].innerText);
  console.log("listItem: ");
  console.log(todoList);
  localStorage.todoList = todoList;
  console.log(localStorage.todoList);

  updateCounters();
}

function nextTodoId() {
  return $(".todo").length + 1;
}

function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
  updateCounters();
}

function updateCounters() {
  var todoCount = activeList.length;
  var completedCount = $(".completed").length-1;
  console.log("todoCount: " + todoCount);

  $("#total-count").html(todoCount);
  $("#completed-count").html(completedCount);
  $("#todo-count").html(todoCount - completedCount);
}

function cleanUpDoneTodos(event) {
  activeList = [];
  console.log("ActiveList: " + activeList);
  event.preventDefault();
  $.when($(".completed").remove())
    .then(updateCounters);
}

function checkForSavedData()
{
  if (localStorage.todoList)
  {
    console.log("You have stored data");
    console.log(localStorage.todoList);
  }
  else
  {
    console.log("you don't have any saved data");
  }
}

$(document).ready(function() {
  $("input[type=checkbox]").on('change', toggleDone);
  checkForSavedData();
  updateCounters();
});

$("form").on('submit', submitTodo);

$("#clean-up").on('click', cleanUpDoneTodos);
