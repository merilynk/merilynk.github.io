"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import "./navbar.scss"

const sections = ["Home", "About", "Experience", "Projects"]

export default function Navbar() {
  
  function goToSection(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
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
        <a href='/public/ResumeSu23.pdf'><button id='resumeButton'>Resume</button></a>
      </div>
    </div>
  )
}

  