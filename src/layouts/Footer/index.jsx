import { useWindowDimensions } from '@/utils';
import styles from './index.module.scss';

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <div className={styles.iconInfo} />
          <p className={styles.infoContent}>
            Директор по спецпроектам: Наталия Ставрогина, <br />
            менеджер по спецпроектам: Анна Андреева, <br />
            руководитель направления по работе с рекламными <br />
            агентствами: Юлия Чижикова
          </p>
          <p className={styles.infoTitle}>Над проектом работали:</p>
        </div>
        <div className={styles.logos}>
          <a href='#'>
            <img
              src='/Footer/logos/vkIcon.svg'
              loading='lazy'
              className={styles.logosVk}
            />
          </a>
          <a href='#'>
            <img
              src='/Footer/logos/youtubeIcon.svg'
              loading='lazy'
              className={styles.logosYoutube}
            />
          </a>
        </div>
        <p className={styles.develop}>
          Реклама, Акционерное общество «Центр по&nbsp;работе с&nbsp;проблемными
          активами».
          <br /> Erid:&nbsp;LdtCKFTJbe
        </p>
        {width <= 520 && (
          <div className={styles.developGroup}>
            <p className={styles.developGroupItem}>
              <span>Директор по спецпроектам</span>
              <br />
              Наталия Ставрогина
            </p>
            <p className={styles.developGroupItem}>
              <span>Менеджер по спецпроектам</span>
              <br />
              Анна Андреева
            </p>
            <p className={styles.developGroupItem}>
              <span>
                Руководитель направления по&nbsp;работе с&nbsp;рекламными
                агентствами
              </span>
              <br />
              Юлия Чижикова
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export { Footer };
