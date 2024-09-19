// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('sharable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('sharable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

    // Generate the resume content dynamically
    const resumeHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <div style="text-align: center; border-bottom: 2px solid #1abc9c; padding-bottom: 10px;">
            <h1 style="margin: 0; color: #2c3e50;">${name}</h1>
            <p style="margin: 5px 0; color: #7f8c8d;">${email} | ${phone}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Personal Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Education</h2>
            <p>${education}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Work Experience</h2>
            <p>${experience}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Skills</h2>
            <p>${skills}</p>
        </div>
    </div>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
if (downloadPdfButton) {
    downloadPdfButton.addEventListener('click', () => {
        // CSS ensures only the resume is printed
        window.print(); 
    });
} else {
    console.error('The download PDF button is missing.');
}
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {

        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }
});