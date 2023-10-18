import React, { useEffect, useRef } from 'react';
function Resume(){
    
    const resumeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollAmount = window.scrollY;
            const resume = resumeRef.current;
            
            if (window.innerWidth > 1600) {
                resume.style.backgroundPosition = "50%" + (-scrollAmount / 3) + "px";
            }else if(window.innerWidth > 1300){
                resume.style.backgroundPosition = "50% " + (-scrollAmount / 4) + "px";
            }else if(window.innerWidth > 1000){
                resume.style.backgroundPosition = "50% " + (-scrollAmount / 5) + "px";
            }
            else {
                resume.style.backgroundPosition = "";
            }
        }
        window.addEventListener('scroll', handleScroll);
    })
    
    return(
        <section className="resume" ref={resumeRef}>
            <div className="resume-wrap">
                <h2>CHECK OUT MY RESUME!</h2>
                <a href="../Marz_resume.pdf" download>BLAST OFF</a>
            </div>
        </section>
    )
}

export default Resume;