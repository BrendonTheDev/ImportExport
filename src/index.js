import myName from "./myName";

function component() {
  const element = document.createElement("div");

  element.textContent = myName("Brendon");
  return element;
}

document.body.appendChild(component());
