import {aboutMe, contact, passion, techStack, work} from "../constants/index.js";
import Globe from "react-globe.gl";
import Button from "../component/Button.jsx";
import {useState} from "react";

const About = () => {
    return (
        <section id={"about"} className={"c-space my-20 scroll-m-24"}>
            <p className={"head-text mb-8"}>About Me</p>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-4 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container h-full flex flex-col"}>
                        <img src={aboutMe.image} alt={"grid-1"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className="grid-headtext">{aboutMe.headText}</p>
                            <p className="grid-subtext">{aboutMe.subText}</p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={techStack.image} alt={"grid-2"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>{techStack.headText}</p>
                            <p className={"grid-subtext"}>{techStack.subText}</p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center"}>
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                            bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                            pointsData={[{ lat: 30.60478, lng: 32.284164, }]}
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>{work.headText}</p>
                            <p className={"grid-subtext"}>{work.subText}</p>
                            <a href="#contact">
                                <Button name={"Contact me"} isBeam containerClass={"w-full mt-5"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={passion.image} alt={"grid-3"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>{passion.headText}</p>
                            <p className={"grid-subtext"}>{passion.subText}</p>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid4.png"} alt={"grid-4"} className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"}/>
                        <div className={"space-y-2"}>
                            <p className={"grid-headtext"}>{contact.headText}</p>
                            <p className={"grid-subtext"}>{contact.subText}</p>
                            <p className="grid-subtext">
                                <span className="waving-hand" style={{ color: "inherit" }}>📞 </span> : {contact.phone}
                            </p>
                            
                            <p className="grid-subtext">
                                <span className="waving-hand" style={{ color: "inherit" }}>✉️ </span> : {contact.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
