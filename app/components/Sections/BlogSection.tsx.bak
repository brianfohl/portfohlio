"use client";

import React, { useState } from 'react';
import { getAssetPath } from '../../utils/assetPath';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Enterprise Deployments',
    excerpt: 'Optimizing Kubernetes for enterprise applications: security, scalability, and reliability considerations.',
    date: 'February 15, 2025',
    readTime: '8 min read',
    category: 'Kubernetes',
    tags: ['Kubernetes', 'DevOps', 'Security', 'Enterprise'],
    content: `
# Kubernetes Best Practices for Enterprise Deployments

Enterprise Kubernetes deployments require careful consideration of security, scalability, and reliability. This article covers best practices I've learned from implementing Kubernetes in large-scale enterprise environments.

## 1. Security First Approach

Security cannot be an afterthought in enterprise Kubernetes deployments. Implement these practices from day one:

- **Network Policies**: Restrict pod-to-pod communication using network policies
- **RBAC Configuration**: Implement least privilege access control
- **Pod Security Policies**: Enforce security standards at the pod level
- **Secret Management**: Use dedicated solutions like HashiCorp Vault
- **Image Scanning**: Implement automated scanning in CI/CD pipelines

## 2. Resource Management

Proper resource allocation ensures stability:

- **Resource Quotas**: Set namespace-level resource constraints
- **Limit Ranges**: Define default limits for containers
- **HPA Configuration**: Implement horizontal pod autoscaling
- **Node Affinity**: Optimize pod placement across nodes

## 3. Monitoring and Observability

Enterprise deployments require comprehensive visibility:

- **Prometheus & Grafana**: Implement metrics collection and visualization
- **Distributed Tracing**: Use Jaeger or Zipkin for request tracing
- **Centralized Logging**: Deploy ELK or similar stack
- **Alerting**: Configure proactive alerting for critical issues

## 4. Disaster Recovery

Plan for failures before they happen:

- **Regular Backups**: Implement Velero for cluster backups
- **Multi-Region Strategy**: Deploy across availability zones
- **Chaos Engineering**: Test resilience with chaos experiments

## 5. GitOps Workflow

Manage configurations declaratively:

- **Infrastructure as Code**: Use Terraform for infrastructure
- **Application Manifests**: Manage with Helm and Kustomize
- **CI/CD Integration**: Automate deployments via GitOps principles

By following these practices, organizations can build resilient, secure, and scalable Kubernetes environments for mission-critical applications.
    `,
    image: '/blog-kubernetes.svg'
  },
  {
    id: 'cicd-security',
    title: 'Securing Your CI/CD Pipeline: A Comprehensive Guide',
    excerpt: 'Implementing security measures throughout your CI/CD pipeline to prevent vulnerabilities and ensure compliance.',
    date: 'January 28, 2025',
    readTime: '10 min read',
    category: 'CI/CD',
    tags: ['CI/CD', 'Security', 'DevOps', 'Jenkins'],
    content: `
# Securing Your CI/CD Pipeline: A Comprehensive Guide

Modern CI/CD pipelines are powerful accelerators for software delivery, but they can also introduce security vulnerabilities if not properly secured. This article outlines strategies for implementing security at every stage of your pipeline.

## 1. Source Code Security

The security journey begins at the source:

- **Code Scanning**: Implement static analysis with tools like SonarQube
- **Dependency Scanning**: Check for vulnerable dependencies with tools like OWASP Dependency-Check
- **Secrets Detection**: Use tools like GitGuardian to prevent committing secrets
- **Branch Protection**: Enforce code reviews and prevent direct commits to main branches

## 2. Build Process Security

Securing the build environment is critical:

- **Isolated Build Environments**: Use ephemeral, containerized build agents
- **Minimal Build Permissions**: Apply least privilege principle
- **Reproducible Builds**: Ensure deterministic build outputs
- **Build Artifact Signing**: Implement cryptographic signing of artifacts

## 3. Deployment Security

Protect the deployment process:

- **Immutable Infrastructure**: Use immutable deployments
- **Canary Deployments**: Gradually roll out changes
- **Infrastructure as Code Scanning**: Scan IaC for security issues
- **Environment Segregation**: Strictly separate development, staging, and production

## 4. Runtime Security

Monitor and protect running applications:

- **Runtime Vulnerability Scanning**: Continuous scanning in production
- **Behavioral Analysis**: Detect anomalous behavior
- **Automatedcd Rollbacks**: Quick recovery from problematic deployments

## 5. Compliance and Auditing

Maintain visibility and compliance:

- **Pipeline Auditing**: Log all pipeline events
- **Approval Workflows**: Implement manual approvals for sensitive environments
- **Compliance Checks**: Automate compliance verification
- **Evidence Collection**: Gather evidence for audit requirements

Implementing these security measures creates a defense-in-depth approach that protects your CI/CD pipeline and the applications it delivers.
    `,
    image: '/blog-cicd.svg'
  },
  {
    id: 'terraform-at-scale',
    title: 'Managing Terraform at Enterprise Scale',
    excerpt: 'Strategies for implementing Terraform in large organizations: module structure, state management, and collaboration workflows.',
    date: 'December 18, 2024',
    readTime: '12 min read',
    category: 'Infrastructure as Code',
    tags: ['Terraform', 'IaC', 'Cloud', 'DevOps'],
    content: `
# Managing Terraform at Enterprise Scale

Terraform excels at managing infrastructure as code, but scaling Terraform for enterprise use presents unique challenges. This article shares strategies for effectively managing Terraform in large organizations.

## 1. Module Organization

Structure your Terraform modules for reusability and maintainability:

- **Module Layers**: Implement resource, component, and stack layers
- **Versioning Strategy**: Semantic versioning for modules
- **Documentation Standards**: Comprehensive README files and examples
- **Module Registry**: Internal registry for discoverability

## 2. State Management

Enterprise-grade state management is crucial:

- **Remote State Storage**: Use S3 with DynamoDB locking
- **State File Segmentation**: Split state by environment and component
- **Access Control**: Restrict state access with IAM policies
- **Backup Strategy**: Regular state backups and versioning

## 3. Collaboration Workflows

Facilitate team collaboration:

- **GitOps Approach**: Pull requests for infrastructure changes
- **CI/CD Integration**: Automated testing and deployment
- **Change Management**: Approval processes for production changes
- **Workspace Strategy**: Consistent workspace naming conventions

## 4. Governance and Compliance

Enforce standards across the organization:

- **Policy as Code**: Implement Sentinel policies
- **Cost Management**: Budget constraints and tagging policies
- **Drift Detection**: Regular checking for unauthorized changes
- **Compliance Validation**: Automated compliance checks

## 5. Scaling Techniques

Optimize for large-scale deployments:

- **Parallel Execution**: Utilize terraform -parallelism
- **Dependency Management**: Minimize inter-component dependencies
- **Resource Targeting**: Selective resource operations
- **Performance Tuning**: Optimize provider configurations

By implementing these strategies, organizations can effectively scale Terraform across multiple teams, projects, and environments while maintaining security, compliance, and operational efficiency.
    `,
    image: '/blog-terraform.svg'
  }
];

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">TECHNICAL BLOG</h2>
        
        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm ${
              selectedCategory === 'all' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Posts
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectedCategory === category 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div 
              key={post.id}
              className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 transition-colors cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-40 bg-gray-800 flex items-center justify-center">
                {post.image ? (
                  <img 
                    src={getAssetPath(post.image)} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-600 text-lg font-bold">[Post Image]</div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2 text-xs">
                  <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                  <span className="text-emerald-400 text-sm font-medium">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No posts available in this category.
          </div>
        )}
        
        {/* Blog post modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" role="dialog" aria-modal="true">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                <div>
                  <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-xs">
                    {selectedPost.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{selectedPost.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {selectedPost.image && (
                  <div className="h-64 bg-gray-800">
                    <img 
                      src={getAssetPath(selectedPost.image)} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6 max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: markdownToHtml(selectedPost.content) }} />
                </div>
                
                <div className="p-6 border-t border-gray-800">
                  <h4 className="font-bold text-white mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Enhanced markdown to HTML converter
function markdownToHtml(markdown: string): string {
  // This is an improved implementation
  let html = markdown;

  // Process code blocks first to avoid conflicts
  html = html.replace(/```([\s\S]*?)```/gm, '<pre class="bg-gray-800 p-4 rounded overflow-x-auto"><code>$1</code></pre>');
  
  // Headers
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-6 mb-4">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-5 mb-3">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>');
  
  // Bold and Italic
  html = html.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
  // Lists - handle nested lists better
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  
  // Convert consecutive list items into a proper list
  // Using a pattern that works with ES2017 (no 's' flag needed)
  const listSections = html.split(/\n\n+/);
  const wrappedListSections = listSections.map(section => {
    // If this section contains list items
    if (section.includes('<li>') && !section.includes('<ul>')) {
      return `<ul class="list-disc pl-6 my-4">${section}</ul>`;
    }
    return section;
  });
  html = wrappedListSections.join('\n\n');
  
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2" class="text-emerald-400 hover:underline">$1</a>');
  
  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="my-6 border-gray-700">');
  
  // Paragraphs - handle paragraphs better
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs.map(paragraph => {
    // Skip if already wrapped in HTML tags
    if (paragraph.trim().startsWith('<') && !paragraph.trim().startsWith('<li>')) {
      return paragraph;
    }
    return `<p class="my-3">${paragraph}</p>`;
  }).join('\n\n');
  
  return html;
}

export default BlogSection;