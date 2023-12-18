import { WrapperBlock } from '@/layouts/WrapperBlock';
import style from './index.module.scss';
import { Title } from '../Title';
import { Description } from '../Description';
import { BannerWithFigures } from '../BannerWithFigures';

const AverageBill = () => {
  return (
    <section className={style.wrapper}>
      <WrapperBlock>
        <Title title='Бум маркетплейсов <br /> и&nbsp;снижение среднего чека' />
        <div className={style.wrapperDesc}>
          <Description text='Ключевой тренд последних лет&nbsp;&mdash; активное развитие маркетплейсов, повлекшее за&nbsp;собой изменение потребительских сценариев. В&nbsp;сегменте В2С&nbsp;клиенты перестают пользоваться традиционными браузерами и&nbsp;ищут товары сразу на&nbsp;маркетплейсе, даже&nbsp;не&nbsp;проверяя предложения других интернет-магазинов через&nbsp;интернет-поиск.' />
        </div>
        <BannerWithFigures text='48% опрошенных компаний взаимодействуют с&nbsp;маркетплейсами или&nbsp;имеют&nbsp;свой&nbsp;собственный' />
        <div className={style.cols}>
          <Description text='Неудивительно, что&nbsp;интерес к&nbsp;маркетплейсам вырос и&nbsp;у&nbsp;B2B-клиентов. Бизнес-покупатели хотят&nbsp;при&nbsp;выборе товаров онлайн того&nbsp;же удобства: возможности сравнивать предложения, удобную оплату и&nbsp;быструю доставку, к&nbsp;которым они&nbsp;привыкли в&nbsp;рознице. В&nbsp;2022-м у&nbsp;50% опрошенных компаний сектора тяжелой промышленности выросла частота покупок на&nbsp;маркетплейсах. При этом стоит отметить, что&nbsp;у&nbsp;70% опрошенных компаний увеличился средний чек покупки.' />
          <Description text='В&nbsp;розничной торговле переход покупателей на&nbsp;маркетплейсы приводит к&nbsp;снижению среднего чека: теперь не&nbsp;нужно запасаться товаром впрок, все&nbsp;необходимое можно заказать в&nbsp;любой момент и&nbsp;с&nbsp;быстрой доставкой. Чтобы&nbsp;сохранить темпы роста в&nbsp;новых условиях, поставщики и&nbsp;ритейлеры экономят на&nbsp;маркетинге или&nbsp;ищут&nbsp;способы повышения добавленной стоимости. Однако средний чек у&nbsp;компаний, которые заняли место ушедших зарубежных конкурентов, вырос.' />
        </div>
      </WrapperBlock>
    </section>
  );
};

export { AverageBill };
