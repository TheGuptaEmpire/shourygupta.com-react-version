import { skills } from "../constants";
import bg from '../assets/59271.jpg'

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
      <section className='max-container' style={{ backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
        <h1 className='head-text white_text'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Shoury
          </span>{" "}
        </h1>


        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Web Developer based in India, A Learning Enthusiast, always fascinated by technology and always want to explore more and more !!

          </p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default About;