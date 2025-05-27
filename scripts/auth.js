// Simulación de autenticación (en un caso real usarías un backend)
document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Credenciales hardcodeadas para demostración
            // En una aplicación real, esto se haría contra una base de datos segura
            const validUsers = {
                'admin': 'admin123',
                'usuario': 'clave123'
            };
            
            if (validUsers[username] && validUsers[username] === password) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.href = 'welcome.html';
            } else {
                document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
            }
        });
    }
    
    // Verificar autenticación al cargar la página de bienvenida
    if (window.location.pathname.includes('welcome.html')) {
        if (localStorage.getItem('loggedIn') !== 'true') {
            window.location.href = 'login.html';
        }
    }
    
    // Manejar logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
            window.location.href = 'login.html';
        });
    }
});