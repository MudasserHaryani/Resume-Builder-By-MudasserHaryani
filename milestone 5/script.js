// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('sharable-link-container');
var shareableLinkElement = document.getElementById('sharable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n    <div style=\"font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;\">\n        <div style=\"text-align: center; border-bottom: 2px solid #1abc9c; padding-bottom: 10px;\">\n            <h1 style=\"margin: 0; color: #2c3e50;\">".concat(name, "</h1>\n            <p style=\"margin: 5px 0; color: #7f8c8d;\">").concat(email, " | ").concat(phone, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Personal Information</h2>\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Education</h2>\n            <p>").concat(education, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Work Experience</h2>\n            <p>").concat(experience, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Skills</h2>\n            <p>").concat(skills, "</p>\n        </div>\n    </div>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
if (downloadPdfButton) {
    downloadPdfButton.addEventListener('click', function () {
        // CSS ensures only the resume is printed
        window.print();
    });
}
else {
    console.error('The download PDF button is missing.');
}
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
