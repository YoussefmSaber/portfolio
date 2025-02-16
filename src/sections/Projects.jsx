import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../component/CanvasLoader.jsx";
import DemoDevice from "../component/DemoDevice.jsx";
import {CameraControls, PerspectiveCamera} from "@react-three/drei";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            }
        });
    }

    return (
       <section id="work" className="c-space my-20">
           <p className={"head-text"}>My Work</p>
           <div className={"grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"}>
               <div className={"flex flex-col gap-5 relative sm:p-10 py-10 px-5"}>
                   <div className={"absolute top-0 right-0"}>
                        <img src={currentProject.spotlight} alt={"spotlight"} className={"w-full h-96 object-cover rounded-xl"}/>
                    </div>
                   <div className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"} style={currentProject.logoStyle}>
                       <img src={currentProject.logo} alt={"logo"} className={"w-10 h-10 shadow-sm"}/>
                   </div>
                   <div className={"flex flex-col gap-5 text-white-600 my-5"}>
                       <p className={"text-white text-2xl font-semibold animatedText"}>{currentProject.title}</p>
                       <p className={"animatedText"}>{currentProject.desc}</p>
                       <p className={"animatedText"}>{currentProject.subdesc}</p>
                   </div>
                   <div className={"flex items-center justify-between flex-wrap gap-5"}>
                       <div className={"flex items-center gap-3"}>
                           {currentProject.tags.map((tag, index) => (
                               <div key={index} className={"tech-logo"}>
                                    <img src={tag.path} alt={tag.name}/>
                               </div>
                               ))}
                       </div>
                       <a className={"flex items-center gap-3 cursor-pointer text-white-600 z-20"} rel={"noreferrer"} href={currentProject.link} target={"_blank"}>
                           <p>Check Application</p>
                           <img src={"/assets/arrow-up.png"} alt={"arrow"} className={"w-3 h-3"}/>
                       </a>
                   </div>
                   <div className={"flex justify-between items-center mt-7"}>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('previous')}>
                            <img src={"/assets/left-arrow.png"} alt={"arrow"} className={"w-4 h-4"}/>
                        </button>
                       <button className={"arrow-btn"} onClick={() => handleNavigation('next')}>
                           <img src={"/assets/right-arrow.png"} alt={"arrow"} className={"w-4 h-4"}/>
                       </button>
                   </div>
               </div>
               <div className={"border border-black-300 bg-black-200 rounded-lg h-380 sm:h-full md:h-full"}>
                    <Canvas>
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera
                                makeDefault
                                position={[0, -1.25, 6]}
                                rotation={[0, 0, 0]}/>
                            <DemoDevice texture={currentProject.texture} />
                            <directionalLight position={[2, 4, 0]} intensity={100} color={"#fff4ca"}/>
                            <directionalLight position={[0, 0, 1]} intensity={50} color={"#fff4ca"}/>

                        </Suspense>
                    </Canvas>
               </div>
           </div>
       </section>
    )
}
export default Projects
