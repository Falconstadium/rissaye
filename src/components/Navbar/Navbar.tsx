import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { useEffect } from 'react';

const Navbar = () => {
  const { i18n } = useTranslation();

  const langs = [
    { id: 'en', lang: 'english' },
    { id: 'ar', lang: 'العربية' },
  ];

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <header>
      <a href="/" className={styles.logo}>
        RissayeDEV
      </a>
      <div className={styles.btns}>
        {langs.map((item) => {
          return (
            <button
              key={item.id}
              type="button"
              className={item.id === i18n.language ? 'selected' : ''}
              onClick={() => handleChangeLang(item.id)}>
              {item.lang}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
