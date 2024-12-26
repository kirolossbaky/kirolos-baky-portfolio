// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission (Placeholder)
function initContactForm() {
    const contactForm = document.querySelector('.contact form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        // Basic form validation
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields');
            return;
        }
        
        // Placeholder for form submission logic
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Active navigation state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero section (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const heroSubtitle = document.querySelector('.hero-content p');
if (heroSubtitle) {
    heroSubtitle.innerHTML = ''; // Clear existing text
    typeWriter(heroSubtitle, 'Crafting innovative solutions through code');
}

// Particle Background Effect
function initParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particle-background');
    document.querySelector('.hero').appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particleContainer.appendChild(particle);
    }
}

// Code Typing Effect
function initCodeTypingEffect() {
    const codeSnippet = document.querySelector('.code-snippet');
    const code = 'def solve_problem(challenge):\n    skills = ["creativity", "persistence"]\n    return success';
    
    let index = 0;
    function typeCode() {
        if (index < code.length) {
            codeSnippet.textContent += code.charAt(index);
            index++;
            setTimeout(typeCode, 50);
        }
    }
    
    typeCode();
}

// Project Hover Effects with Modal
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectDetails = {
        'Burndown Chart Generator': {
            description: 'An interactive web-based tool for generating burndown charts in Agile project management. Built with Python, this project helps teams visualize sprint progress and track work completion rates.',
            technologies: ['Python', 'Web Development', 'Agile Methodologies'],
            githubLink: 'https://github.com/kirolossbaky/burndown-chart-generator'
        },
        'Medical App': {
            description: 'A Flutter-based mobile application designed to help users manage and track their medications. Features include medication reminders, dosage tracking, and health insights.',
            technologies: ['Flutter', 'Dart', 'Mobile Development', 'Healthcare'],
            githubLink: 'https://github.com/kirolossbaky/medical-app'
        },
        'AI Plagiarism Checker': {
            description: 'An advanced plagiarism detection tool leveraging machine learning and natural language processing techniques. Helps educators and researchers identify potential academic misconduct.',
            technologies: ['Python', 'Machine Learning', 'NLP', 'AI'],
            githubLink: 'https://github.com/kirolossbaky/PlagiarismChecker'
        }
    };
    
    projectCards.forEach(card => {
        const modal = document.createElement('div');
        modal.classList.add('project-modal');
        
        const projectName = card.querySelector('h3').textContent;
        const project = projectDetails[projectName];
        
        const modalContent = `
            <div class="modal-content">
                <h3>${projectName}</h3>
                <p>${project.description}</p>
                <div class="modal-tech-stack">
                    <span>Technologies Used</span>
                    <div class="tech-icons">
                        ${project.technologies.map(tech => `<i class="fab fa-${tech.toLowerCase()}"></i>`).join('')}
                    </div>
                </div>
                <a href="${project.githubLink}" target="_blank">View on GitHub</a>
                <button class="close-modal">Close</button>
            </div>
        `;
        
        modal.innerHTML = modalContent;
        document.body.appendChild(modal);
        
        card.addEventListener('click', () => {
            modal.classList.add('show');
        });
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });
}

// Skill Interaction Animation
function initSkillInteractions() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.transition = 'all 0.5s ease';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Run crazy features when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initParticleBackground();
    initCodeTypingEffect();
    initProjectModals();
    initContactForm();
    initSkillInteractions();
});
