'use client';
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav openNav={handleNavbar}/>
      <MobileNav openNav={handleNavbar} isOpen={isOpen}/>
    </>
  )
}

export default ResponsiveNav