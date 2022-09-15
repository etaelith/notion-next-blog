import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Client } from "@notionhq/client"
import Entry from '../components/Entry'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export default function Home({ entries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juani Gallo - Blog</title>
        <meta name="description" content="Juani Gallo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog de Juani</h1>
      <section className={styles.entries}>
        {entries.length == 0 && 'There are no entries'}
        {entries.map((entry, key) => {
          return (
            <Entry key={key} data={entry} />
          )
        })}
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const entries = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  const mappedEntries = entries.results.map((entry) => {
    const { properties } = entry
    const { name, description, tags } = properties


    return {
      name: name.title,
      description: description.rich_text,
      tags: tags.multi_select,
      id: entry.id
    }
  })
  return {
    props: {
      entries: mappedEntries ?? []
    },
  }
}