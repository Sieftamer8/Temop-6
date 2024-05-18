/* Start Change Background image function */

/* Variables will be used */
let landing = document.querySelector(".landing-sec");
let YesBtnChBg = document.querySelector(".yesBtn");
let NoBtnChBg = document.querySelector(".noBtn");
let defaultImg = landing.style.backgroundImage = `url("Imgs/02.jpg")`; // Default Image
let changeBackground;
let interval; 

function changeBgImg() {
    if (changeBackground) {
        clearInterval(interval); 
        interval = setInterval(() => {
            let chooseNum = Math.floor(Math.random() * 5) + 1;
            landing.style.backgroundImage = `url("Imgs/0${chooseNum}.jpg")`;
        }, 4000);
    } else {
        clearInterval(interval); 
        defaultImg;
    }
}


/* End Change Background image function  */
/* Variables will be used */
let barIcon = document.querySelector(".Bars");
let menuActive = document.querySelector(".menuActive");
let allLi = document.querySelectorAll(".list ul li");
let liContent;

function liRes(stats) {
    allLi.forEach(function (li) {
        let liClone = li.cloneNode(true);
        menuActive.appendChild(liClone);
    });
}

barIcon.onclick = function () {
    barIcon.classList.toggle("Active");
    
    if (barIcon.classList.contains("Active")) {
        liRes();
    } else {
        menuActive.querySelectorAll("li").forEach(function (ele) {
            ele.remove()
        })
    }
}

/* Start Bars For Smaller Screens */

/* Start Change Setting  */

/* Variables will be used */
let YesBullet = document.querySelector(".ShowBullet .yesBtn");
let NoBullet = document.querySelector(".ShowBullet .noBtn");
let Bullets = document.querySelectorAll(".Bullets ul li");
let GearIcon = document.querySelector(".gearIcon");
let SideBar = document.querySelector(".SideBar");
let ChBgBtn = document.getElementsByClassName("ChBgBtn");
let BulletBtn = document.getElementsByClassName("BulletBtn");
let GetColors = document.querySelectorAll('li[color-set]');



// When i click on gear icon 
GearIcon.onclick = function () {
    GearIcon.classList.toggle("fa-spin"); // add class to spin
    SideBar.classList.toggle("open"); // add open class on side bar
}

/* Change main color box */

// Change Main Color And Save In Local Storage
function ColorInBoxes() {
    GetColors.forEach(function (ele) {
        ele.style.backgroundColor = ele.getAttribute("color-set");
        ele.onclick = function () {
            window.localStorage.setItem("--main-color", ele.getAttribute("color-set"));
            document.documentElement.style.setProperty('--main-color', ele.getAttribute("color-set"));

            // To remove "active" class from all boxes
            GetColors.forEach(function(li) {
                li.classList.remove("active");
            });

            // to add "active" class to the active color
            ele.classList.add("active");
        }
    })
}

let storedColor = window.localStorage.getItem("--main-color");
if (storedColor) {
    document.documentElement.style.setProperty('--main-color', storedColor);
    // to find the main color and add the "active" class
    GetColors.forEach(function (activeColor) {
        if (activeColor.getAttribute("color-set") === storedColor) {
            activeColor.classList.add("active");
        }
    });
}


ColorInBoxes();

/* Change background box */

// To toggle "active" class between Change Background Buttons
Array.from(ChBgBtn).forEach(ele => {
    ele.addEventListener('click', function () {
        Array.from(ChBgBtn).forEach(ele => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");
    })
});


YesBtnChBg.onclick = function () {
    changeBackground = true;
    changeBgImg();
    window.localStorage.setItem('changeBackground', 'true');
}

NoBtnChBg.onclick = function () {
    changeBackground = false;
    changeBgImg();
    window.localStorage.setItem('changeBackground', 'false');
}

let ChBgState = window.localStorage.getItem('changeBackground');

if (ChBgState == 'true') {
    changeBackground = true;
    changeBgImg();
    YesBtnChBg.classList.add("active")
    NoBtnChBg.classList.remove("active")
} else {
    landing.style.backgroundImage = `url("Imgs/01.jpg")`; // Default Image
    NoBtnChBg.classList.add("active")
    YesBtnChBg.classList.remove("active")
}

/* Show Bullets box */

// To toggle "active" class between Show Bullets Buttons 
Array.from(BulletBtn).forEach(ele => {
    ele.addEventListener('click', function() {
        Array.from(BulletBtn).forEach(ele => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");
    })
})


// To when i click on "yes" button show bullets
YesBullet.onclick = function () {
    Bullets.forEach(function(bullet) {
        bullet.style.display = "block";
    });
    window.localStorage.setItem('BulletDisplay', 'block');
};

// To when i click on "np" button hide bullets
NoBullet.onclick = function () {
    Bullets.forEach(function(bullet) {
        bullet.style.display = "none";
    });
    window.localStorage.setItem('BulletDisplay', 'none');
};

let BulletDisplay = window.localStorage.getItem("BulletDisplay");

if (BulletDisplay == 'block') {
    Bullets.forEach(function(bullet) {
        bullet.style.display = "block";
    });
    YesBullet.classList.add("active");
    NoBullet.classList.remove("active")
} else if (BulletDisplay == 'none') {
    Bullets.forEach(function(bullet) {
        bullet.style.display = "none";
    });
    NoBullet.classList.add("active");
    YesBullet.classList.remove("active")
}



/* Start Skills Section */

/* Variables will be used */
let skillProgress = document.querySelectorAll(".skillProg");
let ourSkills = document.querySelector(".Skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skillProg span");
    allSkills.forEach(skill => {
        skill.style.width = skill.getAttribute('Progress');
    });
  }
};

/* End Skills Section */

/* Start Gallery Section */
/* Variables will be used */
// Select all the images in the imgBox
let img = document.querySelectorAll(".imgBox img");
let imgOverlay = document.getElementById("overlay")
let OverlayBox = document.getElementById("overlayBox")
let closeIcon = document.getElementById("closeMark")
let altAttr;
let srcAttr;

img.forEach(function (ele) {
    ele.onclick = function () {
        OverlayBox.style.display = "block";
        function overlay() {
            imgOverlay.classList.add("imgOverlay");
            OverlayBox.classList.add("overlayBox");
            closeIcon.style.display = "block"
        }

        function close() {
            closeIcon.onclick = function() {
                imgOverlay.classList.remove("imgOverlay");
                OverlayBox.classList.remove("overlayBox");
                OverlayBox.style.display = "none";
            }
        }
        OverlayBox.innerHTML = "";
        function boxOverlay() {    
            altAttr = ele.getAttribute("alt");
            srcAttr = ele.getAttribute("src");
            let boxTitle = document.createElement("h3");
            let boxImg = document.createElement("img");
            boxTitle.innerText = altAttr;
            boxImg.src = srcAttr;Location
            OverlayBox.appendChild(boxTitle);
            OverlayBox.appendChild(boxImg);
            OverlayBox.appendChild(closeIcon)    
        }
    close()
    boxOverlay()
    overlay();
};
});

/* Start journey Section */
/* Variable Will Used */

/* End journey Section */
