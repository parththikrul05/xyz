document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the elements
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const messageElement = document.getElementById('message');

    // 2. Event Listener for the SAVE button
    saveBtn.addEventListener('click', () => {
        // Change the message text
        messageElement.textContent = 'Changes have been saved successfully!';
        
        // Add a CSS class for a success effect (color/animation)
        messageElement.classList.add('success-message');
        
        // Remove the class after a short delay so the animation can be seen again
        setTimeout(() => {
            messageElement.classList.remove('success-message');
        }, 1500); 
    });

    // 3. Event Listener for the CANCEL button
    cancelBtn.addEventListener('click', () => {
        // Change the message text
        messageElement.textContent = 'Action cancelled. No changes were made.';
        
        // Ensure the success class is removed if it was present
        messageElement.classList.remove('success-message');
        
        // Reset the message after a short delay
        setTimeout(() => {
            messageElement.textContent = 'Click a button to see the action!';
        }, 2000); 
    });
});