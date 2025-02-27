import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogSection from '../../../components/Sections/BlogSection';

describe('BlogSection', () => {
  it('renders correctly', () => {
    render(<BlogSection />);
    
    // Check if the section title is present
    expect(screen.getByText('TECHNICAL BLOG')).toBeInTheDocument();
    
    // Check if the "All Posts" filter button is present
    expect(screen.getByText('All Posts')).toBeInTheDocument();
    
    // Check if blog posts are rendered
    expect(screen.getByText('Kubernetes Best Practices for Enterprise Deployments')).toBeInTheDocument();
    expect(screen.getByText('Securing Your CI/CD Pipeline: A Comprehensive Guide')).toBeInTheDocument();
    expect(screen.getByText('Managing Terraform at Enterprise Scale')).toBeInTheDocument();
  });

  it('filters posts by category', () => {
    render(<BlogSection />);
    
    // Initially all posts are shown
    expect(screen.getByText('Kubernetes Best Practices for Enterprise Deployments')).toBeInTheDocument();
    expect(screen.getByText('Securing Your CI/CD Pipeline: A Comprehensive Guide')).toBeInTheDocument();
    expect(screen.getByText('Managing Terraform at Enterprise Scale')).toBeInTheDocument();
    
    // Filter by Kubernetes category
    // Use getAllByText and select the button (it's the first one with this text)
    const kubernetesButtons = screen.getAllByText('Kubernetes');
    fireEvent.click(kubernetesButtons[0]);
    
    // Now only Kubernetes post should be visible
    expect(screen.getByText('Kubernetes Best Practices for Enterprise Deployments')).toBeInTheDocument();
    expect(screen.queryByText('Securing Your CI/CD Pipeline: A Comprehensive Guide')).not.toBeInTheDocument();
    expect(screen.queryByText('Managing Terraform at Enterprise Scale')).not.toBeInTheDocument();
    
    // Switch back to all posts
    fireEvent.click(screen.getByText('All Posts'));
    
    // All posts should be visible again
    expect(screen.getByText('Kubernetes Best Practices for Enterprise Deployments')).toBeInTheDocument();
    expect(screen.getByText('Securing Your CI/CD Pipeline: A Comprehensive Guide')).toBeInTheDocument();
    expect(screen.getByText('Managing Terraform at Enterprise Scale')).toBeInTheDocument();
  });

  it('opens and closes blog post modal', () => {
    render(<BlogSection />);
    
    // Initially the modal is not visible (dialog role shouldn't be present)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    
    // Click on a blog post to open the modal (use the first card)
    const cards = screen.getAllByText('Kubernetes Best Practices for Enterprise Deployments');
    fireEvent.click(cards[0]);
    
    // Now the modal should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // And Tags should be visible within it
    expect(screen.getByText('Tags')).toBeInTheDocument();
    
    // Click the close button
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    
    // Modal should be closed now
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});