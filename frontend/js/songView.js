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
    songRatingEl.innerText = song.avgRating; 

    const newRatingEl = document.createElement("input");
    newRatingEl.classList.add("newRating");
    newRatingEl.type = "number";
    newRatingEl.placeholder = "Rate this song 1-5";
    const submitNewRatingEl = document.createElement("button");
    submitNewRatingEl.classList.add("submitNewRating");
    submitNewRatingEl.innerText = "Submit Rating";

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
    songDivEl.append(newRatingEl);
    songDivEl.append(submitNewRatingEl);
    songDivEl.append(songArtistEl);
    songDivEl.append(songDurationEl);
    songDivEl.append(playerEl);
    songDivEl.append(editSongTitleEl);
    songDivEl.append(editSongArtistEl);
    songDivEl.append(editSongDurationEl);
    songDivEl.append(submitSongEditEl);
    mainContainerEl.append(songDivEl);
    
    
    submitNewRatingEl.addEventListener("click", () => {
        const newSongJson = newRatingEl.value;

        fetch(`http://localhost:8080/song/rating/${song.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newSongJson
        })
        .then(res => res.json())
        .then(song => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);

        })
        .catch(err => console.error(err));
    })

    albumArtEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        displayAlbumView(mainContainerEl, album, albumsJson);
    })

    albumTitleEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        displayAlbumView(mainContainerEl, album, albumsJson);   
    })

    submitSongEditEl.addEventListener("click", () => {
        song.title = editSongTitleEl.value;
        song.artist = editSongArtistEl.value;
        song.duration = editSongDurationEl.value;
        fetch(`http://localhost:8080/song/`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)
        })
        .then(res => res.json())
        .then(albums => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album, albumsJson); 
        })
        .catch(err => console.error(err));
    })
    const songCommentDiv = document.createElement("div");
    const songCommentBoxEl = document.createElement("input");
    songCommentBoxEl.type = "text";
    songCommentBoxEl.placeholder = "Enter your comment here";
    const submitSongComment = document.createElement("button");
    submitSongComment.innerText = "Post Comment";
    const songCommentUlEl = document.createElement("ul");
    songCommentUlEl.classList.add("songCommentUl");
    
    song.comments.forEach(String => {
        const songCommentLiEl = document.createElement("li");
        songCommentLiEl.classList.add("songCommentLi");
        const songCommentText = document.createElement("p");
        songCommentText.innerText = String;
        songCommentLiEl.append(songCommentText);
        songCommentUlEl.append(songCommentLiEl);
    })

    
    songCommentDiv.append(songCommentBoxEl);
    songCommentDiv.append(submitSongComment);
    songCommentDiv.append(songCommentUlEl);
    mainContainerEl.append(songCommentDiv);

    submitSongComment.addEventListener("click", () =>{
        const newSongJson = songCommentBoxEl.value;

        fetch(`http://localhost:8080/song/${song.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newSongJson
        })
        .then(res => res.json())
        .then(song => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);

        })
        .catch(err => console.error(err));
            
        
     })

}
export {displaySongView}