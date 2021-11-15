import {displayAlbumsView} from "/js/albumsView.js";
import {displayAlbumView} from "./albumView.js";


const mainContainerEl = document.querySelector(".mainContainer");

function displayHeader(mainContainerEl){
    const headerEl = document.createElement("header");
    const headerUlEl = document.createElement("ul");
    headerUlEl.classList.add("header");
        const homeLiEl = document.createElement("li");
        homeLiEl.innerText = "Home";
        const missionLiEl = document.createElement("li");
        missionLiEl.innerText = "Mission Statement";
        const meetLiEl = document.createElement("li");
        meetLiEl.innerText = "Meet the Farmers";

        headerUlEl.append(homeLiEl);
        headerUlEl.append(missionLiEl);
        headerUlEl.append(meetLiEl);
        headerEl.append(headerUlEl);
        mainContainerEl.append(headerEl);

    homeLiEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        displayAlbumsView(mainContainerEl, albumsJson);
    })
};

{/* <header>
        <ul class="header">
            <li>Meet the Farmers</li>
            <li>Mission Statement</li>
            <li>Merch</li>
        </ul>
    </header> */}
fetch("http://localhost:8080/album/")
.then(res => res.json())
.then(albumsJson => {
    displayAlbumsView(mainContainerEl, albumsJson);
})
.catch(error => console.error(error));



function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

export {
    clearChildren
}; 
export {
    displayHeader
};   