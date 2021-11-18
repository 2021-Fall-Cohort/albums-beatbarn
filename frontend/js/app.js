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

    const meetModalDiv = document.createElement("div");
    meetModalDiv.classList.add("meetModal");
    meetModalDiv.setAttribute('id', 'meetModal');
    const meetModalContentDiv = document.createElement("div");
    meetModalContentDiv.classList.add("modalContentDiv");
    const meetModalHeaderDiv = document.createElement("div");
    meetModalHeaderDiv.classList.add("modalHeaderDiv");
    const meetModalClose = document.createElement("span");
    meetModalClose.classList.add("meetClose");
    meetModalClose.innerHTML = "&times;";
    const meetModalHeader = document.createElement("h2");
    meetModalHeader.classList.add("modalHeader");
    meetModalHeader.innerText = "Thank a Farmer!";
    const meetModalBodyDiv = document.createElement("div");
    meetModalBodyDiv.classList.add("modalBodyDiv");

    const portfolioUl = document.createElement("ul");
    portfolioUl.classList.add("portfolioUl");

    const aliLi = document.createElement("li");
    aliLi.classList.add("portfolioLi");
    const aliImg =  document.createElement("img"); 
    aliImg.classList.add("portfolioImg");
    aliImg.src = "/resources/ali.jpeg";
    const aliName = document.createElement("h4");
    aliName.classList.add("portfolioName");
    aliName.innerText = "Ali Ashkir";

    const carsonLi = document.createElement("li");
    carsonLi.classList.add("portfolioLi");
    const carsonImg = document.createElement("img");
    carsonImg.classList.add("portfolioImg");
    carsonImg.src = "/resources/carson.JPEG";
    const carsonName = document.createElement("h4");
    carsonName.innerText = "Carson Dentinger";
    carsonName.classList.add("portfolioName");

    const garadLi = document.createElement("li");
    garadLi.classList.add("portfolioLi");    
    const garadImg  = document.createElement("img");
    garadImg.classList.add("portfolioImg");
    garadImg.src = "/resources/garad.jpg";
    const garadName = document.createElement("h4");
    garadName.classList.add("portfolioName");
    garadName.innerText = "Garad Osman";    

    const tommyLi = document.createElement("li");
    tommyLi.classList.add("portfolioLi");
    const tommyImg = document.createElement("img");
    tommyImg.classList.add("portfolioImg");
    tommyImg.src = "/resources/tommy.jpg";
    const tommyName = document.createElement("h4");
    tommyName.classList.add("portfolioName");
    tommyName.innerText = "Thomas Powers";
   
    aliLi.addEventListener("click", () => {
        location.replace("https://www.linkedin.com/in/ali-ashkir-5070211ba/");
    })

    carsonLi.addEventListener("click", () => {
        location.replace("https://www.linkedin.com/in/carson-dentinger/");
    })

    garadLi.addEventListener("click", () => {
        location.replace("https://www.linkedin.com/in/garadosman/");
    })

    tommyLi.addEventListener("click", () => {
        location.replace("https://github.com/ThomasC119");
    })

    aliLi.append(aliImg);
    aliLi.append(aliName);
    carsonLi.append(carsonImg);
    carsonLi.append(carsonName);
    garadLi.append(garadImg);
    garadLi.append(garadName);
    tommyLi.append(tommyImg);
    tommyLi.append(tommyName);
    
    portfolioUl.append(aliLi);
    portfolioUl.append(carsonLi);
    portfolioUl.append(garadLi);
    portfolioUl.append(tommyLi);

    meetModalHeaderDiv.append(meetModalHeader);
    meetModalDiv.append(meetModalClose);
    meetModalDiv.append(meetModalHeaderDiv);
    meetModalBodyDiv.append(portfolioUl);
    meetModalContentDiv.append(meetModalBodyDiv);
        
    meetModalDiv.append(meetModalContentDiv);
    mainContainerEl.append(meetModalDiv);
    
    var modal = document.getElementById("meetModal");
    var btn = document.getElementById("meetLink");
    var span = document.getElementsByClassName("meetClose")[0];

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