import {clearChildren} from "./app.js";
import {displayAlbumsView} from "./albumsView.js";
import {displaySongView} from "./songView.js";
import {displayHeader} from "./app.js";


function displayAlbumView(mainContainerEl, album, albumsJson){
    displayHeader(mainContainerEl);
    const albumDivEl = document.createElement("div");
    albumDivEl.classList.add("albumDiv");
    const albumArtEl = document.createElement("img");
    albumArtEl.classList.add("albumArt");
    albumArtEl.src = album.imgUrl;
    const albumArtistEl = document.createElement("h2");
    albumArtistEl.classList.add("albumArtist");    
    albumArtistEl.innerText = album.artist;
    const albumTitleEl = document.createElement("h3");
    albumTitleEl.classList.add("albumTitle");
    albumTitleEl.innerText = album.title;
    const recordLabelEl = document.createElement("h4");
    recordLabelEl.classList.add("recordLabel");
    recordLabelEl.innerText = album.recordLabel;
    const albumRatingEl = document.createElement("h2");
    albumRatingEl.classList.add("albumRating");
    albumRatingEl.innerText = album.rating;

    albumDivEl.append(albumArtEl);
    albumDivEl.append(albumArtistEl);
    albumDivEl.append(albumTitleEl);
    albumDivEl.append(recordLabelEl);
    albumDivEl.append(albumRatingEl);
    mainContainerEl.append(albumDivEl);

    const songListDiv = document.createElement("div");
    songListDiv.classList.add("songDiv");
    const songListEl = document.createElement("ul");
    songListEl.classList.add("songList");
    songListDiv.append(songListEl);    
    mainContainerEl.append(songListDiv);
    
    album.songs.forEach(song => {
        const songLiEl = document.createElement("li");
        songLiEl.classList.add("songLi");
        const songTitleEl = document.createElement("h3");
        songTitleEl.classList.add("songTitle");
        songTitleEl.innerText = song.title;
        const songDurationEl = document.createElement("h4");
        songDurationEl.classList.add("songDuration");
        songDurationEl.innerText = song.duration;

        songListEl.append(songLiEl);
        songLiEl.append(songTitleEl);
        songLiEl.append(songDurationEl);

        songLiEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);
        })
    })
};

export{
    displayAlbumView
};
