document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('textArea');
    const charInfo = document.getElementById('charInfo');

    // Function to update character info and console log
    function updateCharCount() {
        const charCount = textArea.value.length;
        charInfo.textContent = `You have entered ${charCount} characters`;

        // Log character count to console
        console.log(charCount);

        // Provide feedback if entering number or letter
        if (charCount > 0) {
            const lastChar = textArea.value.slice(-1);
            if (!isNaN(lastChar)) {
                console.log("You are entering a number");
            } else if (/[a-zA-Z]/.test(lastChar)) {
                console.log("You are entering a letter");
            } else {
                console.log("You are entering another type of character");
            }
        }
    }

    // Event listener for textarea input
    textArea.addEventListener('input', updateCharCount);
});
