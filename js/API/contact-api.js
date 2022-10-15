const onSubmit = (e) => {

    e.preventDefault();

    const resultElement = document.getElementById('success-message');

    let postObj = {
        "email" : e.target.elements.email.value,
        "message" : e.target.elements.message.value
    } 

fetch('https://modelin.webmcdm.dk/contacts', {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }   
})
.then((response) => {
    console.log('--->', response, response.ok)
    
    return response.json()
})
.then(response => {
    console.log('--->hey')
    resultElement.textContent = response.result
})
}
  
const contactForm = document.querySelector('.contact-form-section');
contactForm.addEventListener('submit', onSubmit)