import baller from "./assets/baller-roblox.gif";
import dance from "./assets/roblox-dance.gif";
import karen from "./assets/karen-moving-face.gif";
import face from "./assets/feliz-mavidad-roblox-face.gif";
import death from "./assets/deathsound.mp3#t=0.6";
import yeah from "./assets/yeah.mp3";
import explode from "./assets/cat-explosion.gif";
import song from "./assets/roblox.mp3";

import "./index.css";

const MINT_ID = "";
const CHART_LINK = `https://dexscreener.com/solana/${MINT_ID}`;
const TWITTER_URL = "https://twitter.com/robloxsolana69";
const TELEGRAM_URL = "https://t.me/robloxSOL";

// const memes = [
//   "https://preview.redd.it/listen-to-your-community-roblox-v0-w0w7gsuumxac1.jpeg?width=640&crop=smart&auto=webp&s=ead34202d1900522904dcf7ffe4c834749051ea7",
//   "https://preview.redd.it/the-roblox-hiring-process-v0-ylicg0dkb78c1.jpeg?width=640&crop=smart&auto=webp&s=ec850beea2a446dbe7a97632fad7bfb1bea7f736",
//   "https://preview.redd.it/every-saturday-and-sunday-v0-ebcyr84zktvb1.jpg?width=640&crop=smart&auto=webp&s=641e7692504227309d699938fcaca55388e916ee",
// ];

const root = document.getElementById("root");
const roblox_song = document.createElement("audio");
roblox_song.setAttribute("src", song);
root.appendChild(roblox_song);

window.addEventListener("load", () => {
  // const memes_container = document.getElementById("memes");

  // let count = 0;

  // for (const meme of memes) {
  //   count++;
  //   const meme_element = document.createElement("img");
  //   meme_element.setAttribute("src", meme);
  //   meme_element.setAttribute("alt", `meme-${count}`);
  //   memes_container.appendChild(meme_element);
  // }

  const overlay = document.getElementById("overlay");
  const app = document.getElementById("app");

  app.removeChild(overlay);

  const chart_link = document.getElementById("chart_link");
  const twitter_link = document.getElementById("twitter_link");
  const telegram_link = document.getElementById("telegram_link");

  chart_link.setAttribute("href", CHART_LINK);
  telegram_link.setAttribute("href", TELEGRAM_URL);
  twitter_link.setAttribute("href", TWITTER_URL);

  window.localStorage.clear();
  const has_seen_alert = window.localStorage.getItem("has_seen_alert");
  if (!has_seen_alert) {
    alert_manager()();
    window.localStorage.setItem("has_seen_alert", true);
  }
  let count = 0;
  while (count < 50) {
    count++;
    handle_animation_cats();
  }
});

const handle_animation_cats = () => {
  const images = [baller, dance, karen, face];
  const audios = [death, yeah];

  const handle_click = ({ target }) => {
    roblox_song.play();
    target.setAttribute("src", explode);
    target.style.pointerEvents = "none";
    const death_sound = document.createElement("audio");
    death_sound.setAttribute(
      "src",
      audios[Math.floor(Math.random() * audios.length)]
    );
    death_sound.setAttribute("autoplay", "true");
    root.appendChild(death_sound);
    setTimeout(() => {
      root.removeChild(target);
      root.removeChild(death_sound);
      target.removeEventListener("drag", this);
    }, 800);
  };

  const image_element = document.createElement("img");
  image_element.setAttribute("class", "cat_image");
  image_element.setAttribute("draggable", "false");

  image_element.addEventListener("dragstart", handle_click);
  image_element.addEventListener("click", handle_click);
  root.appendChild(image_element);

  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);

  let x_direction = ["left", "right"][Math.floor(Math.random() * 2)];
  let y_direction = ["up", "down"][Math.floor(Math.random() * 2)];
  let x_offset = image_element.clientWidth;
  let y_offset = image_element.clientHeight;

  let x_bound = window.innerWidth - x_offset;
  let y_bound = window.innerHeight - y_offset;

  image_element.setAttribute(
    "src",
    images[Math.floor(Math.random() * images.length)]
  );

  window.setInterval(() => {
    if (x < x_bound && x_direction === "right") {
      x += 1;
    } else if (x >= x_bound && x_direction === "right") {
      x_direction = "left";
    } else if (x > 0 && x_direction === "left") {
      x -= 1;
    } else if (x <= 0 && x_direction === "left") {
      x_direction = "right";
    }

    if (y <= y_bound && y_direction === "up") {
      y += 1;
    } else if (y > y_bound && y_direction === "up") {
      y_direction = "down";
    } else if (y > 0 && y_direction === "down") {
      y -= 1;
    } else {
      y_direction = "up";
    }

    image_element.style.left = `${x}px`;
    image_element.style.top = `${y}px`;
  }, 15);
};

const alert_manager = () => {
  roblox_song.play();
  const alert = document.createElement("div");
  alert.setAttribute("class", "alert");

  const accept_button = document.createElement("button");

  const handle_click = () => {
    roblox_song.play();
    root.removeChild(alert);
    accept_button.removeEventListener("click", this);
  };

  return () => {
    accept_button.setAttribute("type", "button");
    accept_button.addEventListener("click", handle_click);
    const d_window = document.createElement("div");
    const alert_container = document.createElement("div");
    alert_container.setAttribute("class", "alert-container");
    const header = document.createElement("header");
    const header_text = document.createElement("p");
    header_text.innerText =
      "The roblox meme token has chosen you...  Do you accept?";
    const paragraph = document.createElement("p");
    paragraph.innerText =
      "The roblox meme coin website has been takin over by ROBLOX memes. Click the memes to remove them and retain order.";
    paragraph.style.paddingBottom = "2rem";
    const button_text = document.createElement("p");
    button_text.innerText = "CONFIRM";
    accept_button.appendChild(button_text);
    alert.appendChild(alert_container);
    alert_container.appendChild(header);
    header.appendChild(header_text);
    alert_container.appendChild(d_window);
    d_window.appendChild(paragraph);
    d_window.appendChild(accept_button);
    root.appendChild(alert);
  };
};
