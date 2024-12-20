import styles from './Hero.module.css';
import heroPic from '../../assets/Urban.png';
import About from '../About/About';
import { images } from '../../assets/data';
import Project from '../Projectes/Project';
import { useTranslation } from 'react-i18next';
import Contact from '../Contact/Contact';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t } = useTranslation('global');

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <>
      {load ? (
        <div className={styles.load}>
          <span className={styles.loader}></span>
        </div>
      ) : (
        <main>
          <section className={styles.hero}>
            <div className={styles.container}>
              <motion.div
                className={styles.img}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}>
                <motion.img src={heroPic} alt="hero" />
              </motion.div>
              <motion.div
                className={styles.intro}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}>
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.parag')}📍</p>
              </motion.div>
            </div>
            <motion.div
              className={styles.tech}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}>
              {images.map((img) => {
                return <motion.img src={img.src} key={img.id} alt="icon" />;
              })}
            </motion.div>
          </section>
          <About />
          <Project />
          <Contact />
        </main>
      )}
    </>
  );
};

export default Hero;
