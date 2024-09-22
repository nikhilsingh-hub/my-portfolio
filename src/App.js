import React, { useCallback, useEffect, useRef, useState } from 'react'
import { leetcode, linkedin, github, insta, Header, About, Skills, Projects, Contact } from './context.js'
import AnimatedCursor from "react-animated-cursor"
import Experience from './tabs/Experience.js'
import { Element } from 'react-scroll';


function App() {

  const myEmailId = 'nikhilsingh35911298@gmail.com'
  const myAddress = 'Noida, UttarPradesh, 844101'


  const siteLinks = [
    { link: 'https://github.com/nikhilsingh-hub', icon: github, alt: 'github' },
    { link: 'https://www.linkedin.com/in/nikhil-singh-nituk1298/', icon: linkedin, alt: 'linkedin' },
    { link: 'instagram.com', icon: insta, alt: 'instagram' },
    { link: 'https://leetcode.com/u/niikhil12/', icon: leetcode, alt: 'leetcode' }]

  const calWorkEx = useCallback(() => {
    let joiningDate = new Date(2023, 4, 22); // 22 may, 2023
    let currentDate = new Date()

    let yearDiff = currentDate.getFullYear() - joiningDate.getFullYear()
    let monthDiff = currentDate.getMonth() - joiningDate.getMonth()
    let dateDiff = currentDate.getDate() - joiningDate.getDate()

    if (dateDiff < 0) {
      monthDiff -= 1;
      dateDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12;
    }

    return `${yearDiff} year(s) ${monthDiff} month(s) ${dateDiff} day(s)`;
  }, [])

  let about = {
    Name: "Nikhil Singh",
    Experience: calWorkEx(),
    Education: 'NIT Uttarakhand',
    Current_Designation: 'Fullstack Developer',
    Hobbies: 'Reading books, Playing Sports, Upskilling',
  }

  return (
    <>

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <Header siteLinks={siteLinks} />
      <Element name="about">
        <About aboutData={about} />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contactme">
        <Contact siteLinks={siteLinks} myEmailId={myEmailId} myAddress={myAddress} />
      </Element>
    </>
  );
}

export default App;
