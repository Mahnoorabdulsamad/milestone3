function handleFormSubmit(event: Event): void {
    event.preventDefault(); 

    
    const form = document.getElementById('resumeform') as HTMLFormElement;
    const formData = new FormData(form);

    (document.getElementById('displayPicture') as HTMLImageElement).src = URL.createObjectURL(formData.get('picture') as Blob);
    (document.getElementById('displayName') as HTMLElement).innerText = formData.get('name') as string;
    (document.getElementById('displayEmail') as HTMLElement).innerText = formData.get('email') as string;
    (document.getElementById('displayPhone') as HTMLElement).innerText = formData.get('phone') as string;
    (document.getElementById('displayAdress') as HTMLElement).innerText = formData.get('address') as string;
    (document.getElementById('displaySkills') as HTMLElement).innerText = formData.get('skills') as string;
    (document.getElementById('displayEducation') as HTMLElement).innerText = formData.get('education') as string;
    (document.getElementById('displayExperience') as HTMLElement).innerText = formData.get('experience') as string;
}

// Attach event listener to form submit
document.getElementById('resumeform')?.addEventListener('submit', handleFormSubmit);