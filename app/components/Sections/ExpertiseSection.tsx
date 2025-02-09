"use client";

import React from 'react';

const expertiseCategories = [
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
];

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-purple-400">EXPERTISE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCategories.map((category) => (
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
  );
};

export default ExpertiseSection;