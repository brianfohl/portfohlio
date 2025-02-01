"use client";

import React, { useState } from 'react';

const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId: string) => {
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
                'Led the initiative to improve CI/CD pipelines using Jenkins and Kubernetes, resulting in a significant reduction in build/deployment times and a measurable increase in release reliability.',
                'Guided the development and prototyping of migration plans from GitLab CI to GitHub & Jenkins, strategically enhancing CI/CD efficiency and reliability.',
                'Championed the adoption of new CI/CD tools and methodologies by creating comprehensive documentation and delivering training sessions to application teams; increased tool adoption by 50% and reduced onboarding time for new team members by 20%.',
                'Managed and automated infrastructure deployments and upgrades using Kubernetes, AWS, and Terraform, optimizing cloud resource utilization, maintaining high availability for critical services, and reducing manual intervention by 40%.',
                'Collaborated with security teams to ensure CI/CD pipelines adhered to Federal regulations and security best practices, strengthening the overall security posture.',
                'Leveraged software development expertise to create custom tools and automate scripting, significantly improving the efficiency of DevOps workflows.',
                'Provided expert-level support and troubleshooting for CI/CD pipeline issues, ensuring minimal downtime and rapid resolution of problems.',
                'Successfully obtained Federal Public Trust clearance in 10/2023 which is valid for 5 years.'
              ]
            },
            {
              title: 'Lead DevSecOps Engineer',
              company: 'Department of Defense, Platform One',
              period: 'OCT 2020 - OCT 2023',
              achievements: [
                'Orchestrated the establishment of robust CI/CD pipelines with GitLab and Docker, automating infrastructure for mission-critical applications.',
                'Guided the DevSecOps team as Scrum Master, utilizing Agile methodologies with GitLab and JIRA to orchestrate cross-functional team dynamics, enhance sprint planning, and achieve a 20% increase in project delivery speed.',
                'Led solution design and mentored junior DevSecOps engineers, significantly enhancing their soft & technical skills and contributing to overall project success.',
                'Provided one-on-one mentorship, fostering career development and building strong internal technical capabilities.',
                'Pioneered the automation of infrastructure provisioning and configuration management using Terraform and Kubernetes, decreasing manual tasks and errors by 35%.',
                'Utilized AWS to manage and provision scalable and secure infrastructure, supporting the deployment and maintenance of mission-critical applications.',
                'Implemented comprehensive security practices within the CI/CD pipelines, using Kubernetes and Sonarqube to ensure code quality and compliance, reducing vulnerabilities by 40%.',
                'Facilitated collaboration between security and development teams to implement compliant CI/CD solutions, improving overall pipeline security.',
                'Served as a key technical decision-maker for the adoption of new technologies and methodologies, driving innovation and improving the efficiency of the team.',
                'Successfully obtained Secret clearance from the DOD.'
              ]
            },
            {
              title: 'Java Developer',
              company: 'State of Virginia',
              period: 'NOV 2019 – JUL 2020',
              achievements: [
                'Engineered a tailored Appeal Management system for the Department of Medicare Services using Java, J2EE, JavaScript, jQuery, and SQL, streamlining operational workflows and reducing processing time by 25%.',
                'Fostered strong client relations, providing comprehensive technical training and documentation,',
                'Conducted system analysis and debugging to resolve issues and improve performance, leading to enhanced system reliability and user satisfaction.',
                'Guided collaboration sessions with cross-functional teams to define requirements, ensuring alignment with stakeholder needs and enhancing the effectiveness of new features.'
              ]
            },
            {
              title: 'DevOps Engineer',
              company: 'Williams-Sonoma, Rocklin CA',
              period: 'APR 2019-SEP 2019',
              achievements: [
                'Innovated CI tools and methodologies using Jenkins, Python, Groovy, Gradle, and Docker, yielding significant time efficiency and cost reduction for Development and QA cohorts.',
                'Automated deployment processes and configuration management with Terraform and Ansible, reducing manual tasks by 35% and ensuring consistent deployment environments.',
                'Consolidated and enhanced Jenkins environments, fortifying system reliability through advanced disaster recovery solutions with Kubernetes, Ansible, Sonar, GitHub, and Linux, increasing system reliability by 30%.'
              ]
            },
            {
              title: 'Principal Web Developer',
              company: 'Flash Car Rental, Sacramento CA',
              period: 'NOV 2017 – JAN 2018',
              achievements: [
                'Designed and implemented a new website for the business, with email newsletters, customer testimonials, with tuned search engine optimization (resulted in #1 placement on Google), using HTML, PHP, JavaScript, WordPress, Linux, Google AdWords, SEO.'
              ]
            },
            {
              title: 'Senior Release Engineer',
              company: 'Google, Mountain View CA',
              period: 'SEP 2016 – NOV 2016',
              achievements: [
                'Automated the production release process and CI tools for orbital imaging satellites'
              ]
            }
            ].map((experience) => (
              <div key={experience.title} className="p-6 bg-black rounded-lg hover:bg-emerald-900/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">{experience.title}</h3>
                <p className="text-gray-400 mb-2">{experience.company}</p>
                {experience.period && <p className="text-sm text-gray-500 mb-4">{experience.period}</p>}
                {experience.role && <p className="text-gray-300 mb-4 italic">{experience.role}</p>}
                <ul className="list-disc pl-6 space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300">{achievement}</li>
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
                I am always interested in new opportunities and projects. Feel free to reach out if you would like to discuss:
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
