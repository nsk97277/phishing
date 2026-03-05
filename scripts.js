// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission du formulaire par défaut

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(`Email entered: ${email}`);
        console.log(`Password entered: ${password}`);

        // Vous feriez appel à une API pour envoyer ces données au backend ici.
    });
});
