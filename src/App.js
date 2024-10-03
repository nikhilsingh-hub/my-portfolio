import React, { useCallback, useEffect, useRef, useState } from 'react'
import { leetcode, linkedin, github, insta, Header, BasicInfo, Skills, About, Projects, Contact, Experience, Footer } from './context.js'
import AnimatedCursor from "react-animated-cursor"
import about from './data/aboutData.js'
import {myEmailId, myAddress} from './data/contactData.js'


function App() {

  const siteLinks = [
    { link: 'https://github.com/nikhilsingh-hub', icon: github, alt: 'github' },
    { link: 'https://www.linkedin.com/in/nikhil-singh-nituk1298/', icon: linkedin, alt: 'linkedin' },
    { link: 'instagram.com', icon: insta, alt: 'instagram' },
    { link: 'https://leetcode.com/u/niikhil12/', icon: leetcode, alt: 'leetcode' }]



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
      <BasicInfo aboutData={about} />
      <About aboutData={about} />
      <Skills />
      <Experience />
      <Projects />
      <Contact siteLinks={siteLinks} myEmailId={myEmailId} myAddress={myAddress} />
      <Footer />
    </>
  );
}

export default App;
