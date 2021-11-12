function displayAlbumsView(mainContainerEl, albumsJson){

    const albumsTitleEl = document.createElement("h2");
    albumsTitleEl.classList.add("albumsTitle");
    albumsTitleEl.innerText = "All BeatBarn Albums";

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

        albumsTitleEl.innerText = album.title;
        albumArtistEl.innerText = album.artist;
        albumArtEl.innerText = album.imgUrl;
        listEl.append(albumTitleEl);
        listEl.append(albumArtistEl);
        listEl.append(albumArtEl);

        albumGridEl.append(listEl);
    });


    albumViewEl.append(albumGridEl);
    albumViewEl.append(albumsTitleEl);
    mainContainerEl.append(albumViewEl);
};

export {displayAlbumsView};

