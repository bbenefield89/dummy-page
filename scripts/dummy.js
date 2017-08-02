const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email');
const textArea = document.querySelector('textarea');
const formMessage = document.querySelector('#form-message')
const formButton = document.querySelector('#form-button');

$(document).ready(function () {
  $('.fa-bars').click(function() {
    $('#nav-links-div').toggle('slow');
  });
});

formButton.addEventListener('click', () => {
	if (nameInput.value.match(/\w[^_]/)) {
		if (emailInput.value.match(/\w+\d?@\w+.com/)) {
			if (textArea.value != '') {
				formMessage.textContent = 'Thank you, your message was sent';
				formMessage.style.backgroundColor = 'lightgreen';
			}
		}
	}
	if ((!nameInput.value.match(/\w[^_]/)) || (!emailInput.value.match(/\w+\d?@\w+.com/)) || ((textArea.value == '')))  {
		formMessage.textContent = 'You seem to be missing items';
		formMessage.style.backgroundColor = 'pink'
	}
}); 
