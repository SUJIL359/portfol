Sujil S. - Personal Portfolio Website
This is the source code for my personal portfolio website. The site showcases my skills, educational background, projects, and provides a way to contact me.

Table of Contents
Features
Technologies Used
Sections
How to Use
File Structure
Contact
Features
Home Section: A brief introduction, contact details, and profile picture.
About Section: Information about my education and technical skills.
Projects Section: Overview of notable projects I've worked on.
Contact Section: A contact form that allows visitors to send me a message.
Technologies Used
HTML5: Structure of the web pages.
CSS3: Styling the web pages with custom colors and layout.
JavaScript: Adding form handling interactivity.
GitHub Pages: Hosting the website.
Sections
1. Navigation
A simple navigation bar that links to the different sections of the website.

html
Copy code
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
2. Home Section
Includes my name, a profile picture, contact details, and a short introduction.

html
Copy code
<section id="home">
    <h1>Sujil S.</h1>
    <p>(+91) 8139831540 ⋄ sujilmca@pg.cusat.ac.in</p>
    <img src="images/profile.jpg" alt="Sujil's Photo" />
    <p>Welcome to my portfolio! I am a passionate software developer with skills in C, C++, Python, Java, and more.</p>
</section>
3. About Section
Provides details about my education, technical skills, and certifications.

html
Copy code
<section id="about">
    <h2>About Me</h2>
    <p><strong>Masters of Computer Application (2023 - 2025)</strong><br>Cochin University of Science and Technology, Kochi, Kerala</p>
    <p><strong>Bachelor of Science in Electronics (2019 - 2022)</strong><br>Government College Chittur, Palakkad, Kerala</p>
    <p><strong>GATE Qualified</strong><br>Qualified GATE in Computer Science Engineering, 2023</p>
    
    <h3>Technical Skills</h3>
    <ul>
        <li>Languages: C, C++, Python, Java, HTML/CSS</li>
        <li>Software: MS Office, LaTeX</li>
        <li>Data Structures and Algorithms (DSA)</li>
        <li>Database Management System (DBMS)</li>
    </ul>
</section>
4. Projects Section
Describes projects I have worked on, with brief summaries.

html
Copy code
<section id="projects">
    <h2>Projects</h2>
    <div class="project">
        <h3>Salary Prediction (Python)</h3>
        <p>Developed and implemented salary prediction models using Python and machine learning algorithms.</p>
    </div>
    <div class="project">
        <h3>Library Management System (Java)</h3>
        <p>Designed and developed a Library Management System using Java, with features like overdue notifications and improved search functionality.</p>
    </div>
    <div class="project">
        <h3>Chatbot for Diet Plan Suggestions (IBM Watson Assistant)</h3>
        <p>Created a chatbot for personalized diet suggestions, leveraging natural language processing and machine learning.</p>
    </div>
</section>
5. Contact Section
A contact form that allows visitors to send me a message.

html
Copy code
<section id="contact">
    <h2>Contact Me</h2>
    <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
    </form>
    <div id="thankYouMessage" style="display: none;">
        <p>Thank you for your message!</p>
    </div>
</section>
JavaScript for Form Submission
This script displays a thank you message after form submission, preventing the form from being submitted in the traditional way.

javascript
Copy code
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    document.getElementById('thankYouMessage').style.display = 'block';
});
How to Use
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/portfolio.git
Navigate to the project directory and open index.html in your browser.

Customize the content as per your preference:

Replace the profile image at images/profile.jpg.
Update contact details in the Home and Contact sections.
You can host the website on GitHub Pages by pushing the code to your GitHub repository and setting up GitHub Pages.

File Structure
graphql
Copy code
portfolio/
│
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling
├── script.js            # JavaScript file for form handling
└── images/
    └── profile.jpg      # Profile picture
Contact
If you have any questions or suggestions, feel free to contact me:

Email: sujilmca@pg.cusat.ac.in
Phone: (+91) 8139831540
