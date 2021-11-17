import {clearChildren} from "./app.js";
import {displayAlbumsView} from "./albumsView.js";
import {displaySongView} from "./songView.js";
import {displayHeader} from "./app.js";


function displayAlbumView(mainContainerEl, album, albumsJson){
    displayHeader(mainContainerEl, albumsJson);
    const albumDivEl = document.createElement("div");
    albumDivEl.classList.add("albumDiv");
    const albumArtEl = document.createElement("img");
    albumArtEl.classList.add("singleAlbumArt");
    albumArtEl.src = album.imgUrl;
    const albumArtistEl = document.createElement("h2");
    albumArtistEl.classList.add("singleAlbumArtist");    
    albumArtistEl.innerText = album.artist;
    const albumTitleEl = document.createElement("h3");
    albumTitleEl.classList.add("singleAlbumTitle");
    albumTitleEl.innerText = album.title;
    const recordLabelEl = document.createElement("h4");
    recordLabelEl.classList.add("singleRecordLabel");
    recordLabelEl.innerText = album.recordLabel;
    const albumRatingEl = document.createElement("h2");
    albumRatingEl.classList.add("singleAlbumRating");
    albumRatingEl.innerText = album.avgRating;
    const newRatingEl = document.createElement("input");
    newRatingEl.classList.add("newRating");
    newRatingEl.type = "number";
    newRatingEl.placeholder = "Enter rating 1-5";
    const submitNewAlbumRatingEl = document.createElement("button");
    submitNewAlbumRatingEl.classList.add("submitNewRating");
    submitNewAlbumRatingEl.innerText = "Submit Rating";

    const editAlbumTitleEl = document.createElement("input");
    editAlbumTitleEl.type ="text";
    editAlbumTitleEl.placeholder = "Enter New Album Name";
    const editAlbumArtistEl = document.createElement("input");
    editAlbumArtistEl.type ="text";
    editAlbumArtistEl.placeholder = "Enter New Artist Name";
    const editAlbumLabelEl = document.createElement("input");
    editAlbumLabelEl.type = "text";
    editAlbumLabelEl.placeholder = "Enter New Record Label";
    const submitEditEl = document.createElement("button");
    submitEditEl.innerText = "Edit Album";

    const commentBoxEl = document.createElement("input");
    commentBoxEl.type = "text";
    commentBoxEl.placeholder = "Enter your comment here";
    const submitCommentEl = document.createElement("button");
    submitCommentEl.innerText = "Post Comment";


    albumDivEl.append(albumArtEl);
    albumDivEl.append(albumArtistEl);
    albumDivEl.append(albumTitleEl);
    albumDivEl.append(recordLabelEl);
    albumDivEl.append(albumRatingEl);
    albumDivEl.append(newRatingEl);
    albumDivEl.append(submitNewAlbumRatingEl);
    albumDivEl.append(editAlbumTitleEl);
    albumDivEl.append(editAlbumArtistEl);
    albumDivEl.append(editAlbumLabelEl);
    albumDivEl.append(submitEditEl);
    albumDivEl.append(commentBoxEl);
    albumDivEl.append(submitCommentEl);
    mainContainerEl.append(albumDivEl);

    submitNewAlbumRatingEl.addEventListener("click", ()=> {
        const newAlbumJson = newRatingEl.value;

        fetch(`http://localhost:8080/album/rating/${album.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newAlbumJson
        })
        .then(res => res.json())
        .then(album => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album, albumsJson);

        })
        .catch(err => console.error(err));
    })

    submitEditEl.addEventListener("click", () => {
        album.title = editAlbumTitleEl.value;
        album.artist = editAlbumArtistEl.value;
        album.recordLabel = editAlbumLabelEl.value;

        fetch(`http://localhost:8080/album/`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        })
        .then(res => res.json())
        .then(albums => {
            clearChildren(mainContainerEl);
            displayAlbumsView(mainContainerEl, albums);
        })
        .catch(err => console.error(err));
    })

    submitCommentEl.addEventListener("click", () => {
        
        const newAlbumJson = commentBoxEl.value;

        fetch(`http://localhost:8080/album/${album.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newAlbumJson

        })
        .then(res => res.json())
        .then(album => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album);

        })
        .catch(err => console.error(err));
    })

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
        const songRatingEl = document.createElement("h4");
        songRatingEl.innerText = song.avgRating;
       
        const songDeleteEl = document.createElement("button");
        songDeleteEl.innerText = "Delete";


        songListEl.append(songLiEl);
        songLiEl.append(songTitleEl);
        songLiEl.append(songDurationEl);
        songLiEl.append(songRatingEl);
        songLiEl.append(songDeleteEl);

        songTitleEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);
        })

        songDurationEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);
        })

        songRatingEl.addEventListener("click", () => {
            clearChildren(mainContainerEl);
            displaySongView(mainContainerEl, song, album, albumsJson);
        })

        songDeleteEl.addEventListener("click", ()=> {
            console.log(`http://localhost:8080/album/song/${song.id}`)
            fetch(`http://localhost:8080/song/${song.id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(album => {
                    clearChildren(mainContainerEl);
                    displayAlbumView(mainContainerEl, album);
                })
                .catch(err => console.error(err));
        })
    })

    const newSongDivEl = document.createElement("div");
    newSongDivEl.classList.add("newSongDiv");
    const newSongTitleEl = document.createElement("input");
    newSongTitleEl.classList.add("newSongForm");
    newSongTitleEl.type="text";
    newSongTitleEl.placeholder= "Enter Song Title";
    const newSongDurationEl = document.createElement("input");
    newSongDurationEl.classList.add("newSongForm");
    newSongDurationEl.type="text";
    newSongDurationEl.placeholder= "Enter Song Duration";
    const newSongArtistEl= document.createElement("input");
    newSongArtistEl.classList.add("newSongForm");
    newSongArtistEl.type="text";
    newSongArtistEl.placeholder="Enter Song Artist";
    const newSongRatingEl = document.createElement("input");
    newSongRatingEl.classList.add("newSongForm");
    newSongRatingEl.type = "number";
    newSongRatingEl.placeholder ="Song Rating 1-5";
    const newSongLinkEl = document.createElement("input");
    newSongLinkEl.type = "text";
    newSongLinkEl.placeholder = "Paste Embed Link";
    const newSongSubmitEl = document.createElement("button");
    newSongSubmitEl.classList.add("newSongForm");
    newSongSubmitEl.innerText = "Submit Song"; 
    
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("albumCommentDiv");
    const commentUlEl = document.createElement("ul");
    commentUlEl.classList.add("commentUl");
    
    album.comments.forEach(String => {
        const commentLiEl = document.createElement("li");
        commentLiEl.classList.add("commentLi");
        const commentText = document.createElement("p");
        commentText.innerText = String;
        commentLiEl.append(commentText);
        commentUlEl.append(commentLiEl);
    })

    newSongDivEl.append(newSongTitleEl);
    newSongDivEl.append(newSongArtistEl);
    newSongDivEl.append(newSongDurationEl);
    newSongDivEl.append(newSongRatingEl);
    newSongDivEl.append(newSongLinkEl);
    newSongDivEl.append(newSongSubmitEl);
    commentDiv.append(commentUlEl);
    mainContainerEl.append(newSongDivEl);
    mainContainerEl.append(commentDiv);

    newSongSubmitEl.addEventListener("click", () => {
        const newSongJson = {
            "title": newSongTitleEl.value,
            "artist": newSongArtistEl.value,
            "duration": newSongDurationEl.value,
            "rating": newSongRatingEl.value,
            "link": newSongLinkEl.value,
            
        }
        fetch (`http://localhost:8080/album/${album.id}/song`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
        
            },
            body: JSON.stringify(newSongJson)
        })
        .then(res => res.json())
        .then(album => {
            clearChildren(mainContainerEl);
            displayAlbumView(mainContainerEl, album);
        })
        .catch(error => console.error(error));
    } )

    

};

export{
    displayAlbumView
};
