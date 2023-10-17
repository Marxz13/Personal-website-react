import {useRef} from "react";
import useIntersecting from "./HandleIntersecting";

function Project(){

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const projectRef = useRef(null);
    const projectWrapRef = [useRef(null),useRef(null),useRef(null)];

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const handleIntersectProject = () => {
        for(let i = 0; i < projectWrapRef.length; i++){
            setTimeout(() => {
                projectWrapRef[i].current.classList.add('animate1');
            },200 * (i));
        }
    }

    useIntersecting(options,projectRef,handleIntersectProject);

    return(
        <section className="project" id="project" ref={projectRef}>
            <h2>PROJECTS</h2>
            <p>(More coming soon!)</p>
            <div className="project-wrap">
                <div className="1 projects" ref={projectWrapRef[0]}>
                    <a href="https://github.com/Marxz13/Car-Rental" target="_blank"><img className="images" src="img/Main.png"/></a>
                    <p>Car Rental System</p>
                </div>
                <div className="2 projects" ref={projectWrapRef[1]}>
                    <a href="https://marzallan.netlify.app/" target="_blank"><img className="images" src="img/Portfolio.png"/></a>
                    <p>Porfolio Website v1</p>
                </div>
                <div className="3 projects" ref={projectWrapRef[2]}>
                    <a href="https://github.com/Marxz13/Meme-generator" target="_blank"><img className="images" src="img/memegenerator.png"/></a>
                    <p>Meme Generator</p>
                </div>
            </div>
        </section>
    );
}

export default Project;