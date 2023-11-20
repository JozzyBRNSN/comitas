import localFont from 'next/font/local';
import style from './style.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const myFont = localFont({
  src: [
    {
      path: './fonts/TTFirsNeueMedium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsNeueRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <>
      <Head>
        <title>В поиске контакта</title>
        {/* <meta
          key='description'
          name='description'
          content='Что нужно учесть новому поколению предпринимателей'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Что нужно учесть новому поколению предпринимателей'
        />
        <meta
          key='title'
          name='title'
          content='12 ошибок бизнеса и как их избежать'
        />
        <meta
          key='og:title'
          property='og:title'
          content='12 ошибок бизнеса и как их избежать'
        /> */}
        <meta property='og:site_name' content='test.domen' />
        <meta name='twitter:image' content='/og-image-tg.jpg' />
        <meta property='twitter:image:width' content='1012' />
        <meta property='twitter:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='vk:image' content='/og-image-vk.jpg' />
        <meta property='vk:image:width' content='510' />
        <meta property='vk:image:height' content='228' />
        <meta property='og:image' content='/og-image-tg.jpg' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:height' content='800' />
        <link rel='icon' href='/favicon16.svg' sizes='16x16' type='image/png' />
        <link
          rel='icon'
          href='/favicon32.svg'
          sizes='16x16 32x32'
          type='image/vnd.microsoft.icon'
        />
        <link
          rel='icon'
          href='/favicon64.svg'
          sizes='any'
          type='image/svg+xml'
        />
      </Head>
      <div className={style.mainWrapper}>
        <Image
          width={100}
          height={100}
          alt='1'
          src='/background.png'
          className={style.background}
          priority
          objectFit='cover'
        />
        <div className={cn(myFont.className, style.wrapper)}>
          <header className={style.headerWrapper}>
            <div className={style.header}>
              <a target='_blank' href=''>
                <Image
                  width={247}
                  height={23}
                  alt='Логотип Xota и Модус'
                  src='/header/modus.svg'
                  className={style.headerModus}
                  priority
                />
              </a>
              <a target='_blank' href=''>
                <Image
                  width={20}
                  height={20}
                  alt=''
                  src='/header/closeIcon.svg'
                  className={style.headerCloseIcon}
                />
              </a>
              <a target='_blank' href=''>
                <Image
                  width={110}
                  height={20}
                  alt='Логотип Ведомости'
                  src='/header/vedomosty.svg'
                  className={style.headerVedomosty}
                  priority
                />
              </a>
            </div>
            <p className={style.headerAgeWrapper}>
              Cпециальный проект
              <span className={style.headerAge}>16+</span>
            </p>
          </header>
          <main className={style.main}>
            <span className={style.subtitle}>
              Реклама / ООО «Т1 Инновации» / Erid: XXXXXXXXX
            </span>
            <h1 className={style.title}>В&nbsp;поиске контакта</h1>
            <div className={style.content}>
              <p className={cn(style.contentLeft, 'animation')}>
                Как лидеры российского бизнеса адаптируются к&nbsp;изменениям
                в&nbsp;потребительском поведении и&nbsp;экономике
              </p>
              <p className={cn(style.contentRight, 'animation')}>
                Скорость трансформационных процессов стремительно
                растет&nbsp;&mdash; сегодня&nbsp;компаниям приходится внедрять
                инновации и&nbsp;адаптировать стратегии в&nbsp;считанные недели.
                Чтобы понять, какие факторы больше всего повлияли
                на&nbsp;потребление в&nbsp;ключевых отраслях российского бизнеса
                и&nbsp;как&nbsp;бизнес приспосабливался к&nbsp;этим переменам,
                CRM-платформа НОТА МОДУС (холдинг&nbsp;Т1) провела масштабное
                исследование. В&nbsp;нем приняли участие более 150 директоров
                по&nbsp;маркетингу и&nbsp;клиентскому сервису
                в&nbsp;11&nbsp;отраслях экономики.
              </p>
            </div>
            <p className={cn(style.description, 'animation')}>
              Внутри:&nbsp;ключевые тренды и&nbsp;вызовы последних двух лет,
              решения, которые принимали компании, с&nbsp;детализацией
              по&nbsp;отраслям и&nbsp;сегментам&nbsp;B2B/B2C.
            </p>
          </main>
          <footer className={style.footer}>
            <button
              download
              target='_blank'
              onClick={() => setModalVisible(true)}
              className={style.footerButton}
            >
              Скачать исследование
            </button>
          </footer>
        </div>
        {modalVisible && (
          <div className={style.modalWrapper}>
            <iframe
              src='https://forms.yandex.ru/cloud/655b6b3b73cee713557ea13e/?iframe=1'
              frameBorder='0'
              name='ya-form-655b6b3b73cee713557ea13e'
              width='100%'
              style={{ maxWidth: '600px', position: 'relative', zIndex: '2' }}
            ></iframe>
            <div
              className={style.modalWrapperClick}
              onClick={() => setModalVisible(false)}
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
