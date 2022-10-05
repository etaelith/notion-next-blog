import { v4 as uuidv4 } from "uuid";
export default function Description({ text }) {
  function parseAnnotations(text) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic } = annotations;
    if (italic) {
      content = <i className="italic">{content}</i>;
    }

    if (bold) {
      content = <strong className="font-bold">{content}</strong>;
    }
    return content;
  }

  return (
    <p className="text-sm">
      {text.map((textEntry) => {
        return parseAnnotations(textEntry);
      })}
    </p>
  );
}
