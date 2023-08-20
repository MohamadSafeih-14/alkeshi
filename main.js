let animate = document.querySelector(".services-page");
let spns = document.querySelectorAll(".conta div")
let s1 = document.querySelector(".s1");
let s3 = document.querySelector(".s3");
let s2 = document.querySelector(".s2");
window.onscroll = function () {
    if (window.scrollY = animate.offsetTop + "1000px") {
        spns.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

let p3 = document.querySelector(".text-container");
let sectios = document.querySelector(".about-section");
let texti = "hello my name is mohamad safieh and i am a web developer based in syria and now i am living in turkey and i hope thsi will be so good";

console.log(texti.length)




document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const images = document.querySelectorAll('.image');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Hide all images
            images.forEach(image => {
                image.style.display = 'none';
            });

            images.forEach(image => {
                if (filterValue === 'all' || image.classList.contains(filterValue)) {
                    image.style.display = 'block';
                }
            });

            // Remove the fade-in class from all images
            images.forEach(image => {
                image.classList.remove('fade-in');
            });

            // Apply the fade-in animation to all images after filtering
            setTimeout(() => {
                images.forEach(image => {
                    image.classList.add('fade-in');
                });
            }, 10);
        });
    });

    // Initially display all images with fade-in animation
    images.forEach(image => {
        image.style.display = 'block';
        image.classList.add('fade-in');
    });
});


let imgs = document.querySelectorAll(".image .slider-button");

for(let i = 0; i < imgs.length;i++) {

  imgs[i].addEventListener("click", () => {
  let slider = document.getElementById(imgs[i].getAttribute("data-id"));

    if(slider.style.display === "block") {
      slider.style.display = "none";
    } else {
      slider.style.display = "block";
    }

  })
}
