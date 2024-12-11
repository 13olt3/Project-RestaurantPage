
import Salt from './images/salt.jpg';


export function pageLoadout(){
    const bodyStyle = document.querySelector('body');
    bodyStyle.style.cssText = "font-family: ambleregular, serif; font-size: 1.5em; display: grid; height: 100vh; margin: 0; gap: 5px; grid-template-rows: 1fr 6fr;"

    const mainDiv = document.querySelector("#content");

    mainDiv.style.cssText = "margin: 0; gap: 5px; background-color: rgb(95, 121, 95); padding: 10px;";

    const div = document.createElement("div");

    div.style.cssText = "display: grid; grid-template-columns: 1fr 3fr; grid-template-rows: 1fr 3fr; height: 80vh;";
    const contentTitle = document.createElement("div");
    contentTitle.style.cssText = "grid-column: 1 / 3; background-color: white; border-radius: 10px; justify-self: stretch; display: flex; justify-content: center; align-items: center;";
    contentTitle.textContent = "Uber good restaurant!"
    const contentPicture = document.createElement("div");
    const saltPicture = document.createElement("img");
    saltPicture.src = Salt;
    saltPicture.style.cssText = "max-height: 100%; max-width: 100%;border-radius: 10px; "
    contentPicture.style.cssText = "border-radius: 10px; justify-self: stretch; padding: 0 20px 0 20px; background-color: red; display: flex; justify-content: center; align-items: center;"
    contentPicture.appendChild(saltPicture);
    
    const contentContent = document.createElement("div");
    contentContent.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe excepturi incidunt nemo similique, perspiciatis distinctio, et minus, explicabo deserunt rerum in accusantium autem? Officia quis rem magni mollitia! Architecto.";
    div.appendChild(contentTitle);
    div.appendChild(contentPicture);
    div.appendChild(contentContent);


    mainDiv.appendChild(div);



}
