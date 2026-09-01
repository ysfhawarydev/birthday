import { motion } from 'framer-motion'; import type { ReactNode } from 'react';
export function Reveal({children,delay=0}:{children:ReactNode;delay?:number}){return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-70px'}} transition={{duration:.7,delay}}>{children}</motion.div>}
