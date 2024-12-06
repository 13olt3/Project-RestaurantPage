export function pageLoadout(){
    const mainDiv = document.querySelector("#content");

    mainDiv.style.cssText = "display: grid; height: 98vh; margin: 0; gap: 5px; background-color: rgb(95, 121, 95);";

    const div = document.createElement("div");

    mainDiv.appendChild(div);
}
