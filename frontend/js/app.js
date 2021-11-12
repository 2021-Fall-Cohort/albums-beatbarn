import {displayAlbumsView} from "/js/albumsView.js";
import {albumsJson} from "./albumsJson.js"
console.log(albumsJson);

const mainContainerEl = document.querySelector(".mainContainer");

displayAlbumsView(mainContainerEl, albumsJson);