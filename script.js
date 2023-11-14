
// Exemplo de credencial simulada
const correctUsername = 'usuario';
const correctPassword = 'senha123';

document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Check se o username e password estão correct (simplificado)
    if (username === correctUsername && password === correctPassword) {
        // Redireciona para página de login se tiver sucesso
        window.location.href = '/pagina-inicial';
    } else {
        // Redireciona para página de erro de falhar
        window.location.href = 'error.html';
    }
});
