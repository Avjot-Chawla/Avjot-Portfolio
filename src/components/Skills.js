import React from 'react';

function Skills() {
  const skills = [
    { name: 'Python', level: 'Proficient' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'C', level: 'Proficient' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Java', level: 'Proficient' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Proficient' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'SQL', level: 'Proficient' },
    { name: 'Ionic', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
  ];

  return (
    <div className="skills section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span> – <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
