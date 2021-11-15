import {clearChildren} from "./app.js";
import {displayAlbumView} from "./albumView.js";
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

    const newAlbumDiv = document.createElement("div");
    newAlbumDiv.classList.add("newAlbum");
    const newAlbumTitle = document.createElement("input");
    newAlbumTitle.type = "text";
    newAlbumTitle.placeholder = "Enter Album Title";
    const newAlbumArtist = document.createElement("input");
    newAlbumArtist.type ="text";
    newAlbumArtist.placeholder = "Enter Album Artist";
    const newAlbumImage = document.createElement("input");
    newAlbumImage.type = "url";
    newAlbumImage.placeholder = "Enter Album Art URL";
    const newAlbumLabel = document.createElement("input");
    newAlbumLabel.type = "text";
    newAlbumLabel.placeholder = "Enter Album Record Label";
    const newAlbumRating = document.createElement("input");
    newAlbumRating.type = "number";
    newAlbumRating.placeholder = "Enter Album Rating 1-5";
    const submitNewAlbum = document.createElement("button");
    submitNewAlbum.innerText = "Submit New Album";
    
    newAlbumDiv.append(newAlbumTitle);
    newAlbumDiv.append(newAlbumArtist);
    newAlbumDiv.append(newAlbumImage);
    newAlbumDiv.append(newAlbumLabel);
    newAlbumDiv.append(newAlbumRating);
    newAlbumDiv.append(submitNewAlbum);
    mainContainerEl.append(newAlbumDiv);

submitNewAlbum.addEventListener("click", () => {
    const newAlbumJson = {
        "title": newAlbumTitle.value,
        "artist": newAlbumArtist.value,
        "imgUrl": newAlbumImage.value,
        "recordLabel": newAlbumLabel.value,
        "songs": [],
        "rating": newAlbumRating.value
    }
    fetch("http://localhost:8080/album/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/Json'
        },
        body: JSON.stringify(newAlbumJson)
    })
    .then(res => res.json())
    .then(album => {
        clearChildren(mainContainerEl);
        displayAlbumsView(mainContainerEl, album);
    }) 
    .catch(error => console.error(error));
})

};

export {displayAlbumsView};

