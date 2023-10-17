import React, { useEffect, useRef } from 'react';

function Navbar(){
    const navUlRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrollAmount = window.scrollY;
        const navUl = navUlRef.current;
  
        if (scrollAmount) {
          navUl.classList.add('navAnimate');
          navUl.style.padding = '10px 30px';
          navUl.style.backgroundColor = 'black';
        } else {
          navUl.classList.remove('navAnimate');
          navUl.style.backgroundColor = 'transparent';
          navUl.style.padding = '30px 30px';
          navUl.style.transition = '0.5s ease';
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <header>
            <nav>
                <ul ref={navUlRef}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;