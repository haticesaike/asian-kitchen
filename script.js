function loadMenuItems() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log("Alldata",data);
      data.map((item) => {
        let menuItems = document.createElement("div");
        menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");

        let photoContainer = document.createElement("div");
        photoContainer.classList.add("photo-container");

        let photo = document.createElement("img");
        photo.classList.add("photo");

        photo.src = item.img;
        photoContainer.appendChild(photo);
        menuItems.appendChild(photoContainer);

        let menuInfo = document.createElement("div");
        menuInfo.classList.add("menu-info");

        let menuTitle = document.createElement("div");
        menuTitle.classList.add("menu-title");

        let title = document.createElement("h4");
        title.innerText = item.title;

        let price = document.createElement("h4");
        price.classList.add("price");
        price.innerText = item.price;

        let menuText = document.createElement("div");
        menuText.classList.add("menu-text");
        menuText.innerText = item.desc;

        menuItems.appendChild(menuInfo);
        menuInfo.appendChild(menuTitle);
        menuTitle.appendChild(title);
        menuTitle.appendChild(price);
        menuInfo.appendChild(menuText);

        document.querySelector(".section-center").appendChild(menuItems);
      });
    });
}

window.addEventListener("load",loadMenuItems);

const allButton = () => {
    clearPreviousItems();
    loadMenuItems();
};


function categoryMenuButton(button) {
  clearPreviousItems();
  var buttonText = button.textContent.trim();
  console.log("data: " + buttonText);
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const newdata = data.filter((item) => item.category === buttonText);
      console.log(newdata);
      newdata.map((item) => {
        let menuItems = document.createElement("div");
        menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");
        let photoContainer = document.createElement("div");
        photoContainer.classList.add("photo-container");
        let photo = document.createElement("img");
        photo.classList.add("photo");
        photo.src = item.img;
        photoContainer.appendChild(photo);
        menuItems.appendChild(photoContainer);
        let menuInfo = document.createElement("div");
        menuInfo.classList.add("menu-info");
        let menuTitle = document.createElement("div");
        menuTitle.classList.add("menu-title");
        let title = document.createElement("h4");
        title.innerText = item.title;
        let price = document.createElement("h4");
        price.classList.add("price");
        price.innerText = item.price;
        let menuText = document.createElement("div");
        menuText.classList.add("menu-text");
        menuText.innerText = item.desc;
        menuItems.appendChild(menuInfo);
        menuInfo.appendChild(menuTitle);
        menuTitle.appendChild(title);
        menuTitle.appendChild(price);
        menuInfo.appendChild(menuText);
        document.querySelector(".section-center").appendChild(menuItems);
      });
    });
}



function clearPreviousItems() {
  const sectionCenter = document.querySelector(".section-center");

  while (sectionCenter.firstChild) {
    sectionCenter.removeChild(sectionCenter.firstChild);
  }
}