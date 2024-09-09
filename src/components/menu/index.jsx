import React from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export default function index({menuIsActive}) {
  return (
    <motion.div 
        className={styles.menu}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
    >
        <p>there are places</p>
        <p>where you haven't been</p>
        <p>where you already belong</p>
    </motion.div>
  )
}