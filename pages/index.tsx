import Link from 'next/link'
import { readJsonSync } from 'fs-extra'
import { resolve } from 'path'

const Home = ({ posts }) => (
  <>
    {posts.map(({ slug, title }) => (
      <div key={slug}>
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a>{title}</a>
        </Link>
      </div>
    ))}
  </>
);

export default Home;

export async function getStaticProps() {
  const posts = readJsonSync(resolve('data.json'))

  return {
    props: { posts }
  };
}
