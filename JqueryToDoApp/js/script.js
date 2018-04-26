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

updateCounters();
