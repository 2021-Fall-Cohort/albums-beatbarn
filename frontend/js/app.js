import {displayAlbumsView} from "/js/albumsView.js";
import {displayAlbumView} from "./albumView.js";


const mainContainerEl = document.querySelector(".mainContainer");

function displayHeader(mainContainerEl, albumsJson){
    const headerEl = document.createElement("header");
    const headerUlEl = document.createElement("ul");
    headerUlEl.classList.add("header");
        const homeLiEl = document.createElement("img");
        homeLiEl.src = "/resources/barn.png";
        homeLiEl.classList.add("homeImg");
        const missionLiEl = document.createElement("li");
        missionLiEl.innerText = "Mission Statement";
        missionLiEl.classList.add("headerLi");
        const meetLiEl = document.createElement("li");
        meetLiEl.innerText = "Meet the Farmers";
        meetLiEl.classList.add("headerLi");
        meetLiEl.setAttribute('id', 'meetLink');

        headerUlEl.append(homeLiEl);
        headerUlEl.append(missionLiEl);
        headerUlEl.append(meetLiEl);
        headerEl.append(headerUlEl);
        mainContainerEl.append(headerEl);

    homeLiEl.addEventListener("click", () => {
        clearChildren(mainContainerEl);
        fetchAlbums();
    })

    // const meetModalDiv = document.createElement("div");
    // meetModalDiv.classList.add("meetModal");
    // meetModalDiv.setAttribute('id', 'meetModal');
    // const meetModalContentDiv = document.createElement("div");
    // meetModalContentDiv.classList.add("modalContentDiv");
    // const meetModalHeaderDiv = document.createElement("div");
    // meetModalHeaderDiv.classList.add("modalHeaderDiv");
    // const meetModalClose = document.createElement("span");
    // meetModalClose.classList.add("close");
    // meetModalClose.innerHTML = "&times;";
    // const meetModalHeader = document.createElement("h2");
    // meetModalHeader.classList.add("modalHeader");
    // meetModalHeader.innerText = "Thank your Farmers!";
    // const meetModalBodyDiv = document.createElement("div");
    // meetModalBodyDiv.classList.add("modalBodyDiv");

    // const portfolioUl = document.createElement("ul");
    // portfolioUl.classList.add("portfolioUl");
    // const tommyLi = document.createElement("li");
    // tommyLi.classList.add("portfolioLi");
    // const carsonLi = document.createElement("li");
    // carsonLi.classList.add("portfolioLi");
    // const aliLi = document.createElement("li");
    // aliLi.classList.add("portfolioLi");
    // const garadLi = document.createElement("li");
    // garadLi.classList.add("portfolioLi");    
    // const tommyImg = document.createElement("img");
    // tommyImg.classList.add("portfolioImg");
    // tommyImg.src = "/resources/tommy.jpg";
    // const carsonImg = document.createElement("img");
    // carsonImg.classList.add("portfolioImg");
    // carsonImg.src = "/resources/carson.jpg";
    // const aliImg =  document.createElement("img"); 
    // aliImg.classList.add("portfolioImg");
    // aliImg.src = "/resources/avi.png";
    // const garadImg  = document.createElement("img");
    // garadImg.classList.add("portfolioImg");    


    
    //     tommyLi.append(tommyImg);
    //     portfolioUl.append(tommyLi);
    //     portfolioUl.append(carsonLi);
    //     portfolioUl.append(aliLi);
    //     portfolioUl.append(garadLi);
    //     meetModalHeaderDiv.append(meetModalHeader);
    //     meetModalDiv.append(meetModalClose);
    //     meetModalDiv.append(meetModalHeaderDiv);
    //     meetModalContentDiv.append(meetModalBodyDiv);
        
    //     meetModalDiv.append(meetModalContentDiv);
    //     mainContainerEl.append(meetModalDiv);


    // var modal = document.getElementById("meetModal");

    // var btn = document.getElementById("meetLink");

    // var span = document.getElementsByClassName("close")[0];

    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // span.onclick = function() {
    //     modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
    // }
};

fetchAlbums();

function fetchAlbums(){    
    fetch("http://localhost:8080/album/")
    .then(res => res.json())
    .then(albumsJson => {
        displayAlbumsView(mainContainerEl, albumsJson);
    })
    .catch(error => console.error(error));
}


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