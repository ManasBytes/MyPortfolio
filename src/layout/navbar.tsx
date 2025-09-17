import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,Draggable,InertiaPlugin,MotionPathPlugin,MorphSVGPlugin,Physics2DPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

const NavBar = () => {
    return(
        <>
        <div className="h-fit  w-screen gap-20 backdrop-blur-mdblur bg-gray-400 text-white flex justify-center align-middle fixed z-20"> 

        

        
            <div id="navElement1"><a href="#Home">Home</a></div>
            <div id="navElement2"><a href="#About">About</a></div>
            <div id="navElement3"><a href="#Stacks">Stacks</a></div>
            <div id="navElement4"><a href="#Projects">Projects</a></div>
            <div id="navElement5"><a href="#Connect">Connect</a></div>
           
       </div>
        </>
    )
}

export default NavBar
