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


const About = () => {
    return(
        <section id="About">
        <div className="h-screen w-screen bg-amber-500">
        <h1>This is About</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? <br /></div>
        </section>
    )
}

export default About