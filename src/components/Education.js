import React from 'react';

function Education() {
  return (
    <div className="education section" style={{textAlign: 'justify'}}>
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p><strong>Institution:</strong> SRM Institute of Science and Technology</p>
        <p><strong>Duration:</strong> 2022 - 2026</p>
        <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
        <p><strong>CGPA:</strong> 9.36</p>
      </div>
      <div className="education-item">
        <h3>Class XII</h3>
        <p><strong>Institution:</strong> Reliance Foundation School, Kopar Khairane</p>
        <p><strong>Year:</strong> 2022</p>
        <p><strong>Location:</strong> Navi Mumbai, Maharashtra</p>
        <p><strong>Percentage:</strong> 100%</p>
      </div>
      <div className="education-item">
        <h3>Class X</h3>
        <p><strong>Institution:</strong> Ryan International School, Sanpada</p>
        <p><strong>Year:</strong> 2020</p>
        <p><strong>Location:</strong> Navi Mumbai, Maharashtra</p>
        <p><strong>Percentage:</strong> 100%</p>
      </div>
    </div>
  );
}

export default Education;
