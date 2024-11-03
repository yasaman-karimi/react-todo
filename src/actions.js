import { redirect } from "react-router-dom";
import service from "./service";

export async function addTodoAction({ request }) {
  const formData = await request.formData();
  await service.addTodo(formData.get("title"));
  return redirect("/");
}

export async function editInputAction({ request, params }) {
  const formData = await request.formData();
  const todoId = params.id;
  const inputValue = formData.get("input");
  await service.editInput(todoId, inputValue);
  return redirect("/");
}

export async function deleteAction({ params }) {
  const todoId = params.id;
  await service.deleteTodo(todoId);
  return redirect("/");
}

export async function updatePriorityAction({ request, params }) {
  const formData = await request.formData();
  const itemId = params.id;
  const priority = formData.get("priority");

  await service.editPriority(itemId, priority);
  return redirect("/");
}

export async function updateDoneAction({ request, params }) {
  const formData = await request.formData();
  const itemId = params.id;
  const done = formData.get("done");

  await service.editDone(itemId, done);
  return redirect("/");
}
