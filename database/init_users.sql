CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES 
('admin', 'admin123'),  -- En un caso real, esto debería ser un hash
('usuario', 'clave123');