class Service {
  #getApiKey() {
    return localStorage.getItem("X-API-Key");
  }

  async getTodos() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/todos/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": this.#getApiKey(),
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      return [];
    }
  }

  async login(username, password) {
    try {
      const request = await fetch("http://127.0.0.1:8000/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!request.ok) {
        throw new Error(`Error: ${request.statusText}`);
      }
      const response = await request.json();
      localStorage.setItem("X-API-Key", response["token"]);
      return response["token"];
    } catch (error) {
      console.error(error);
    }
  }
  async signup(username, email, password) {
    try {
      const user = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (user.ok) {
        console.log("User registered successfully!");
      } else {
        console.error("Error during signup. Please try again later.");
      }
    } catch (error) {
      console.error("Network error. Please try again later.");
    }
  }

  async addTodo(input) {
    try {
      const newTodo = await fetch("http://127.0.0.1:8000/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": this.#getApiKey(),
        },
        body: JSON.stringify({
          input: input,
        }),
      });
      if (!newTodo.ok) {
        throw new Error(`Failed: ${newTodo.status} ${newTodo.statusText}`);
      }
      const todo = await newTodo.json();
      return todo.id;
    } catch (error) {
      console.error(error.message);
    }
  }

  async editInput(itemId, input) {
    try {
      const newInput = await fetch(
        `http://127.0.0.1:8000/api/todos/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.#getApiKey(),
          },
          body: JSON.stringify({
            input: input,
          }),
        }
      );

      if (!newInput.ok) {
        throw new Error(
          `Update Failed:${newInput.status} ${newInput.statusText}`
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  async editPriority(itemId, number) {
    try {
      const newInput = await fetch(
        `http://127.0.0.1:8000/api/todos/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.#getApiKey(),
          },
          body: JSON.stringify({
            priority: number,
          }),
        }
      );

      if (!newInput.ok) {
        throw new Error(
          `Update Failed:${newInput.status} ${newInput.statusText}`
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  async editDone(itemId, done) {
    try {
      const newInput = await fetch(
        `http://127.0.0.1:8000/api/todos/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.#getApiKey(),
          },
          body: JSON.stringify({
            done: done,
          }),
        }
      );

      if (!newInput.ok) {
        throw new Error(
          `Update Failed:${newInput.status} ${newInput.statusText}`
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async deleteTodo(itemId) {
    try {
      const removeTodo = await fetch(
        `http://127.0.0.1:8000/api/todos/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.#getApiKey(),
          },
        }
      );

      if (!removeTodo.ok) {
        throw new Error(
          `Failed: ${removeTodo.status} ${removeTodo.statusText}`
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async search(words) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/todos/search?` +
          new URLSearchParams({
            q: words,
          }).toString(),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.#getApiKey(),
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Search failed:${response.status} ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }
}
export default new Service();
