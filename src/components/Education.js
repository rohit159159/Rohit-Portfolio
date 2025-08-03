import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: 'Technocrats Institute of Technology, Bhopal',
    years: '2022 - 2026',
    degree: 'Computer Science',
    gpa: 'CGPA:7.4',
    color: '#00BFFF', // blue
  },
  {
    institution: 'Yogoda Satsanga Mahavidyalaya, Ranchi',
    years: '2020 - 2022',
    degree: 'Intermediate Education',
    gpa: 'PERCENTAGE: 78.6%',
    color: '#00FF7F', // green
  },
  {
    institution: 'Crown Public School, Ranchi',
    years: '2019 - 2020',
    degree: 'High School',
    gpa: 'PERCENTAGE: 62.6%',
    color: '#FFD700', // gold
  },
];

const Education = () => {
  return (
  
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <p className="education-subtitle">
        Currently studying B-Tech in my 7th semester at the university
      </p>
      <div className="education-box-container">
        {educationData.map((item, idx) => (
          <div className="education-box" key={idx}>
            <h3 style={{ color: item.color }}>{item.institution}</h3>
            <p>{item.years}</p>
            <p>{item.degree}</p>
            <p>{item.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
