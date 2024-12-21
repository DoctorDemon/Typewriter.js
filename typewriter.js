document.addEventListener("DOMContentLoaded", function() {
    const typewriters = document.querySelectorAll('typewriter');
    typewriters.forEach(typewriter => {
        const elements = Array.from(typewriter.children);
        const pause = parseInt(typewriter.getAttribute('pause')) || 2; // Default pause is 2 seconds
        const typingSpeed = parseInt(typewriter.getAttribute('typing-speed')) || 100; // Default typing speed
        const untypingSpeed = parseInt(typewriter.getAttribute('untyping-speed')) || 100; // Default untyping speed
        const loop = typewriter.getAttribute('loop') === 'true'; // Determine if the effect should loop
        typewriter.innerHTML = '';
        let i = 0;
        let j = 0;
        let typing = true;

        function type() {
            if (typing) {
                if (i < elements[j].innerHTML.length) {
                    typewriter.innerHTML = elements[j].outerHTML.substring(0, elements[j].outerHTML.indexOf('>') + 1) + elements[j].innerHTML.substring(0, i + 1) + elements[j].outerHTML.substring(elements[j].outerHTML.lastIndexOf('<'));
                    i++;
                    setTimeout(type, typingSpeed); // Adjust typing speed here
                } else {
                    if (loop || j < elements.length - 1) {
                        typing = false;
                        setTimeout(type, pause * 1000); // Pause before un-typing
                    }
                }
            } else {
                if (i > 0) {
                    typewriter.innerHTML = elements[j].outerHTML.substring(0, elements[j].outerHTML.indexOf('>') + 1) + elements[j].innerHTML.substring(0, i - 1) + elements[j].outerHTML.substring(elements[j].outerHTML.lastIndexOf('<'));
                    i--;
                    setTimeout(type, untypingSpeed); // Adjust un-typing speed here
                } else {
                    typing = true;
                    j = (j + 1) % elements.length; // Move to the next element
                    setTimeout(type, typingSpeed); // Start typing again
                }
            }
        }
        type();
    });
});
