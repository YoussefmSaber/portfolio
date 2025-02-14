import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../component/CanvasLoader.jsx";
import Button from "../component/Button.jsx";
import GamingSetup from "../component/GamingSetup.jsx";
import {calculateSizes} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({minWidth: 440, maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768,maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="home" className={"min-h-screen w-full flex flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generalsans"}>Hi, I am Youssef <span className={"waving-hand"}>👋</span></p>
                <p className={"hero_tag text-gray_gradient"}>A Mobile Android Developer</p>
            </div>
            <div className={"w-full h-full absolute inset-0"}>
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader />}>
                     <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                        <PerspectiveCamera makeDefault position={[-10, 0, 15]} enableZoom={false} />
                        <GamingSetup scale={sizes.scale}
                           position={[0,-3,0]}
                           rotation={[0, 0, 0]}/>
                        <ambientLight position={[0,10,0]} intensity={2} color={"#A8B5FF"} />
                        <directionalLight position={[0, 10, 10]} intensity={2} color={"#FFF4CA"}/>
                        <directionalLight position={[-20, 0, 0]} intensity={1} color={"#FFFFFF"}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href="#about" className={"w-fit"}>
                    <Button name={"Let's work together"} isBeam containerClass={"sm:w-fit w-full sm:min-w-96"}/>
                </a>
            </div>
        </section>
    )
}
export default Hero
