import service from "./service";

export const todosLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  if (!searchTerm) {
    return await service.getTodos();
  }

  const words = searchTerm.split(" ").filter((word) => !word.startsWith("#"));

  return await service.search(words);
};
