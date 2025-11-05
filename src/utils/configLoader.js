import portfolioConfig from '../portfolio-config.json';

// Import all the image assets
import valuablegroupImg from '../assets/images/valuablegroup.jpg';
import selfLearnIcon from '../assets/svg/selfLearn.svg';
import chatImg from '../assets/images/Chat.png';
import empUiImg from '../assets/images/EmpTrackUI.png';
import ecommImg from '../assets/images/Ecomm.jpg';
import foodeUI from '../assets/images/FoodeUI.png';
import paytmImg from '../assets/images/paytm.png';

// Import SVG icons from context
import { 
  nodejs, 
  reactsvg, 
  javascript, 
  cplus, 
  mongodb, 
  mysql, 
  nextjs, 
  css, 
  systemdesign, 
  docker, 
  php, 
  html,
  backendLogo,
  frontendLogo,
  uiLogo
} from '../context.js';

// Asset mapping for dynamic imports
const imageAssets = {
  'valuablegroup.jpg': valuablegroupImg,
  'selfLearn.svg': selfLearnIcon,
  'Chat.png': chatImg,
  'EmpTrackUI.png': empUiImg,
  'Ecomm.jpg': ecommImg,
  'FoodeUI.png': foodeUI,
  'paytm.png': paytmImg
};

const iconAssets = {
  nodejs,
  reactsvg,
  javascript,
  cplus,
  mongodb,
  mysql,
  nextjs,
  css,
  systemdesign,
  docker,
  php,
  html,
  backendLogo,
  frontendLogo,
  uiLogo
};

// Calculate work experience dynamically
const calculateWorkExperience = (joiningDateStr) => {
  const joiningDate = new Date(joiningDateStr);
  const currentDate = new Date();

  let yearDiff = currentDate.getFullYear() - joiningDate.getFullYear();
  let monthDiff = currentDate.getMonth() - joiningDate.getMonth();
  let dateDiff = currentDate.getDate() - joiningDate.getDate();

  if (dateDiff < 0) {
    monthDiff -= 1;
    dateDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (monthDiff < 0) {
    yearDiff -= 1;
    monthDiff += 12;
  }

  return `${yearDiff} year(s) ${monthDiff} month(s) ${dateDiff} day(s)`;
};

// Configuration loader class
class ConfigLoader {
  constructor() {
    this.config = portfolioConfig;
  }

  // Get personal info with calculated experience
  getPersonalInfo() {
    return {
      ...this.config.personalInfo,
      experience: calculateWorkExperience(this.config.personalInfo.joiningDate)
    };
  }

  // Get about section data with resolved icons
  getAboutSection() {
    return {
      ...this.config.aboutSection,
      roles: this.config.aboutSection.roles.map(role => ({
        ...role,
        iconComponent: iconAssets[role.icon]
      }))
    };
  }

  // Get skills section with resolved icons
  getSkillsSection() {
    const skillsWithIcons = {};
    Object.keys(this.config.skillsSection.skills).forEach(skillKey => {
      const skill = this.config.skillsSection.skills[skillKey];
      skillsWithIcons[skillKey] = {
        proficiency: skill.proficiency,
        logo: iconAssets[skill.logo]
      };
    });

    return {
      title: this.config.skillsSection.title,
      skills: skillsWithIcons
    };
  }

  // Get experience section with resolved images
  getExperienceSection() {
    return {
      ...this.config.experienceSection,
      companies: this.config.experienceSection.companies.map(company => ({
        ...company,
        companyIconComponent: imageAssets[company.companyIcon]
      }))
    };
  }

  // Get projects section with resolved images
  getProjectsSection() {
    return {
      ...this.config.projectsSection,
      projects: this.config.projectsSection.projects.map(project => ({
        ...project,
        imageComponent: imageAssets[project.image]
      }))
    };
  }

  // Get contact section
  getContactSection() {
    return this.config.contactSection;
  }

  // Legacy compatibility methods
  getAboutData() {
    const personalInfo = this.getPersonalInfo();
    return {
      Name: personalInfo.name,
      Experience: personalInfo.experience,
      Recent_Education: personalInfo.recentEducation,
      College: personalInfo.college,
      Current_Designation: personalInfo.currentDesignation
    };
  }

  getCompanies() {
    const experienceSection = this.getExperienceSection();
    return experienceSection.companies.map(company => ({
      CompanyName: company.companyName,
      CompanyIcon: company.companyIconComponent,
      Date: company.date,
      Designation: company.designation,
      isTechDetailsAvailable: company.isTechDetailsAvailable,
      tech_stacks: company.techStacks
    }));
  }

  getProjects() {
    const projectsSection = this.getProjectsSection();
    return projectsSection.projects.map(project => ({
      name: project.name,
      image: project.imageComponent,
      githublink: project.githubLink,
      tools: project.tools,
      description: project.description
    }));
  }

  getContactData() {
    const personalInfo = this.getPersonalInfo();
    return {
      myEmailId: personalInfo.emailId,
      myAddress: personalInfo.address
    };
  }
}

// Export singleton instance
const configLoader = new ConfigLoader();
export default configLoader;

// Export individual data getters for backward compatibility
export const aboutData = configLoader.getAboutData();
export const companies = configLoader.getCompanies();
export const projects = configLoader.getProjects();
export const { myEmailId, myAddress } = configLoader.getContactData();