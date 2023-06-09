import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
 } from '../config/motion'



const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img 
                    src='./logo123.png'
                    alt="logo"
                    className='w-20 h-20 object-contain'
                    />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            T-Skjorte <br className='xl:block hidden'/> CUSTOMIZER.
                        </h1>
                        <h2>Av Sokkegalaksen</h2>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                        Lag din egen unike og eksklusive T-Skjorte design på ditt fremtidige antrekk med vår splitter nye 3D customization verktøy. <strong>Her er det bare kreativiteten som kan stoppe deg!</strong>{" "}
                        </p>

                        <CustomButton 
                        type="filled"
                        title="Start design -->"
                        handleClick={() => state.intro = false}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home