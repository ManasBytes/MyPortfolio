import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap-trial/Observer";

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

gsap.registerPlugin(useGSAP,Draggable,InertiaPlugin,MotionPathPlugin,MorphSVGPlugin,Physics2DPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle,Observer);



const Home = () => {
    return(
        <section id="Home">
            <header>
                <div>Animated Section</div>
                <div>Original Inspiration</div>
            </header>


            <section id="first">
                <div id="outer">
                    <div id="inner">
                        <div id="bg-one">
                            <h2 id = "section-heading"> Scroll Down</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="second">
                <div id="outer">
                    <div id="inner">
                        <div id="bg">
                            <h2 id = "section-heading"> Animation with GSAP</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="third">
                <div id="outer">
                    <div id="inner">
                        <div id="bg">
                            <h2 id = "section-heading"> Greensock</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fourth">
                <div id="outer">
                    <div id="inner">
                        <div id="bg">
                            <h2 id = "section-heading"> Animation Platform</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fifth">
                <div id="outer">
                    <div id="inner">
                        <div id="bg">
                            <h2 id = "section-heading"> Keep Scrolling</h2>
                        </div>
                    </div>
                </div>
            </section>





        </section>
    )
}

export default Home