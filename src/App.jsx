import React, { useState, useEffect } from 'react'
import video from './assets/video.mp4'
import { genRandom } from '../utils/genRandom'
import { motion } from 'framer-motion'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/Fa'

const App = () => {

    const [letters, setTest] = useState([''])
    const word = "FAIRYFLAME"
    const wordArr = word.split('')

    useEffect(() => {
        var tempArray = ['']
        const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

        for (let x = 0; x < 22; x++) {


            setTimeout(() => {

                arr.map((items, i) => {
                    if (x >= items) {
                        tempArray[i] = word[i]
                    } else {
                        tempArray[i] = genRandom()
                    }
                })

                setTest([...tempArray])
            }, 60 * (x + 1));
        }
    }, [])

    const variant = {
        initial: {

        },
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const child = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 100,
            transition: {
                duration: 1,
                ease: [.29, .95, .69, .98],
                delay: 0.2
            }
        }
    }

    return (
        <section className='w-full h-screen relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(15,15,15,0.40)] z-[9]'></div>
            <video src={video} autoPlay loop muted className='w-full object-cover h-full z-0 absolute top-0 left-0' ></video>

            <div className="absolute z-20 h-full top-0 left-0 w-full flex">
                <nav className="absolute top-0 left-0 flex  justify-between w-full items-center">


                    <div className="text-white text-2xl flex items-center gap-x-3 mt-5">
                        <img src="/logo.webp" alt="Logo" className="w-24 ml-5" />
                        <AiOutlineTwitter className='hover:drop-shadow-glowi hover:text-mypink transition-all ease-in-out duration-300 cursor-pointer'/>
                        <FaTelegramPlane className='hover:drop-shadow-glowi hover:text-mypink transition-all ease-in-out duration-300 cursor-pointer' />
                    </div>

                    <button className="px-8 py-3  text-white font-albertus mr-8 rounded-lg relative group">
                        <p className="mb-2">
                            Get Started
                        </p>
                        <div className="w-full h-[5px] bg-mypink  transition-all ease-in-out duration-300 group-hover:shadow-pinkglow"></div>
                    </button>
                </nav>

                <div className="w-full h-full z-10 absolute pointer-events-none shadow-bot"></div>

                <div className="max-w-[1500px] mx-auto text-white w-fit h-fit self-end mb-8">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1.5, ease: [.29, .95, .69, .98] }} className="flex lg:w-[33rem] md:w-[22rem] w-[16.5rem] mx-auto 2xl:w-[59rem]">
                        {letters.map((items, i) => {
                            return (
                                <h1 className={`text-center cursor-crosshair 2xl:text-9xl lg:text-7xl md:text-5xl text-4xl font-albertus tracking-widest transition-all ease-in-out duration-300 hover:text-[#f76966] ${wordArr.includes(items) ? "glow " : "text-[#f76966]"}`} key={i}>{items}</h1>
                            )
                        })}
                    </motion.div>



                    <motion.div variants={variant} initial="initial" animate="animate" className='overflow-y-scroll text-center md:max-w-[25rem] h-[16rem] font-albertus p-3 mx-auto miniglow noscroll flex flex-col gap-y-8 mt-10 wrapper relative opacity-80 2xl:text-xl 2xl:h-[20rem] max-w-[20rem]'>
                        <motion.p variants={child} className="">
                            Life is a game that I play,
                            My wings spread in open air,
                            Dreaming of a better place,
                            Where no one feels despair.
                        </motion.p>

                        <motion.p variants={child} className="">
                            I'm not looking for a fight,
                            But sometimes it gets too bright,
                            My fire starts to grow.
                        </motion.p>

                        <motion.p variants={child} className="">
                            And it's my fairy flame,
                            Carry me away,
                            Lighting up the night and day,
                            My fairy flame.
                        </motion.p>

                        <motion.p variants={child} className="">
                            Strange things in the shadows glimmering,
                            A peaceful glow surrounding me,
                            I feel so strong there's no denying it,
                            Wherever I go keeps me free.
                        </motion.p>

                        <motion.p variants={child} className="">
                            And it's my fairy flame,
                            Carry me away,
                            Lighting up the night and day ,
                            My fairy flame .
                        </motion.p>

                        <motion.p variants={child} className="">
                            &#40;My beacon stays alive and strong,
                            A symbol of what I belong.	&#41;
                        </motion.p>

                        <motion.p variants={child} className="">
                            Trying to go higher and higher ,
                            But feeling like a tiny spark in this sky .
                            Oooooh oooooh
                            Oooooh oooooh
                            With every step that i make ,
                            That little light starts getting brighter .
                            Oooooh oooooh
                            Oooooh oooooh
                        </motion.p>

                        <motion.p variants={child} className="">
                            And it's my fairy flame,
                            Carry me away,
                            Lighting up the night and day ,
                            My fairy flame .
                        </motion.p>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default App