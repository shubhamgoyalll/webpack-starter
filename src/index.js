import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/photo.jpg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

document.getElementById("jokeBtn").addEventListener("click", generateJoke);

generateJoke();
