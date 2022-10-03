import Code from "@Article/Code";
import Heading1 from "@Article/Heading1";
import Heading2 from "@Article/Heading2";
import Heading3 from "@Article/Heading3";
import Image from "@Article/Image";
import List from "@Article/List";
import Paragraph from "@Article/Paragraph";

export default function Block({ data }) {
  function handleBlock(blockData) {
    const { type } = blockData;

    const types = {
      paragraph: (paragraph) => <Paragraph blocks={paragraph.rich_text} />,
      code: (code) => <Code language={code.language} blocks={code.rich_text} />,
      heading_1: (heading) => <Heading1 blocks={heading.rich_text} />,
      heading_2: (heading) => <Heading2 blocks={heading.rich_text} />,
      heading_3: (heading) => <Heading3 blocks={heading.rich_text} />,
      bulleted_list_item: (listItem) => <List blocks={listItem.rich_text} />,
      image: (image) => <Image url={image.file.url} alt={image.file.url}/>
    };

    return types[type] ? types[type](blockData[type]) : "";
  }
  return <>{handleBlock(data)}</>;
}
