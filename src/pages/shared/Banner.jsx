import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/officeMoment1.jpg'
import team2 from '../../assets/team/officeMoment2.jpg'

const Banner = () => {
    return (
        <div className="hero  min-h-96">
            <div className="hero-content justify-around">
                <div className='flex-1'>
                    <motion.h1 
                    animate={{x:100}}
                    transition={{ duration: 6, delay: 1, ease: 'easeIn', repeat:Infinity }}
                    className="text-5xl font-bold">Latest <motion.span
                    animate={{ color:['#f4083a','#f47308','#a2f408','#f408d0'] }}
                    transition={{ duration:2, repeat:Infinity }}
                    >Job</motion.span> for You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>

                <div className='flex-1'>
                <motion.img
                    src={team1}
                    animate={{y:[0,40,0]}}
                    transition={{ duration: 6, delay: 1, ease: 'easeIn', repeat:Infinity }}
                    className="max-w-sm w-64 rounded-3xl  " />
                <motion.img
                    src={team2}
                    animate={{x:[100,150,100]}}
                    transition={{ duration: 10, delay: 5, ease: 'easeIn', repeat:Infinity }}
                    className="max-w-sm w-64 rounded-3xl " />
                </div>

            </div>
        </div>
    );
};

export default Banner;