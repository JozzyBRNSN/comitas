import styles from "./index.module.scss";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { SectionDescription } from "../../../components/SectionDescription";
import Image from "next/image";

const MainConsumers = () => {
  return (
    <>
      <div />
      <div className={styles.content}>
        <SectionSubtitle text="Кто сегодня основные потребители систем автоматизации складской и&nbsp;производственной логистики?" />
        <SectionDescription text="Во-первых, это электронная торговля (e-commerce) и&nbsp;фулфилмент&nbsp;&mdash; обработка заказов интернет-магазинов и&nbsp;онлайн-ритейлеров, компании экспресс-доставки и&nbsp;почтовые операторы и&nbsp;офлайн-ритейлеры. Для этих категорий потребителей существенным преимуществом автоматизации является повышение скорости обработки и&nbsp;сортировки заказов и&nbsp;сокращение сроков доставки заказанных товаров.<br /><br /> Во-вторых, компании пищевой промышленности, производители промышленного оборудования, материалов и&nbsp;компонентов для производства. Для бизнеса в&nbsp;этих сегментах важны плотность хранения и&nbsp;стабильная производительность складских операций, не&nbsp;зависящая от&nbsp;дефицита сотрудников и&nbsp;текучки кадров. <br /><br /> В-третьих, системами автоматизации складской и&nbsp;производственной логистики пользуются фармацевтические компании, производители и&nbsp;поставщики запасных частей. Им&nbsp;нужна штучная обработка грузов и&nbsp;тотальный контроль сохранности и&nbsp;состояния грузов на&nbsp;всем этапе хранения и&nbsp;транспортировки. То&nbsp;есть, очень важна минимизация влияния человеческого фактора на&nbsp;сохранность дорогостоящих грузов.<br /><br /> В&nbsp;целом рост потребности в&nbsp;автоматизации для компаний из&nbsp;разных отраслей экономики дает мощный импульс развитию и&nbsp;оборудования, и&nbsp;ПО в&nbsp;этой сфере. Без современных автоматизированных систем управления складами и&nbsp;распределительными центрами развитие бизнеса, в&nbsp;условиях жесткой конкуренции и&nbsp;дефицита линейного персонала, становится невозможным." />
        <Image
          width={736}
          height={405}
          src="/main/mainConsumers/image.jpg"
          alt=""
          className={styles.image}
          loading="lazy"
        />
      </div>
    </>
  );
};

export { MainConsumers };
