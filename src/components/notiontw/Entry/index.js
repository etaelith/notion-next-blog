import Link from "next/link";

import Title from "@Notiontw/Title";
import Tag from "@Notion/Tag";
import Description from "@Notiontw/Description";

import Symbol from "public/symbol";
import styles from "./styles";

export default function Entry({ data }) {
  return (
    <Link href={`/${data.niceUrl}`}>
      <div className={styles.div}>
        <Title title={data.name} />
        <section className={styles.section}>
          {data.tags.map((tag, key) => {
            return <Tag key={key} color={tag.color} name={tag.name} />;
          })}
          <Symbol/>
        </section>
        <Description key={data.id} text={data.description} />
      </div>
    </Link>
  );
}
