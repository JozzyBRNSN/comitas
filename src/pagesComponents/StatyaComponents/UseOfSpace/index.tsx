import { DescriptionComment } from "../../../components/DescriptionComment/index";
import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import useWindowDimensions from "../../../utils/index";

import styles from "./index.module.scss";
import Image from "next/image";

const UseOfSpace = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <DescriptionComment
        className={styles.descriptionComment}
        title="1,5—2 года"
        text="Средний срок возврата инвестиций в&nbsp;роботизированные решения"
      />
      <div>
        <SectionTitle
          className={styles.title}
          text="Эффективное использование площадей"
        />
        <Image
          width={736}
          height={404}
          src={
            width && width < 480
              ? "/statya/useOfSpace/image-mini.png"
              : "/statya/useOfSpace/image.png"
          }
          className={styles.image}
          alt=""
        />
        <SectionDescription
          className={styles.desc}
          text="Роботы помогают эффективно использовать площадь склада. Это становится актуально в&nbsp;текущих условиях: стоимость готового объекта за&nbsp;2023 год выросла на&nbsp;67%, а&nbsp;строительство квадратного метра&nbsp;&mdash; на&nbsp;19%. При этом наблюдается дефицит помещений, который заставляет расти цены на&nbsp;аренду складской недвижимости. Арендные ставки также на&nbsp;протяжении последних лет только увеличиваются и&nbsp;обратной тенденции не&nbsp;ожидается. <br /><br />
		  Применяя автоматизированные или роботизированные решения, можно оптимальнее использовать объем склада. Автономные краны-штабелеры способны поднимать груз на&nbsp;высоту в&nbsp;45&nbsp;м. Это в&nbsp;три с&nbsp;лишним раза выше, чем доступно погрузчикам. В&nbsp;результате получится сэкономить на&nbsp;строительстве. Учитывая, что квадратный метр в&nbsp;среднем обходится в&nbsp;55&ndash;65&nbsp;тыс. рублей, выгода может составить сотни миллионов рублей. <br /><br />
		  Благодаря компактным размерам роботы помогают автоматизировать небольшие по&nbsp;площади зоны. Так, Comitas оборудовал пункт выдачи в&nbsp;&laquo;Едином центре поддержки участников СВО и&nbsp;членов их&nbsp;семей&raquo; автономными мобильными роботами (ARM). Зона выдачи в&nbsp;центре отличается малой площадью, поэтому поставить конвейер нельзя. Маневренность ARM помогла эффективно использовать зону и&nbsp;сократить расходы на&nbsp;персонале. <br /><br />
		  Складские роботы за&nbsp;последнее время стали доступнее для бизнеса. Средний срок возврата инвестиций в&nbsp;роботизированные решения составляет 1,5&ndash;2 года при сроке внедрения 7&ndash;8&nbsp;месяцев. Достоинство технологии заключается в&nbsp;том, что ее&nbsp;эффективность можно оценить на&nbsp;небольшом складском участке, например в&nbsp;зоне сортировки. В&nbsp;будущем решение легко масштабируется, что позволяет экономить на&nbsp;операционных затратах, оплате сотрудников, более эффективно управлять складом и&nbsp;в&nbsp;перспективе больше зарабатывать."
        />
      </div>
    </>
  );
};

export { UseOfSpace };
