import {displayAlbumsView} from "/js/albumsView.js";
import {albumsJson} from "./albumsJson.js";
import {displayAlbumView} from "./albumView.js";
console.log(albumsJson);

const mainContainerEl = document.querySelector(".mainContainer");

displayAlbumsView(mainContainerEl, albumsJson);


function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

export {
    clearChildren
};    