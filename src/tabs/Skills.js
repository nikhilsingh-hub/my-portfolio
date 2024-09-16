import React, { forwardRef } from 'react';
import SkillComponent from '../components/SkillComponent';
import '../css/skills.css'
import { nodejs, reactsvg, javascript, cplus, mongodb, mysql, nextjs, css, systemdesign, docker, php, html } from '../context.js';

const Skills= forwardRef(() => {
  const skills = {
    nodejs: { prof: 85, logo: nodejs },
    react: { prof: 85, logo: reactsvg },
    javascript: { prof: 90, logo: javascript },
    cplus: { prof: 85, logo: cplus },
    mongodb: { prof: 70, logo: mongodb },
    mysql: { prof: 85, logo: mysql },
    nextjs: { prof: 50, logo: nextjs },
    css: { prof: 70, logo: css },
    systemdesign: { prof: 70, logo: systemdesign },
    docker: { prof: 80, logo: docker },
    php: { prof: 80, logo: php },
    html: { prof: 90, logo: html },
  };

  return (
    <div className="flex justify-center relative h-screen  ">
      <h2 className='absolute -top-4 text-white bg-blue-400 p-2 rounded-lg'>SKILLS</h2>
      <div className="overflow-hidden w-[90%] h-fit pt-16 pb-16 bg-black flex items-center border border-green-500 border-none border-t-2 border-green-400">
        <div className={`flex space-x-10 w-fit animate-scroll`}>
          {Object.keys(skills).map((skill) => (
            <SkillComponent
              key={skill}
              skillName={skill.toUpperCase()}
              proficiency={skills[skill].prof}
              icon={skills[skill].logo}
            />
          ))}

          {Object.keys(skills).map(skill => (
            <SkillComponent
              key={skill + '-duplicate'}
              skillName={skill}
              proficiency={skills[skill].prof}
              icon={skills[skill].logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
})


export default Skills;
