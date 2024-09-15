var _a;
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    // Get form data
    var form = document.getElementById('resumeform');
    var formData = new FormData(form);
    // Update resume output
    document.getElementById('displayPicture').src = URL.createObjectURL(formData.get('picture'));
    document.getElementById('displayName').innerText = formData.get('name');
    document.getElementById('displayEmail').innerText = formData.get('email');
    document.getElementById('displayPhone').innerText = formData.get('phone');
    document.getElementById('displayAdress').innerText = formData.get('address');
    document.getElementById('displaySkills').innerText = formData.get('skills');
    document.getElementById('displayEducation').innerText = formData.get('education');
    document.getElementById('displayExperience').innerText = formData.get('experience');
}
// Attach event listener to form submit
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
