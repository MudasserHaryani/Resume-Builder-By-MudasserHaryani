// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <div style="font-family: 'Arial', sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
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
});