import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <footer className={styles.footer}>{t('footer.footer')} &copy; 2024</footer>
  );
};

export default Footer;
