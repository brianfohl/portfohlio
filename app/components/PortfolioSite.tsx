"use client";

import React, { useState } from 'react';

const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navigation = [
    { id: 'home', label: 'home' },
    { id: 'expertise', label: 'expertise' },
    { id: 'work', label: 'work' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 z-50 bg-black bg-opacity-95">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl font-mono">Brian.Fohl_</div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4 mr-8">
              <a 
                href="https://github.com/brianfohl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/brianfohl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-white'
                  } hover:text-emerald-400 transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section 
        id="home" 
        className="h-screen flex items-center justify-center relative bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
        <div className="relative text-center p-8 rounded mt-[10%]">
          <h1 className="text-9xl font-bold mb-4 text-white">
            BRIAN FOHL
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg text-white">
            DevOps Leader & Mentor
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-purple-400">EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Leadership',
                skills: ['Agile', 'Scrum', 'Story Estimation', 'Backlog Grooming', 'Capacity Planning', 'Team Leadership and Mentoring', 'Cross Team Collaboration', 'Change Management', 'JIRA', 'Confluence']
              },
              {
                title: 'Cloud & Infrastructure',
                skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Kustomize', 'VMware ESX']
              },
              {
                title: 'CI/CD Systems',
                skills: ['Jenkins', 'GitHub Actions', 'GitLab', 'Bitbucket']
              },
              {
                title: 'Programming & Scripting',
                skills: ['Python', 'Java', 'Bash', 'Groovy', 'Go', 'JavaScript', 'Node', 'Ruby']
              },
              {
                title: 'Databases',
                skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle']
              },
              {
                title: 'Monitoring & Security',
                skills: ['Prometheus', 'Grafana', 'SonarQube', 'Fortify']
              }
            ].map((category) => (
              <div key={category.title} className="p-6 bg-black rounded-lg hover:bg-emerald-900/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-white">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-purple-400">WORK EXPERIENCE</h2>
          <div className="space-y-12">
            {[
              {
                title: 'Senior DevSecOps Engineer',
                company: 'Revacomm / Intellibridge',
                period: 'OCT 2020 - Present',
                role: 'Pipelines Subject Matter Expert - Centers for Medicare & Medicaid Services, DHHS',
                achievements: [
                  'Led CI/CD pipeline improvements using Jenkins and Kubernetes, significantly reducing build/deployment times',
                  'Guided migration plans from GitLab CI to GitHub & Jenkins',
                  'Increased tool adoption by 50% through comprehensive documentation and training',
                  'Managed infrastructure deployments using Kubernetes, AWS, and Terraform, reducing manual intervention by 40%',
                  'Successfully obtained Federal Public Trust clearance'
                ]
              },
              {
                title: 'Lead DevSecOps Engineer',
                company: 'Department of Defense, Platform One',
                period: 'OCT 2020 - OCT 2023',
                achievements: [
                  'Orchestrated CI/CD pipelines with GitLab and Docker for mission-critical applications',
                  'Led DevSecOps team as Scrum Master, achieving 20% increase in project delivery speed',
                  'Mentored junior DevSecOps engineers and provided strategic technical guidance',
                  'Implemented security practices reducing vulnerabilities by 40%',
                  'Successfully obtained Secret clearance from the DOD'
                ]
              },
              {
                title: 'DevOps Engineer',
                company: 'Williams-Sonoma',
                period: 'APR 2019-SEP 2019',
                achievements: [
                  'Innovated CI tools using Jenkins, Python, Groovy, Gradle, and Docker',
                  'Automated deployment processes with Terraform and Ansible, reducing manual tasks by 35%',
                  'Enhanced Jenkins environments increasing system reliability by 30%'
                ]
              }
            ].map((experience) => (
              <div key={experience.title} className="p-6 bg-black rounded-lg hover:bg-emerald-900/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">{experience.title}</h3>
                <p className="text-white">{experience.company}</p>
                <p className="text-white">{experience.period}</p>
                <ul className="mt-4 space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-400">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">GET IN TOUCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:brian.fohl@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    brian.fohl@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:916-233-9398" className="text-gray-300 hover:text-white transition-colors">
                    916.233.9398
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">
                    California
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Professional Profiles</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brianfohl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/brianfohl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Looking to collaborate?</h3>
              <p className="text-gray-300 mb-4">
                I'm always interested in new opportunities and projects. Feel free to reach out if you'd like to discuss:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>DevOps consulting and implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Team leadership and mentoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>CI/CD pipeline optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Cloud infrastructure and security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSite;
