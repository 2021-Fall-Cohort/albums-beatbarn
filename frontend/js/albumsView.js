import {clearChildren} from "./app.js";
import {displayAlbumView} from "./albumView.js";
import {albumsJson} from "./albumsJson.js";
import {displayHeader} from "./app.js";


function displayAlbumsView(mainContainerEl, albumsJson){
    displayHeader(mainContainerEl);
    const albumsHeaderEl = document.createElement("h2");
    albumsHeaderEl.classList.add("albumsHeader");
    albumsHeaderEl.innerText = "All BeatBarn Albums";

    const albumViewEl = document.createElement("div");
    albumViewEl.classList.add("albumView");
    const albumGridEl = document.createElement("ul");
    albumGridEl.classList.add("albumGrid");
    
    

    albumsJson.forEach(album => {
        const listEl = document.createElement("li");
        listEl.classList.add("albumList");
        const albumTitleEl = document.createElement("h3");
        albumTitleEl.classList.add("albumTitle");
        const albumArtistEl = document.createElement("h4");
        albumArtistEl.classList.add("albumArtist");
        const albumArtEl = document.createElement("img");
        albumArtEl.classList.add("albumArt");

        albumTitleEl.innerText = album.title;
        albumArtistEl.innerText = album.artist;
        albumArtEl.src=album.imgUrl;
        listEl.append(albumTitleEl);
        listEl.append(albumArtistEl);
        listEl.append(albumArtEl);

        albumGridEl.append(listEl);

        listEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album, albumsJson);
        })
    });


    albumViewEl.append(albumGridEl);
    albumViewEl.append(albumsHeaderEl);
    mainContainerEl.append(albumViewEl);
};

export {displayAlbumsView};

