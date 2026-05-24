import React from "react";
import { navLinks } from "../../constants";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Navbar = () => {
  useGSAP(()=>{
    const navt = gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top'
      }
    });
    navt.fromTo('nav',{
      backgroundColor:'transparent'
    },
  {
    backgroundColor:'00000050',
    backgroundFilter:'blur(10px)',
    duration:1,
    ease:'power1.inout'
  })
  })
  return (
    <nav>
      <div>
        <a className="flex items-center gap-2">
          <img src="/images/logo.png" />
          <p>velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link)=>(
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
