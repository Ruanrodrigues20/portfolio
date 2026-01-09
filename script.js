document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "0.6s";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});

const profileImg = document.querySelector(".profile-image img");

if (profileImg) {
    profileImg.style.opacity = 0;
    profileImg.style.transform = "scale(0.8)";

    setTimeout(() => {
        profileImg.style.transition = "0.6s";
        profileImg.style.opacity = 1;
        profileImg.style.transform = "scale(1)";
    }, 300);
}


const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
        card.style.transition = "0.6s";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, 200 + index * 150);
});

const experienceItems = document.querySelectorAll(".experience-item");

experienceItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
        item.style.transition = "0.6s";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
    }, 150 + index * 150);
});
