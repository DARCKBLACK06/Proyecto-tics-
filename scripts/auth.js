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
// Simulación de "base de datos" en localStorage
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({
        'admin': 'admin123',
        'usuario': 'clave123'
    }));
}

// Función para registrar usuario
document.addEventListener('DOMContentLoaded', function() {
    // Manejar registro de nuevo usuario
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            
            const users = JSON.parse(localStorage.getItem('users'));
            
            if (users[newUsername]) {
                document.getElementById('error-message').textContent = 'El usuario ya existe';
            } else {
                users[newUsername] = newPassword; // ¡En un caso real, usa hashing!
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                window.location.href = 'login.html';
            }
        });
    }

    // Resto del código (login y logout) permanece igual...
});
