'use client';

import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import CenteredPixelTransition from '../components/pixelTransition/centered';


export default function Home() {

  const [menuIsActive, setMenuIsActive] = useState(false);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  const updateDimensions = () => {
    const {innerWidth, innerHeight} = window;
    setDimensions({width: innerWidth, height: innerHeight})
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <main className={styles.main}>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <Menu menuIsActive={menuIsActive}/>
      {dimensions.height > 0 && <CenteredPixelTransition menuIsActive = {menuIsActive} dimensions={dimensions}/> }
    </main>
  )
}