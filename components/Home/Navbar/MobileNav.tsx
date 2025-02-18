import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  openNav: () => void;
  isOpen: boolean;
};

const MobileNav = ({ openNav, isOpen }: Props) => {
  return (
    <div className='lg:hidden'>
      {/* Overlay */}
      <div
        onClick={openNav}
        className={`fixed inset-0 transition-all transform duration-500 z-[1001] bg-black/70 w-full h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      ></div>

      {/* Nav links */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1002] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={openNav}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white pb-1 sm:text-[30px]'>
              {link.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={openNav}
          className='sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer absolute top-[0.7rem] right-[1.4rem]'
        />
      </div>
    </div>
  );
};

export default MobileNav;