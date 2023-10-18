import {useRef} from "react";
import useIntersecting from "./HandleIntersecting.js";

function About(){

    const aboutDescRef = useRef(null);
    const aboutSecRef = useRef(null);

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
      };
    
    const handleIntersect = () => {
      aboutDescRef.current.classList.add('animate1');
    }

    useIntersecting(options,aboutSecRef,handleIntersect);

    return(
        <section className="about" id="about" ref={aboutSecRef}>
        <div className="container-about">
            <div className="container-about-wrap">
                <h2>ABOUT ME</h2>
                <div className="about-desc" ref={aboutDescRef}>
                    <img src="img/Coding.gif" alt="coding" id="profile-picture"/>
                    <div className="passion-skills-wrap">
                        <div className="passion">
                            <h3>PASSION</h3>
                            <p>Hello, I'm Marz! A 22-year-old technology enthusiast. Currently, I'm in my second year of studying Computer Science at the University of Nottingham. My journey in tech began at a young age during a game session, and was fueled by an insatiable curiosity for how games, softwares, websites work. This led me to where I am today, an aspiring front-end developer.</p>
                        </div>
                        <div className="custom-hr"></div>
                        <div className="skills">
                            <h3>TECHNOLOGIES</h3>
                            <div className="skills-img-wrap">
                                <img src="/img/html.svg" alt='html'/>
                                <img src="img/css.svg" alt="css"/>
                                <img src="img/javascript.svg" alt="javascript"/>
                                <img src="img/git.svg" alt="git"/>
                                <img src="img/React.svg" alt='react'/>
                                <img src="img/mysql.svg" alt="mysql"/>
                                <img src="img/python.svg" alt="python"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gamewrap"></div>
        </section>
    )
}

export default About;