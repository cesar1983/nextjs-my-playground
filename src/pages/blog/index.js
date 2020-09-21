import Link from 'next/link'
import { useRouter } from 'next/router'
import posts from '../../posts.json'
import Head from 'next/head'

const Blog = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  // const paths = [];
  // for (var index in posts) {
  //   paths.push({ params: { id: index } });
  // }
  // console.log(paths);

  // const paths2 = [
  //   { params: { id: "1" } },
  //   { params: { id: "2" } },
  //   { params: { id: "3" } },
  // ];
  // console.log(paths2);

  return (
    <div>
      <Head>
        <title>Tests Nextjs - BLOG</title>
      </Head>

      <h1>Blog</h1>

      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href="/blog/[slug]" as={'/blog/' + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <br />
      <button onClick={handleClick}>Voltar</button>
    </div>
  )
}

export default Blog
