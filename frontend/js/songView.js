import { albumsJson } from "./albumsJson.js";
import { clearChildren } from "./app.js";
import { displayAlbumsView } from "./albumsView.js";
import { displayAlbumView } from "./albumView.js";
import {displayHeader} from "./app.js";


function displaySongView(mainContainerEl, song, album, albumsJson){
    displayHeader(mainContainerEl, albumsJson);
    const songDivEl = document.createElement("div");
    songDivEl.classList.add("songDivEl");

    const albumArtEl = document.createElement("img");
    albumArtEl.classList.add("albumArt");
    albumArtEl.src = album.imgUrl;
    const songTitleEl = document.createElement("h2");
    songTitleEl.classList.add("songTitle");
    songTitleEl.innerText = song.title;
    const songRatingEl = document.createElement("h3");
    songRatingEl.classList.add("songRating");
    songRatingEl.innerText = song.rating;
    const songArtistEl = document.createElement("h3");
    songArtistEl.classList.add("songArtist");
    songArtistEl.innerText = song.artist;
    const albumTitleEl = document.createElement("h2");
    albumTitleEl.classList.add("songAlbum");
    albumTitleEl.innerText = album.title;
    const songDurationEl = document.createElement("h2");
    songDurationEl.classList.add("songDuration");
    songRatingEl.innertext = song.rating; 
    const playerEl = document.createElement("iframe");
    playerEl.classList.add("player");
    playerEl.src = song.link;

    const editSongTitleEl = document.createElement("input");
    editSongTitleEl.type = "text";
    editSongTitleEl.placeholder = "Enter New Title";
    const editSongArtistEl = document.createElement("input");
    editSongArtistEl.type = "text";
    editSongArtistEl.placeholder = "Enter New Artist Name";
    const editSongDurationEl = document.createElement("input");
    editSongDurationEl.type = "text";
    editSongDurationEl.placeholder = "Enter New Song Duration";
    const submitSongEditEl = document.createElement("button");
    submitSongEditEl.innerText = "Submit Edits";

    songDivEl.append(albumTitleEl);
    songDivEl.append(albumArtEl);
    songDivEl.append(songTitleEl);
    songDivEl.append(songRatingEl);
    songDivEl.append(songArtistEl);
    songDivEl.append(songDurationEl);
    songDivEl.append(playerEl);
    songDivEl.append(editSongTitleEl);
    songDivEl.append(editSongArtistEl);
    songDivEl.append(editSongDurationEl);
    songDivEl.append(submitSongEditEl);
    mainContainerEl.append(songDivEl);
    
    

    albumArtEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        displayAlbumView(mainContainerEl, album, albumsJson);
    })

    albumTitleEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        displayAlbumView(mainContainerEl, album, albumsJson);   
    })
}
export {displaySongView}