import { readJsonSync } from 'fs-extra'
import { resolve } from 'path'

export function make() {
    async function getStaticProps({ params }) {
        const posts = readJsonSync(resolve('data.json'))

        const post = posts.find(({ slug }) => slug === params.slug)

        return {
            props: post
        };
    }

    async function getStaticPaths() {
        const posts = readJsonSync(resolve('data.json'))

        return {
            fallback: false,
            paths: posts.map(({ slug }) => ({ params: { slug } }))

        }
    }

    return { getStaticPaths, getStaticProps }
}
