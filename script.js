function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate hashing the password (for demonstration purposes)
    const hashedPassword = hashPassword(password);

    // Simulate sending data to the server for validation
    // In a real scenario, you'd make an AJAX request to the server.

    // For simplicity, we'll just show an alert here.
    alert('Login successful!');
}

function hashPassword(password) {
    // Simulate a basic hashing algorithm (for demonstration purposes)
    return btoa(password);
}