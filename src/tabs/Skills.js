import React, { forwardRef } from 'react';
import SkillComponent from '../components/SkillComponent';
import '../css/skills.css'
import configLoader from '../utils/configLoader.js';

const Skills = forwardRef(() => {
  const skillsSection = configLoader.getSkillsSection();
  const skills = skillsSection.skills;

  return (
    <section id="skills" className="p-5 md:p-10 overflow-x-hidden bg-[#212121] rounded-lg mx-4 md:mx-14 my-10 z-10">
  <div className="flex flex-col items-center justify-center gap-4 h-fit">
    <div className='flex flex-col md:flex-row items-center gap-4'>
      <div className='line'></div>
      <h2 className="tab-title">{skillsSection.title}</h2>
      <div className='line'></div>
    </div>

    <div className="overflow-hidden w-[90%] h-fit pt-8 md:pt-16 pb-8 md:pb-16 bg-[#0D0D0D] rounded-lg flex items-center">
      <div className={`flex space-x-6 md:space-x-10 w-fit animate-scroll`}>
        {Object.keys(skills).map((skill) => (
          <SkillComponent
            key={skill}
            skillName={skill.toUpperCase()}
            proficiency={skills[skill].proficiency}
            icon={skills[skill].logo}
          />
        ))}

        {Object.keys(skills).map(skill => (
          <SkillComponent
            key={skill + '-duplicate'}
            skillName={skill}
            proficiency={skills[skill].proficiency}
            icon={skills[skill].logo}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
})


export default Skills;
