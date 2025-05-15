// Generate falling equipment
function createFallingEquipment() {
    const container = document.getElementById('falling-equipment-container');
    const equipmentIcons = [
        { class: 'fas fa-cog gear', name: 'gear' },
        { class: 'fas fa-microchip chip', name: 'chip' },
        { class: 'fas fa-robot robot', name: 'robot' },
        { class: 'fas fa-tools tool', name: 'tool' },
        { class: 'fas fa-bolt circuit', name: 'circuit' },
        { class: 'fas fa-server gear', name: 'server' },
        { class: 'fas fa-ruler-combined tool', name: 'ruler' },
        { class: 'fas fa-atom gear', name: 'atom' },
        { class: 'fas fa-microscope tool', name: 'microscope' },
        { class: 'fas fa-flask circuit', name: 'flask' }
    ];

    // Create falling equipment elements
    for (let i = 0; i < 25; i++) {
        const equipment = document.createElement('div');
        const randomIcon = equipmentIcons[Math.floor(Math.random() * equipmentIcons.length)];
        
        equipment.className = `falling-equipment ${randomIcon.class}`;
        equipment.innerHTML = `<i class="${randomIcon.class}"></i>`;
        
        // Random position and animation
        const leftPos = Math.random() * 100;
        const animDuration = 8 + Math.random() * 20;
        const animDelay = Math.random() * 20;
        const size = 20 + Math.random() * 40;
        const rotation = Math.random() * 360;
        
        equipment.style.left = `${leftPos}%`;
        equipment.style.fontSize = `${size}px`;
        equipment.style.animationDuration = `${animDuration}s`;
        equipment.style.animationDelay = `-${animDelay}s`;
        equipment.style.transform = `rotate(${rotation}deg)`;
        
        container.appendChild(equipment);
    }
}

// Create circuit lines in background
function createCircuitLines() {
    const container = document.getElementById('particle-background');
    
    // Horizontal lines
    for (let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.className = 'circuit-line horizontal';
        line.style.top = `${Math.random() * 100}%`;
        line.style.opacity = Math.random() * 0.15;
        line.style.width = `${30 + Math.random() * 70}%`;
        line.style.left = `${Math.random() * 30}%`;
        container.appendChild(line);
    }
    
    // Vertical lines
    for (let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.className = 'circuit-line vertical';
        line.style.left = `${Math.random() * 100}%`;
        line.style.opacity = Math.random() * 0.15;
        line.style.height = `${30 + Math.random() * 70}%`;
        line.style.top = `${Math.random() * 30}%`;
        container.appendChild(line);
    }
}

// Create tech circles
function createTechCircles() {
    const container = document.getElementById('particle-background');
    
    for (let i = 0; i < 8; i++) {
        const circle = document.createElement('div');
        circle.className = 'tech-circle';
        
        const size = 60 + Math.random() * 240;
        const duration = 30 + Math.random() * 60;
        const borderWidth = 1 + Math.random() * 3;
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.borderWidth = `${borderWidth}px`;
        circle.style.borderColor = `rgba(138, 43, 226, ${0.1 + Math.random() * 0.3})`;
        
        container.appendChild(circle);
    }
}

// Form validation
function isValid() {
    const user = document.form.user.value.trim();
    const pass = document.form.pass.value.trim();
    const roll = document.form.roll.value.trim();

    if (!user || !pass || !roll) {
        showError("Please fill all fields!");
        return false;
    }
    
    return true;
}

// Show error message
function showError(message) {
    // Create error element if it doesn't exist
    let errorEl = document.querySelector('.error-message');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        document.querySelector('.login-form').prepend(errorEl);
    }
    
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    
    // Add error class to empty fields
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.parentElement.classList.add('error');
            setTimeout(() => {
                input.parentElement.classList.remove('error');
            }, 2000);
        }
    });
    
    setTimeout(() => {
        errorEl.style.display = 'none';
    }, 3000);
}

// Initialize effects when page loads
window.onload = function() {
    createFallingEquipment();
    createCircuitLines();
    createTechCircles();
    
    // Add hover effect to form inputs
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.input-icon').style.color = 'var(--accent-color)';
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('.input-icon').style.color = 'rgba(255, 255, 255, 0.5)';
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Add pulse animation to submit button every 5 seconds
    const submitBtn = document.querySelector('.submit-btn');
    setInterval(() => {
        submitBtn.style.animation = 'pulse 2s infinite';
        setTimeout(() => {
            submitBtn.style.animation = '';
        }, 2000);
    }, 8000);
};