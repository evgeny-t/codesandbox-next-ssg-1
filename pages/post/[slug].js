import { readJsonSync } from 'fs-extra'
import { resolve } from 'path'
import Link from 'next/link'

import { make } from '../../src/utils'

const Post = ({ title, text }) => {
  return (
    <>
      <i>
        <Link href="/" as="/"><a>назад</a></Link>
      </i>
      <h1>{title}</h1>
      <main>{text}</main>
    </>
  )
}

export default Post

const { getStaticPaths, getStaticProps } = make()
export { getStaticPaths, getStaticProps }

// export async function getStaticProps({ params }) {
//   const posts = readJsonSync(resolve('data.json'))

//   const post = posts.find(({ slug }) => slug === params.slug)

//   return {
//     props: post
//   };
// }

// export async function getStaticPaths() {
//   const posts = readJsonSync(resolve('data.json'))

//   return {
//     fallback: false,
//     paths: posts.map(({ slug }) => ({ params: { slug } }))

//   }
// }