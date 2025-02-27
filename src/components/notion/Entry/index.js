import Link from "next/link";
import styles from "./style.module.scss";

import Title from "@Notion/Title";
import Tag from "@Notion/Tag";
import Description from "@Notion/Description";

import { HeartIcon} from '@heroicons/react/24/outline'

export default function Entry({ data }) {

  return (
    <Link href={`/${data.niceUrl}`}>
      <div className={styles.entry}>
        <HeartIcon className={styles.heart}/>
        <Title title={data.name} />
        <section className={styles.tags} >
          {data.tags.map((tag, key) => {
            return <Tag key={key} color={tag.color} name={tag.name} />;
          })}
        </section>
        <Description key={data.id} text={data.description} />
      </div>
    </Link>
  );
}
