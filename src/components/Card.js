// import React, {useEffect, useRef, useState } from 'react'
// import github from '../assets/github.svg'

// function Card() {

//   return (
//     <div className='w-[45%] border-2 border-black rounded-lg sticky top-24'>
//       <div className='flex items-center justify-between border-b-2 border-black p-3'>
//         <img src={github} className='h-4 w-4 float-left' alt="github_link" />
//         <h2 className='flex-grow text-center'>My Project</h2>
//       </div>
//       <div className='animate-text-from-left p-5'>
//         {
//            `const project={
//                 name:'Travel Agency App',
//                 tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'NestJS', 'TypeScript', 'MySQL', 'AWS S3', 'Sun-Editor', 'Gmail Passkey],
//                 myRole:Full Stack Developer,
//                 Description: I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.,
//                 };`
//         }
//       </div>
//     </div>
//   )
// }


// export default Card
import React, { useEffect, useRef, useState } from 'react';

const Card = () => {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visible when the card enters the viewport
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card animate-text-from-left ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="text-3xl font-bold">xxxxx</h2>
      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam perferendis non sunt veritatis quia, cum architecto molestiae dolorum culpa quasi excepturi quae aliquam, aliquid ipsa dicta provident natus mollitia?
      Voluptates enim veritatis architecto assumenda corporis possimus iusto incidunt rem eius quae beatae blanditiis animi aliquam, maxime necessitatibus labore accusamus? Modi molestiae unde tempore nesciunt quas ratione dignissimos esse odit.
      Odio sunt commodi quos asperiores non totam vero vitae. Laudantium et voluptate asperiores unde. Aut assumenda nostrum, eligendi voluptatem tenetur hic eius sint ad dolores quas dignissimos minima dolore totam!
      Expedita hic, in sunt vero totam beatae deleniti eum minima modi fugiat sit unde. Obcaecati quibusdam mollitia quaerat officia beatae quidem dolorum rerum minima veniam dolore delectus quo, consectetur nihil!
      Similique, asperiores porro delectus, harum officia amet corporis illum qui eaque sapiente, maiores ipsa reiciendis officiis eius expedita debitis. Iusto nesciunt ea itaque quae aut eaque alias eos esse consectetur!
      Mollitia iusto voluptatum, eaque repudiandae neque cumque id nulla dicta velit consequuntur in sunt similique quibusdam laboriosam dignissimos corrupti quasi recusandae doloribus aliquid odio sapiente reprehenderit! Consequatur numquam excepturi quibusdam.
      Quisquam, voluptas debitis quasi laboriosam soluta asperiores atque consequatur odio reprehenderit et iusto consequuntur beatae quos, magni enim harum vitae! Architecto ipsum et at ex laboriosam enim ratione id nulla.
      Sunt expedita, praesentium similique maxime recusandae culpa autem quia dolor. Molestias sed incidunt dicta ipsa cumque, assumenda ullam ex quasi. Molestias, animi. Sint fugit dolore eligendi expedita dolores, odio laboriosam!
      Reiciendis voluptatibus, libero magnam quos aliquid dolore ipsam corporis! Assumenda non cupiditate neque sint nemo voluptatibus voluptatum reprehenderit inventore quo accusantium? Eos nihil expedita molestias quasi, ea eaque hic quos.
      Non deserunt, qui cupiditate repellat voluptatum dolores fugiat laborum minima illum, iure sequi consectetur placeat asperiores explicabo ab nesciunt eligendi minus tempora aliquam, ratione officia. Illum omnis id aut ipsa.</p>
    </div>
  );
};

export default Card;
