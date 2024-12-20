import styles from './Project.module.css';
import dentalab from '../../assets/screenshot phone_dentalab.jpeg';
import dentBig from '../../assets/screeshot dentalab.jpeg';
import salla from '../../assets/salla-mobile.jpeg';
import sallaBig from '../../assets/salla.jpeg';
import html from '../../assets/HTML.svg';
import css from '../../assets/CSS.svg';
import js from '../../assets/JavaScript.svg';
import next from '../../assets/NextJS-Light.svg';
import ts from '../../assets/TypeScript.svg';
import tailwind from '../../assets/TailwindCSS-Dark.svg';
import { motion } from 'framer-motion';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Project = () => {
  // const [scroll, setScroll] = useState(false);
  // window.addEventListener('scroll', () => {
  //   window.scrollY >= 700 ? setScroll(true) : setScroll(false);
  // });
  // const [scrollSecond, setScrollSecond] = useState(false);
  // window.addEventListener('scroll', () => {
  //   window.scrollY >= 1000 ? setScrollSecond(true) : setScrollSecond(false);
  // });

  const { t } = useTranslation('global');

  // console.log(window.scrollY);

  return (
    <>
      <section className={styles.project}>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          {t('projects.title')}:
        </motion.h4>
        <div className={styles.proj}>
          <motion.div
            className={styles.gemini}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeIn' }}>
            <picture>
              <source media="(max-width: 799px)" srcSet={dentalab} />
              <source media="(min-width: 800px)" srcSet={dentBig} />
              <img src={dentBig} alt="pic for a landing page" />
            </picture>
            <div className={styles.info}>
              <p>{t('projects.landing')}</p>
              <a
                href="https://dentalab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                {t('projects.live')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
              <div className={styles.icons}>
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.gemini}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeIn' }}>
            <picture>
              <source media="(max-width: 799px)" srcSet={salla} />
              <source media="(min-width: 800px)" srcSet={sallaBig} />
              <img src={sallaBig} alt="pic for an ecommerce website" />
            </picture>
            <div className={styles.info}>
              <p>{t('projects.ecom')}</p>
              <a
                href="https://salla-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                {t('projects.live')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
              <div className={styles.icons}>
                <img src={next} alt="html" />
                <img src={ts} alt="css" />
                <img src={tailwind} alt="js" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Project;
