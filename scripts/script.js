document.addEventListener('DOMContentLoaded', () => {
    alert("A página foi totalmente carregada e js foi implantado!")

    loadUserData();
})


function loadUserData(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }
}