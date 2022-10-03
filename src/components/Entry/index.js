import Link from "next/link";
import styles from "./style.module.scss";

import Title from "@components/Title";
import Tag from "@components/Tag";
import Description from "@components/Description";

export default function Entry({ data }) {

  return (
    <Link href={`/${data.niceUrl}`}>
      <div className={styles.entry}>
        <Title title={data.name} />
        <section className={styles.tags}>
          {data.tags.map((tag, key) => {
            return <Tag key={key} color={tag.color} name={tag.name} />;
          })}
        </section>
        <Description key={data.id} text={data.description} />
      </div>
    </Link>
  );
}
