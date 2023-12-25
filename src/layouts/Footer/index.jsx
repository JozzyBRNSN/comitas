import useWindowDimensions from '@/utils';
import { WrapperBlock } from '../WrapperBlock';
import { Icons } from './Icons';
import styles from './index.module.scss';

const FooterInfoModal = () => {
  return (
    <div className={styles.footerInfoModal}>
      Директор по спецпроектам: Наталия Ставрогина,
      <br /> менеджер по спецпроектам: Анна Андреева, <br /> руководитель
      направления по работе с рекламными <br /> агентствами: Юлия Чижикова
    </div>
  );
};

const FooterInfoCommand = () => {
  return (
    <div className={styles.footerInfoCommand}>
      <span>
        Директор по спецпроектам <br />
        <b>Наталия Ставрогина</b>
      </span>
      <span>
        Менеджер по спецпроектам <br />
        <b>Анна Андреева</b>
      </span>
      <span>
        Руководитель направления по работе <br />
        с рекламными агентствами <br />
        <b>Юлия Чижикова</b>{' '}
      </span>
    </div>
  );
};

const FooterInfo = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={styles.footerInfoWrapper}>
      <div className={styles.footerInfoIcon}>i</div>
      <span className={styles.footerInfoText}>Над проектом работали:</span>
      {width && width > 720 ? <FooterInfoModal /> : <FooterInfoCommand />}
    </div>
  );
};

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <div className={styles.infoWrapper}>
          <FooterInfo />
          <div className={styles.infoIcons}>
            <Icons />
          </div>
          <div className={styles.desc}>
            <p>
              * CJM-карты — карты пути клиента; e-commerce —  электронная
              коммерция; <br className={styles.br} /> CRM — cистема управления
              взаимоотношениями с клиентами.
            </p>
            <p> Реклама / ООО «Т1 Инновации» / Erid: LdtCK2KzH</p>
          </div>
        </div>
      </WrapperBlock>
    </section>
  );
};

export { Footer };
