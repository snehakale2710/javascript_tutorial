// Q1. Basic Event Handling Concept
// Target the DOM element
const btn = document.querySelector('#myButton');
// Define the event listener function
function handleClick(event) {
    console.log('Button was clicked!');
    console.log('Event Type:', event.type);
}
// Attach event listener to element
btn.addEventListener('click', handleClick);

// Q2. Comparing Event Handler Registration Methods
//DOM Property (Overwrites existing click handlers)
const btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    console.log('First Handler');
};
btn2.onclick = function () {
    console.log('Second Handler (Overwrites First)');
};
// OR: addEventListener (RECOMMENDED - Allows multiple handlers)
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => console.log('Handler 1 Executes'));
btn3.addEventListener('click', () => console.log('Handler 2 Executes'));

// Q3. Event Bubbling vs Event Capturing
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
// Event Bubbling (Default)
parent.addEventListener('click', () => {
    console.log('Parent Bubbling Triggered');
}, false);
child.addEventListener('click', () => {
    console.log('Child Clicked');
}, false);

// Event Capturing
parent.addEventListener('click', () => {
    console.log('Parent Capturing Triggered First');
}, true);

// Q4. preventDefault() vs stopPropagation()
// Example 1: preventDefault()
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link click intercepted!');
});
// Example 2: stopPropagation()
const button = document.querySelector('#btn');
button.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Button clicked, parent click listeners will NOT run.');
});

// Q5. Event Delegation
const todoList = document.getElementById('todo-list');
todoList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Clicked Item Text:', event.target.textContent);
        event.target.classList.toggle('completed');
    }
});

// Q6. Form Submission & Input Validation
const form = document.querySelector('#userForm');
const emailInput = document.querySelector('#email');
// Real-time input validation
emailInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (!value.includes('@')) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green';
    }
});
// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Submitted Email:', formData.get('email'));
});

// Q7. Keyboard Events
document.addEventListener('keydown', (event) => {
    // Escape Key
    if (event.key === 'Escape') {
        console.log('Modal closed via Escape key!');
    }
    // Ctrl + S / Cmd + S
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        console.log('Custom Save action triggered!');
    }
});

// Q8. Custom Events
const userProfile = document.querySelector('#userProfile');
// Register custom event listener
userProfile.addEventListener('userLoggedIn', (event) => {
    console.log('Custom Event Fired!');
    console.log('Logged User Details:', event.detail.username);
});
// Create Custom Event
const loginEvent = new CustomEvent('userLoggedIn', {
    detail: {
        username: 'Developer',
        role: 'Admin'
    },
    bubbles: true
});
// Dispatch Custom Event
userProfile.dispatchEvent(loginEvent);