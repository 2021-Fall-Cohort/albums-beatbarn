import {clearChildren} from "./app.js";
import {displayAlbumView} from "./albumView.js";
import {displayHeader} from "./app.js";

function displayAlbumsView(mainContainerEl, albumsJson){
    displayHeader(mainContainerEl, albumsJson);
    const mainHeaderDiv = document.createElement("div");
    mainHeaderDiv.classList.add("mainHeaderDiv");
    const cornL = document.createElement("img");
    cornL.src = "/resources/cornL.png";
    cornL.classList.add("cornPng");
    const cornR = document.createElement("img");
    cornR.src = "/resources/cornR.png";
    cornR.classList.add("cornPng");
    const albumsHeaderEl = document.createElement("h2");
    albumsHeaderEl.classList.add("albumsHeader");
    albumsHeaderEl.innerText = "Welcome to the BeatBarn";

    mainHeaderDiv.append(cornL);
    mainHeaderDiv.append(albumsHeaderEl);
    mainHeaderDiv.append(cornR);

    const albumViewEl = document.createElement("div");
    albumViewEl.classList.add("albumView");
    const albumGridEl = document.createElement("ul");
    albumGridEl.classList.add("albumGrid");
    

    albumsJson.forEach(album => {
        const listEl = document.createElement("li");
        listEl.classList.add("albumList");
        const liHeaderDiv = document.createElement("div");
        liHeaderDiv.classList.add("liHeaderDiv");
        const albumsArtistEl = document.createElement("h2");
        albumsArtistEl.classList.add("albumsViewArtist");
        albumsArtistEl.innerText = album.artist;
        const albumTitleEl = document.createElement("h3");
        albumTitleEl.classList.add("albumsTitle");
        const albumArtEl = document.createElement("img");
        albumArtEl.classList.add("albumsArt");
        const albumDeleteEl = document.createElement("button");
        albumDeleteEl.classList.add("albumDelete");
        albumDeleteEl.innerText = "Delete";


        albumTitleEl.innerText = album.title;
        albumArtEl.src = album.imgUrl;
        liHeaderDiv.append(albumsArtistEl);
        liHeaderDiv.append(albumTitleEl);
        
        listEl.append(liHeaderDiv);
        listEl.append(albumArtEl);
        listEl.append(albumDeleteEl);

        albumGridEl.append(listEl);

        listEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album, albumsJson);
        })

        albumDeleteEl.addEventListener("click", () => {
            console.log(`http://localhost:8080/album/${album.id}`)
            fetch(`http://localhost:8080/album/${album.id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(albums => {
                    clearChildren(mainContainerEl);
                    displayAlbumsView(mainContainerEl, albums);
                })
                .catch(err => console.error(err));
        })
    });

    albumViewEl.append(mainHeaderDiv);
    albumViewEl.append(albumGridEl);
   
const newAlbumButtonEl = document.createElement("button");
newAlbumButtonEl.innerText = "Add New Album";
newAlbumButtonEl.setAttribute('id', 'newAlbumButton');
const modalDiv = document.createElement("div");
modalDiv.classList.add("modal");
modalDiv.setAttribute('id', 'myModal');
const modalContentDiv = document.createElement("div");
modalContentDiv.classList.add("modalContentDiv");
const modalHeaderDiv = document.createElement("div");
modalHeaderDiv.classList.add("modalHeaderDiv");
const modalClose = document.createElement("span");
modalClose.classList.add("close");
modalClose.innerHTML = "&times;";
const modalHeader = document.createElement("h2");
modalHeader.classList.add("modalHeader");
modalHeader.innerText = "Add New Album to the Barn!";
const modalBodyDiv = document.createElement("div");
modalBodyDiv.classList.add("modalBodyDiv");
const newAlbumDiv = document.createElement("div");

    newAlbumDiv.classList.add("newAlbumDiv");
    const newAlbumTitle = document.createElement("input");
    newAlbumTitle.type = "text";
    newAlbumTitle.placeholder = "Enter Album Title";
    newAlbumTitle.classList.add("newAlbumField");
    const newAlbumArtist = document.createElement("input");
    newAlbumArtist.type ="text";
    newAlbumArtist.placeholder = "Enter Album Artist";
    newAlbumArtist.classList.add("newAlbumField");
    const newAlbumImage = document.createElement("input");
    newAlbumImage.type = "url";
    newAlbumImage.placeholder = "Enter Album Art URL";
    newAlbumImage.classList.add("newAlbumField");
    const newAlbumLabel = document.createElement("input");
    newAlbumLabel.type = "text";
    newAlbumLabel.placeholder = "Enter Album Record Label";
    newAlbumLabel.classList.add("newAlbumField");
    const newAlbumRating = document.createElement("input");
    newAlbumRating.type = "number";
    newAlbumRating.placeholder = "Enter Album Rating 1-5";
    newAlbumRating.setAttribute('id', 'newAlbumField');
    const submitNewAlbum = document.createElement("button");
    submitNewAlbum.innerText = "Submit New Album";
    submitNewAlbum.classList.add("submitNewAlbumBtn");
    
    newAlbumDiv.append(newAlbumTitle);
    newAlbumDiv.append(newAlbumArtist);
    newAlbumDiv.append(newAlbumImage);
    newAlbumDiv.append(newAlbumLabel);
    newAlbumDiv.append(newAlbumRating);
    newAlbumDiv.append(submitNewAlbum);

    modalBodyDiv.append(newAlbumDiv);

    
    modalHeaderDiv.append(modalHeader);
    modalDiv.append(modalClose);
    modalDiv.append(modalHeaderDiv);
    modalContentDiv.append(modalBodyDiv);
    
    modalDiv.append(modalContentDiv);
    albumViewEl.append(newAlbumButtonEl);
    albumViewEl.append(modalDiv);
    mainContainerEl.append(albumViewEl);


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

    var modal = document.getElementById("myModal");

var btn = document.getElementById("newAlbumButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

};

export {displayAlbumsView};

