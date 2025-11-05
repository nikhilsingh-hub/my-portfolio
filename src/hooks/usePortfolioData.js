import { useState, useEffect } from 'react';
import configLoader from '../utils/configLoader.js';

// Custom hook for portfolio data with error handling
export const usePortfolioData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const portfolioData = {
        personalInfo: configLoader.getPersonalInfo(),
        aboutSection: configLoader.getAboutSection(),
        skillsSection: configLoader.getSkillsSection(),
        experienceSection: configLoader.getExperienceSection(),
        projectsSection: configLoader.getProjectsSection(),
        contactSection: configLoader.getContactSection()
      };
      
      setData(portfolioData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

// Hook for specific section data
export const useSectionData = (sectionName) => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      let data;
      switch (sectionName) {
        case 'about':
          data = configLoader.getAboutSection();
          break;
        case 'skills':
          data = configLoader.getSkillsSection();
          break;
        case 'experience':
          data = configLoader.getExperienceSection();
          break;
        case 'projects':
          data = configLoader.getProjectsSection();
          break;
        case 'contact':
          data = configLoader.getContactSection();
          break;
        case 'personal':
          data = configLoader.getPersonalInfo();
          break;
        default:
          throw new Error(`Unknown section: ${sectionName}`);
      }
      
      setSectionData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [sectionName]);

  return { data: sectionData, loading, error };
};
