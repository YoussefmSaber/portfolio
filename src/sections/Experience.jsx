import {Canvas} from "@react-three/fiber";
import {workExperience} from "../constants/index.js";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../component/CanvasLoader.jsx";
import Developer from "../component/Developer.jsx";

const Experience = () => {
    return (
        <section className={"c-space my-20 scroll-m-24"}>
            <div className={"w-full text-white-600"}>
                <p className={"head-text"}>My Work Experience</p>
                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas>
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault position={[2, 2, 7]} />
                                <ambientLight position={[0,10,0]} intensity={2} color={"#A8B5FF"} />
                                <directionalLight position={[0, 10, 10]} intensity={2} color={"#FFF4CA"}/>
                                <directionalLight position={[-20, 0, 0]} intensity={1} color={"#FFFFFF"}/>
                                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}  />
                                <Developer animationName={'idle'} position-y={-2.75} scale={3}/>
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperience.map((item, index) => {
                                return (
                                    <div key={index} className={"work-content_container group"}>
                                        <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                            <div className={"work-content_logo"}>
                                                <img src={item.icon} alt={item.name} className={"w-full h-full"}/>
                                            </div>
                                            <div className={"work-content_bar"}/>
                                        </div>
                                        <div className={"sm:p-5 px-2.5 py-5"}>
                                            <p className={"font-bold text-white-800"}>{item.company}</p>
                                            <p className={"text-sm mb-5"}>{item.position} -- {item.duration}</p>
                                            <p className={"group-hover:text-white transition ease-in-out duration-500"}>{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
