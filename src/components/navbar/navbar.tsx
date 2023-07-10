"use client";
import * as React from 'react';
import "./navbar.scss"

const sections = ["Home", "About", "Experience", "Projects"]

export default function Navbar() {
  
  function goToSection(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${event.currentTarget.innerText}`,
    );

    console.log(anchor);
  
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className='navbar'>
      <div><b>Merilyn Kuo</b></div>
      <div className='navigation'>
        {sections.map((section) => (
          <button key={section} onClick={goToSection}>
            {section}
          </button>
        ))}
        <a href="https://docs.google.com/document/d/16565E3JcgCNGLd86mExEtuyjo9trK9le/edit?usp=sharing&ouid=112935524918440876995&rtpof=true&sd=true" target="_blank"><button id='resumeButton'>Resume</button></a>
      </div>
    </div>
  )
}

  