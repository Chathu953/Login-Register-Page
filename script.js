const modal = document.querySelector(".auth-modal");
const loginBtn = document.querySelector(".login-btn-modal");
const closeBtn = document.querySelector(".close-btn-modal");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

loginBtn.onclick = () => {
    modal.classList.add("show");
};

closeBtn.onclick = () => {
    modal.classList.remove("show");
    modal.classList.remove("slide");
};

registerLink.onclick = () => {
    modal.classList.add("slide");
};

loginLink.onclick = () => {
    modal.classList.remove("slide");
};
