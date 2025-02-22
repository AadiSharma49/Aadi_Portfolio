import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useState } from "react";

const Particles = () => {
  const ref = useRef<any>();
  const [pointCloud] = useState(() => 
    new Float32Array(random.inSphere(new Float32Array(5000), { radius: 2 }))
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta/20;
      ref.current.rotation.y += delta/20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={pointCloud} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto relative h-[800px]" id="skills">
      <Canvas
        className="absolute top-0 left-0 w-full h-full z-0"
        camera={{ position: [0, 0, 2] }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
      </Canvas>

      <div className="relative z-10">
        <h2 className="mb-12 pt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          SKILLS
        </h2>
        <div className="mx-2 flex flex-wrap justify-center gap-8 lg:gap-16 rounded-3xl px-4 py-2 lg:px-20 border border-stone-400 backdrop-blur-sm bg-black/30">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center py-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:drop-shadow-2xl cursor-pointer"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.6 },
                }}
                animate={{
                  rotate: hoveredIndex === index ? [0, 15, -15, 0] : 0,
                  scale: hoveredIndex === index ? 1.2 : 1,
                }}
              >
                {skill.icon}
              </motion.div>
              <motion.p
                className="mt-2 text-lg font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
