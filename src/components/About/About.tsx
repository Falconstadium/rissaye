import styles from './About.module.css';
import aboutPic from '../../assets/rb_3877.png';
import { useTranslation } from 'react-i18next';
// import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation('global');

  // const [scroll, setScroll] = useState(false);
  // window.addEventListener('scroll', () => {
  //   window.scrollY >= 60 ? setScroll(true) : setScroll(false);
  // });

  // console.log(window.scrollY);

  return (
    <>
      <motion.section className={styles.about}>
        <motion.div
          className={styles.img}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>
          <img src={aboutPic} alt="about" />
        </motion.div>
        <motion.div
          className={styles.identify}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>
          <h4>{t('about.title')}</h4>
          <div className={styles.parag}>
            <p>{t('about.parag')}</p>
            <p>{t('about.parag2')}</p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
