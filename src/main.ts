import { Dog } from "./domain/Dog";

const dog = new Dog("Buddy", "Golden Retriever", 2, "Golden");

function showMessage(text: string, isError = false): void {
  const item = document.createElement("li");
  item.className = isError ? "list-group-item text-danger" : "list-group-item";
  item.textContent = text || "(mensaje vacío)";
  document.querySelector("#messages")!.prepend(item);
}

function render(): void {
  document.querySelector("#description")!.textContent = dog.getDescription();
  document.querySelector("#info")!.textContent = dog.displayInfo();
}

function onClick(id: string, action: () => string): void {
  document.querySelector(`#${id}`)!.addEventListener("click", () => {
    try {
      showMessage(action());
    } catch (error) {
      showMessage((error as Error).message, true);
    }
    render();
  });
}

const trickInput = document.querySelector<HTMLInputElement>("#trick")!;

onClick("bark", () => dog.bark());
onClick("sleep", () => dog.sleep());
onClick("wake-up", () => dog.wakeUp());
onClick("learn-trick", () => dog.learnTrick(trickInput.value));

render();
