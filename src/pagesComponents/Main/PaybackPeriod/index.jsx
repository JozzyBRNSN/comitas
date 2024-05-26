import { SectionDescription } from "../../../components/SectionDescription";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { DescriptionComment } from "../../../components/DescriptionComment/index";
import styles from "./index.module.scss";
import Image from "next/image";
import useWindowDimensions from "../../../utils";

const PaybackPeriod = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width && width > 1024 && (
        <DescriptionComment
          className={styles.comment}
          title="5–7 лет"
          text="средний срок окупаемости полностью автоматизированного склада"
        />
      )}
      <div>
        <SectionSubtitle text="Если говорить об&nbsp;окупаемости, то&nbsp;на&nbsp;какие сроки может рассчитывать бизнес?" />
        <SectionDescription
          className={styles.desc}
          text="Это зависит от&nbsp;объемов работы. Если надо построить склад на&nbsp;25&nbsp;000 паллетомест и&nbsp;полностью его автоматизировать, то&nbsp;он&nbsp;окупится за&nbsp;5&ndash;7&nbsp;лет. На&nbsp;его строительство потребуется 1,5&ndash;2 года с&nbsp;момента подписания всех документов. <br /><br />
		  Если нужна частичная автоматизация, например, установка конвейерного оборудования или высокоскоростного сортировщика, то&nbsp;срок сокращается до&nbsp;3&nbsp;лет, а&nbsp;в&nbsp;случае с&nbsp;роботизацией&nbsp;&mdash; до&nbsp;1,5&ndash;2&nbsp;года. Внедрение займет 7&ndash;8&nbsp;месяцев."
        />
        {width && width <= 1024 && (
          <DescriptionComment
            className={styles.comment}
            title="5–7 лет"
            text="средний срок окупаемости полностью автоматизированного склада"
          />
        )}
        <SectionDescription
          text="При этом по&nbsp;своим клиентам мы&nbsp;замечаем, что окупаемость перестала быть главным фактором при выборе автоматизированных систем. Риски, связанные с&nbsp;нехваткой персонала, выше: можно не&nbsp;справиться с&nbsp;пиком продаж в&nbsp;сезон, когда финансовые результаты напрямую зависят от&nbsp;скорости работы склада.  <br /><br />
		  Кроме того, дорожают трудовые ресурсы. У&nbsp;линейного персонала фонд оплаты труда (ФОТ) увеличился на&nbsp;68% за&nbsp;последний год, и&nbsp;данный тренд продолжается, а&nbsp;это существенно влияет на&nbsp;срок окупаемости проекта. Поэтому автоматизация стала значительно привлекательней, чем раньше. К&nbsp;тому&nbsp;же она стала доступнее: несмотря на&nbsp;рост ключевой ставки и&nbsp;инфляцию, множество наших клиентов пользуются льготным финансированием, а&nbsp;оборудование стало дешевле благодаря переориентации с&nbsp;европейских на&nbsp;китайских поставщиков."
        />
        <SectionSubtitle
          className={styles.subtitle}
          text="Что делать, если компания пока не&nbsp;готова к&nbsp;комплексной автоматизации? Какие для нее есть решения?"
        />
        <SectionDescription
          text="Уже сейчас мы&nbsp;наблюдаем интерес и&nbsp;массовое внедрение роботизированных решений в&nbsp;технологические операции на&nbsp;складе. То&nbsp;есть на&nbsp;технику, которой раньше управляли люди, все чаще ставят автоматику и&nbsp;программы.<br /><br />
		  Роботы помогают точечно решать проблемы на&nbsp;отдельных участках складского помещения. Например, в&nbsp;зоне сортировки сотрудникам приходится разбирать коробки по&nbsp;направлениям: Псков, Ярославль, Самара. Что можно сделать: поставить роботов-сортировщиков, которые по&nbsp;маркировке будут отвозить посылку в&nbsp;зону с&nbsp;нужным направлением. Благодаря этому можно снизить зависимость от&nbsp;персонала на&nbsp;в&nbsp;зоне сортировки в&nbsp;2-3&nbsp;раза.<br /><br />
		  Максимальную эффективность роботы показывают на&nbsp;складах со&nbsp;средней и&nbsp;даже низкой оборачиваемостью."
        />
        <Image
          loading="lazy"
          alt=""
          src="/main/paybackPeriod/image.jpg"
          className={styles.image}
          width={736}
          height={404}
        />
      </div>
    </>
  );
};

export { PaybackPeriod };
