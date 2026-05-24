import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
const Hero = () => {
    useGSAP(()=>{
        const herosplit = new SplitText('.title',{type:'chars, words'});
        const parasplit = new SplitText('.subtitle',{type:'lines'});
        herosplit.chars.forEach((char)=>char.classList.add('text-gradient'));

        gsap.from(herosplit.chars,{
            yPercent:100,
            duration:1,
            ease:'expo',
            stagger:0.08
        });
        gsap.from(parasplit.lines,{
            opacity:0,
            yPercent:100,
            ease:'expo.out',
            stagger:0.08,
            duration:1.8,
            delay:1
        });

        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true,
            }
        })
        .to('.right-leaf', {y:200},0)
        .to('.left-leaf', {y:-200},0)

    },[]);
  return (
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img src='/images/hero-left-leaf.png' className='left-leaf'></img>
        <img src='/images/hero-right-leaf.png' className='right-leaf'></img>

        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. crisp. classic</p>
                    <p className='subtitle'>
                        sip the spirit <br/> of summer
                    </p>
                </div>
                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Every cocktail omn aur menu is a blend of premium ingredients, creative flair, and timeless recipes.
                    </p>
                    <a href='#cocktails'>View cocktails</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
