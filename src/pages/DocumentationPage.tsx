import React from 'react';
import DocumentationLayout from '../components/docs/layout/DocumentationLayout.tsx';
import { useSEO } from '../hooks/useSEO';

const DocumentationPage: React.FC = () => {
  // Apply documentation-specific SEO
  useSEO({
    title: 'Documentation - Brolostack Framework',
    description: 'Complete documentation for Brolostack local-first full-stack framework. Learn how to build powerful applications with zero server costs.',
    keywords: 'brolostack documentation, local-first framework, browser storage, zero server costs, getting started, API reference, guides, tutorials'
  });

  return <DocumentationLayout />;
};

export default DocumentationPage;