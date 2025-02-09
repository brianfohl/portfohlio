"use client";

import React from 'react';

const workExperience = [
  {
    title: 'Pipeline Subject Matter Expert',
    company: 'Centers for Medicare and Medicaid Services (via Revacomm / Intellibridge)',
    period: 'OCT 2023 - Present',
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
    company: 'Department of Defense, Platform One (via Revacomm / Intellibridge)',
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
];

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-purple-400">WORK EXPERIENCE</h2>
        <div className="space-y-12">
          {workExperience.map((experience) => (
            <div key={experience.title} className="p-6 bg-black rounded-lg hover:bg-emerald-900/30 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-emerald-400">{experience.title}</h3>
              <p className="text-gray-400 mb-2">{experience.company}</p>
              {experience.period && <p className="text-sm text-gray-500 mb-4">{experience.period}</p>}
              <ul className="list-disc pl-6 space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center text-gray-400 italic">
            Additional experience available upon request
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;