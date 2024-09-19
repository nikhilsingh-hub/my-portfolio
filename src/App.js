import React, { useCallback, useEffect, useRef, useState } from 'react'
import {leetcode, linkedin, github, insta, Header, About, Skills, Projects} from './context.js'
import AnimatedCursor from "react-animated-cursor"
import Experience from './tabs/Experience.js'


function App() {

  const siteLinks = [
    {link:'https://github.com/nikhilsingh-hub' , icon: github, alt:'github'},
    {link: 'https://www.linkedin.com/in/nikhil-singh-nituk1298/', icon:linkedin, alt:'linkedin'},
    {link: 'instagram.com', icon:insta, alt:'instagram'},
    {link: 'https://leetcode.com/u/niikhil12/', icon:leetcode, alt:'leetcode'}]

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
    Current_Designation:'Fullstack Developer',
    Hobbies:'Reading books, Playing Sports, Upskilling',
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

      <Header siteLinks={siteLinks}/>
      <About aboutData = {about}/>
      <Skills/>
      <Experience/>
      <Projects/>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic dolorum quibusdam unde soluta quasi eius dolorem, ad sed, ratione enim eaque impedit eligendi, quisquam natus voluptatum recusandae labore nisi!
      Reiciendis sunt perferendis ullam fugit molestias corrupti dolores iure, quisquam explicabo, deserunt aperiam eius architecto laudantium voluptate dolor, magnam asperiores non similique! Similique omnis labore consequatur deserunt necessitatibus, consequuntur quisquam.
      Necessitatibus ipsum possimus, impedit assumenda velit inventore quisquam ullam voluptatibus repudiandae natus, rem dignissimos architecto provident alias similique nostrum. Culpa optio corporis maiores cupiditate, et ipsam vero voluptate facilis perspiciatis?
      Delectus, at! Laboriosam, optio, delectus sint dolorum amet voluptatum molestias sapiente vel suscipit in assumenda, exercitationem nemo cum laudantium? Nobis libero voluptas recusandae repudiandae enim similique eaque non est ut!
      Laborum quasi doloribus eaque asperiores molestiae nesciunt dicta neque molestias dolor? Et facilis labore sapiente voluptatum similique autem molestias quam perferendis error unde. Ipsam soluta nemo suscipit voluptas aspernatur ducimus?
      Ipsa deleniti asperiores numquam expedita blanditiis voluptatem debitis, provident exercitationem aliquid quas beatae eum rerum harum commodi excepturi hic sequi optio voluptates obcaecati fuga praesentium rem? Quia deleniti quos eaque!
      Maiores dolor minus facere repellendus iure nostrum? Vitae omnis quibusdam fugiat cum quae nostrum quasi mollitia doloribus, odit, beatae maiores ipsam laboriosam saepe, illum harum sapiente molestias recusandae esse dolores.
      Provident minima dolor doloribus, eius similique reiciendis quo corrupti quas sint earum veritatis porro amet alias quis nemo veniam. Nam omnis ipsam itaque dicta iure nostrum, tempora sit harum. Eveniet!
      Nisi, est inventore. Neque mollitia dolor, voluptatum vitae inventore suscipit magnam officiis qui ad obcaecati ut alias voluptate maxime excepturi impedit optio fuga asperiores unde velit nam doloribus. Recusandae, nobis.
      Nam voluptas illum deserunt culpa possimus, expedita facilis illo aut obcaecati quasi excepturi vitae mollitia eligendi modi corporis fugiat dolor ea sunt temporibus vel veritatis dolore? Beatae asperiores reprehenderit officia.</div>
    </>
  );
}

export default App;
