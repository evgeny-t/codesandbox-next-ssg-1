import Link from "next/link";
import { readJsonSync } from "fs-extra";
import { resolve } from "path";

import "../src/styles.scss";

const Home = ({ posts }) => (
  <>
    <section className="section">
      <div className="container">
        <h1 className="title">Section</h1>

        <div className="container">
          {posts.map(({ slug, title }) => (
            <div key={slug}>
              <Link as={`/post/${slug}`} href="/post/[slug]">
                <a>{title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;

export async function getStaticProps() {
  const posts = readJsonSync(resolve("data.json"));

  return {
    props: { posts },
  };
}
