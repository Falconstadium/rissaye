import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'sonner';

const Contact = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <form
        className={styles.form}
        action="https://api.web3forms.com/submit"
        method="POST">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          {t('contact.title')}:
        </motion.h4>
        <motion.div
          className={styles.inputs}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <input
            type="hidden"
            name="access_key"
            value={`${import.meta.env.VITE_PUBLIC_KEY}`}></input>
          <div className={styles.contact}>
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.contact}>
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.contact}>
            <label htmlFor="subject">{t('contact.subject')}</label>
            <input type="text" id="subject" />
          </div>
          <div className={styles.contact}>
            <label htmlFor="msg">{t('contact.msg')}</label>
            <textarea id="msg" name="message" required></textarea>
          </div>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}></input>
          <motion.button
            type="submit"
            className={styles.btn}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}>
            {t('contact.btn')}
          </motion.button>
        </motion.div>
      </form>
      <Toaster richColors />
    </>
  );
};

export default Contact;
