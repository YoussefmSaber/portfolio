import  {useEffect, useRef} from 'react'
import {useGLTF, useVideoTexture} from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const DemoDevice = (props) => {
    const group = useRef()
    const { nodes, materials} = useGLTF('/models/phone.glb')

    const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');
    useEffect(() => {
        if (txt) {
            txt.flipY = true;
        }
    }, [txt]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI*6/4,
            duration: 1,
            ease: "power1.inOut",
        })
    },  [txt]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[0, 1.25, 0]} rotation={[Math.PI/2, Math.PI, -Math.PI/21]}>
                <group>
                    <group  >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_Frame_0.geometry}
                            material={materials.Frame}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_CamModuleBlack_0.geometry}
                            material={materials.CamModuleBlack}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_CamModule_0.geometry}
                            material={materials.CamModule}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_Mic_0.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_Antennas_0.geometry}
                            material={materials.Antennas}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frame_CamGlass_0.geometry}
                            material={materials.CamGlass}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Screen_Screen_0.geometry}
                            material={materials.Screen}
                        >
                            <meshBasicMaterial map={txt} />
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['BackBody_Back(top)_0'].geometry}
                            material={materials.Backtop}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['BackBody_Back(Bottom_0'].geometry}
                            material={materials.BackBottom}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.CircleCam_CamGray_0.geometry}
                            material={materials.CamGray}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Sensor2_Sensor_0.geometry}
                            material={materials.Sensor}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RecCam_CamGray_0.geometry}
                            material={materials.CamGray}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RecCam_CamGlass_0.geometry}
                            material={materials.CamGlass}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Sensor_Sensor001_0.geometry}
                            material={materials['Sensor.001']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Flash_Flash_0.geometry}
                            material={materials.Flash}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Mic_Mic2_0.geometry}
                            material={materials.Mic2}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Mic_Mic_0.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frontcam_CamGray_0.geometry}
                            material={materials.CamGray}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Frontcam_CamGlass_0.geometry}
                            material={materials.CamGlass}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bezel_Bezel_0.geometry}
                            material={materials.Bezel}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bezel_Mic_0.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Buttons_Frame_0.geometry}
                            material={materials.Frame}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Lens3_Lens_0.geometry}
                            material={materials.Lens}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.CircleCam2_CamGray_0.geometry}
                            material={materials.CamGray}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Lens1_Lens_0.geometry}
                            material={materials.Lens}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Lens2_Lens_0.geometry}
                            material={materials.Lens}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Lens_Lens_0.geometry}
                            material={materials.Lens}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.BackBody001_Logo_0.geometry}
                            material={materials.Logo}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/phone.glb')

export default DemoDevice;