import React from 'react';

function Projects() {
  return (
    <div className="projects section" style={{textAlign: 'justify'}}>
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Typing Master Application</h3>
        <p><strong>Duration:</strong> Aug 2023 - Dec 2023</p>
        <p>A JavaFX-based application integrated with SQLite offering typing practice sessions, performance metrics, and personalized tracking through user login and signup.</p>
      </div>
      <div className="project-item">
        <h3>Simulation of Modern Traffic Control System</h3>
        <p><strong>Duration:</strong> Aug 2023 - Dec 2023</p>
        <p>A Python-based project using pygame that dynamically controls traffic signals at a 4-way intersection based on vehicle volume, optimizing flow through adaptive signal timing.</p>
      </div>
      <div className="project-item">
        <h3>Casino Number Guessing Game</h3>
        <p><strong>Duration:</strong> Feb 2023 - April 2023</p>
        <p>A C++ project using loops, conditionals, and random number generation to simulate a casino environment where players guess numbers.</p>
      </div>
      <div className="project-item">
        <h3>Blood Donation Management Service</h3>
        <p><strong>Duration:</strong> Feb 2024 - April 2024</p>
        <p>A web-based platform developed using HTML, CSS, PHP, and JavaScript on XAMPP for real-time stock monitoring and alerts, enhancing blood management and community engagement.</p>
      </div>
      <div className="project-item">
        <h3>Cloth Store Management System</h3>
        <p><strong>Duration:</strong> Jun 2022 - Dec 2022</p>
        <p>A data management system for clothing stores using Python’s Tkinter and MySQL, enabling efficient inventory, sales, and defect management.</p>
      </div>
      <div className="project-item">
        <h3>BillSplitz - Expense Sharing Mobile App</h3>
        <p><strong>Highlights:</strong></p>
        <ul>
          <li>Developed new features including Delete &amp; Edit Expense, a Reminder System, and dedicated pages for Privacy Policy and Terms of Service.</li>
          <li>Fixed nearly 30 bugs, enhancing app stability and user experience.</li>
          <li>Utilized Angular, TypeScript, JavaScript, and Ionic in an Agile team environment.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
