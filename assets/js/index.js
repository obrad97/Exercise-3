const btn = document.getElementById("btn");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMsg = document.getElementsByClassName('error-msg')[0];
    if(errorMsg){ errorMsg.remove();}
    
    let email = document.getElementById('email').value;
    
    if (email != '') {
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error-msg';
            const text = document.createTextNode('Oops! Please check your email');
            errorMsg.appendChild(text); 
            const form = document.getElementById('form');
            form.appendChild(errorMsg)
        }
    } else {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-msg';
        const text = document.createTextNode('Please enter an email address');
        errorMsg.appendChild(text); 
        const form = document.getElementById('form');
        form.appendChild(errorMsg)
    }
    
});
