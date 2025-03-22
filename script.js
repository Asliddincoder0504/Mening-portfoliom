document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Backend Developer", "Frontend Developer", "UI/UX Designer", "Web Developer", "Telegram Bots Creator", "AI Creator", "Cybersecurity Specialist"];
    const typingElement = document.getElementById("typing");
    let index = 0;
    let currentText = "";
    let isDeleting = false; 
    let speed = 150;

    function type() {
        let text = texts[index];

        isDeleting ? (currentText = text.substring(0, currentText.length - 1)) : currentText = text.substring(0, currentText.length + 1);

        typingElement.innerHTML = currentText;

        if (!isDeleting && currentText === text) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000); 
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            index = (index + 1) % texts.length; 
        }

        setTimeout(type, speed); 
    }
    type();

    setTimeout(function () {
        document.getElementById("preloader").classList.add("fade-out");
        setTimeout(() => document.getElementById("preloader").style.display = "none", 1000);
    }, 3000);
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
        }, index * 200);
    });

    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 1.3s ease";
        });
        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });

    document.querySelector("#filter-btn").addEventListener("click", () => {
        projects.forEach(project => {
            if (!project.classList.contains("selected")) {
                project.style.display = "none";
            }
        });
    });
    document.querySelectorAll(".contact-details p").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.querySelector("i").classList.add("shake");
            setTimeout(() => {
                item.querySelector("i").classList.remove("shake");
            }, 500);
        });
    });
});

