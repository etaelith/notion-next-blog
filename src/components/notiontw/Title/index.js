import Styles from "./Styles";

export default function Title({ title }) {
  function parseAnnotations(title) {
    if (!title) return;

    let content = title.plain_text;
    const { annotations } = title;
    const { bold, italic } = annotations;

    if (italic) {
      content = <i className="italic">{content}</i>
    }

    if (bold) {
      content = <strong className="font-bold">{content}</strong>;
    }
    return content;
  }

  return (
    <h3 className={Styles.h3}>
      {title.map((title) => {
        return parseAnnotations(title)
      })}
    </h3>
  );
}
