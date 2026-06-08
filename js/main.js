/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        },800);
    }
});


/* ==========================================
   HERO SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if(slides.length > 0){

    setInterval(nextSlide,5000);
}


/* ==========================================
   SCROLL ANIMATIONS
========================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(position < screenHeight - 100){

            el.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================================
   SMOOTH MENU
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });
        }
    });
});


/* ==========================================
   COUNTERS
========================================== */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        let count = 0;

        const speed = target / 150;

        const updateCounter = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText =
                target;
            }
        };

        updateCounter();
    });

    counterStarted = true;
}

window.addEventListener("scroll", () => {

    const section =
    document.querySelector(".about");

    if(!section) return;

    const top =
    section.getBoundingClientRect().top;

    if(top < window.innerHeight){

        startCounters();
    }
});


/* ==========================================
   HEADER SCROLL
========================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }
});


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn =
document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if(!topBtn) return;

    if(window.scrollY > 600){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");
    }
});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"
        });
    });
}


/* ==========================================
   MOBILE MENU
========================================== */

const burger =
document.querySelector(".burger");

const mobileMenu =
document.querySelector(".mobile-menu");

if(burger && mobileMenu){

    burger.addEventListener("click", () => {

        burger.classList.toggle("active");

        mobileMenu.classList.toggle("active");
    });
}


/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages =
document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay =
        document.createElement("div");

        overlay.className =
        "lightbox-overlay";

        overlay.innerHTML = `

            <div class="lightbox">

                <img src="${img.src}" alt="">

            </div>

        `;

        document.body.appendChild(
            overlay
        );

        overlay.addEventListener(
            "click",
            () => {

                overlay.remove();

            }
        );
    });
});


/* ==========================================
   FORM AJAX
========================================== */

const form =
document.querySelector("#contact-form");

if(form){

    form.addEventListener(
        "submit",
        async function(e){

            e.preventDefault();

            const button =
            form.querySelector("button");

            const originalText =
            button.innerText;

            button.innerText =
            "Отправка...";

            try{

                const response =
                await fetch(
                    "send.php",
                    {
                        method:"POST",
                        body:new FormData(form)
                    }
                );

                const result =
                await response.text();

                alert(
                    "Заявка успешно отправлена!"
                );

                form.reset();

            }catch(error){

                alert(
                    "Ошибка отправки формы"
                );
            }

            button.innerText =
            originalText;
        }
    );
}


/* ==========================================
   PARALLAX
========================================== */

window.addEventListener("scroll", () => {

    const parallax =
    document.querySelectorAll(
        ".parallax"
    );

    parallax.forEach(item => {

        const speed = 0.5;

        const offset =
        window.pageYOffset;

        item.style.backgroundPositionY =
        offset * speed + "px";
    });
});


/* ==========================================
   ACTIVE MENU
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 150;

        const height =
        section.clientHeight;

        if(window.scrollY >= top){

            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){

            link.classList.add("active");
        }
    });
});


/* ==========================================
   HERO BUTTON ANIMATION
========================================== */

const heroButtons =
document.querySelectorAll(
    ".hero-btn"
);

heroButtons.forEach(btn => {

    btn.addEventListener(
        "mousemove",
        e => {

            const rect =
            btn.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            btn.style.setProperty(
                "--x",
                x + "px"
            );

            btn.style.setProperty(
                "--y",
                y + "px"
            );
        }
    );
});


console.log(
    "СанТехСмарт loaded successfully"
);

const prevBtn =
document.querySelector(".slider-prev");

const nextBtn =
document.querySelector(".slider-next");

if(prevBtn){

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if(currentSlide < 0){

            currentSlide =
            slides.length - 1;
        }

        showSlide(currentSlide);
    });
}

if(nextBtn){

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;
        }

        showSlide(currentSlide);
    });
}

const requestForm = document.getElementById("requestForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const formData = new FormData(form);

        fetch("send.php", {

            method: "POST",

            body: formData

        })
        .then(response => response.text())
        .then(data => {

            alert("Заявка успешно отправлена!");

            form.reset();

        })
        .catch(error => {

            alert("Ошибка отправки.");

        });

    });

}