// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically with a polished format
    var resumeHTML = "\n    <div style=\"font-family: 'Arial', sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;\">\n        <div style=\"text-align: center; border-bottom: 2px solid #1abc9c; padding-bottom: 10px;\">\n            <h1 style=\"margin: 0; color: #2c3e50;\">".concat(name, "</h1>\n            <p style=\"margin: 5px 0; color: #7f8c8d;\">").concat(email, " | ").concat(phone, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Personal Information</h2>\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Education</h2>\n            <p>").concat(education, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Work Experience</h2>\n            <p>").concat(experience, "</p>\n        </div>\n        <div style=\"margin: 20px 0;\">\n            <h2 style=\"border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;\">Skills</h2>\n            <p>").concat(skills, "</p>\n        </div>\n    </div>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
