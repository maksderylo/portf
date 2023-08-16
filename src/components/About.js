import { useEffect } from 'react';
import '../styles/about.css'
import aboutintr from './svg/aboutintr.jpg'
import studyrum from './svg/studyrum.png'

const About = (props) => {

    setTimeout(function(){
        window.dispatchEvent(new Event('resize'));
        console.log("resized")
    }, 1500);

    const setColorLight = () =>{
        props.setColorLight();
    }
    console.log("about");
    setColorLight();
    useEffect(() =>{
        
    },[])


    return (
        <div className="About">
        <div className="cont">
        <div className='textb'>  
            <h1>Hello</h1>
            <h2>I'm Maks Deryło.<br/>Software Developer &<br/> Computer Science Student at TU/E</h2>      
        </div>
        <div className='forimg'>
                <img id='aboutintr' src={aboutintr} alt='image of me'></img>
        </div>
        <div className='smallspace'></div>
        
            
        </div>

        <div id='sections'>
        <h1>Professional Timeline</h1>
        <section>
        <div className='grid'>
        <article>
        <h3>Giganci Programowania Course</h3>
        <h4>June 2017 – July 2017</h4>
        <p>I attended a summer course by institution ”Giganci Programowania” where I developed C# and HTML programming skills.
             The course was held from June 2017 to July 2017. I used HTML, CSS, and </p>
      </article>
      
      <article>
        <h3>Club of Young Scientists</h3>
        <h4>Feb. 2019 – June 2019</h4>
        <p>Course in the field of computer science and physics made by Warsaw Higher School of Computer Science, interdisciplinary classes with a group project - a website describing particular celestial bodies.</p>
      </article>
      
        <article>
        <h3>Building Van Den Graaff Generator</h3>
        <h4>Sep. 2019 - Mar. 2020</h4>
        <p>I worked on a group project under the supervision of an Oxford graduate teacher.
             The project involved implementing physics laws such as Electrostatic Induction and Coulumb’s Law.
             We invented and utilized the idea of implementing mechanical motor to conduct electricity </p>
      </article>
      <article>
        <h3>SAP Cybersecurity Virtual Internship Program</h3>
        <h4>June 27th, 2022</h4>
        <p>Finished virtual internship program for SAP USA on cybersecurity, worked on industry analysis and anti-phishing tactics.</p>
      </article>
      <article>
        <h3>Polish and English Language Teacher</h3>
        <h4>July 2022 - Aug. 2022</h4>
        <p>I taught languages to children aged 7-14 mostly Ukraine refugees. I cooperated with other teachers and tutors.
             I created a curriculum to accelerate children’s practical language usage abilities. </p>
      </article>
      <article>
        <h3>Competing in coding competitions</h3>
        <h4>Sep. 2022 - Apr. 2023</h4>
        <p>I prepared for and participated in coding competitions in C++, such as the Polish Computer Science Olympiad. During these competitions,
             I learned and implemented techniques such as bitmasks, text algorithms, graphs (DNF, BFS, LCA), and dynamic programming.  </p>
      </article>
      <article>
        <h3>Full Stack Web Application - Forum Website for students</h3>
        <h4>May 2023</h4>
        <p>I created a front and back end full stack web application using React and Express.js fully developed and tested locally.
             The application is a forum website for students to share their ideas and thoughts.
              I used docker to create images of both front and back end and composed them together.
               I implemented features such as user password hashing for mysql database, post creation, reacting, and commenting.  </p>
        <img src={studyrum} alt="studyrum"/>
        </article>
      <article>
        <h3>Software Development</h3>
        <h4>June 2023 - current</h4>
        <p>I worked with libraries such as React.js and Three.js to create web applications. I utilized multiple components and optimized the application for better performance. I also focused on UI/UX design and tested different styling.
             Additionally, I started a personal blog where I provide tutorials in software engineering, mathematics, and overall computer science concepts. </p>
        <img src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" alt="Black and white photo of a lake"/>
    </article>
      
        </div>
        </section>



</div>



        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
<h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
        <h1>about</h1>
    </div>
    );
}

export default About;