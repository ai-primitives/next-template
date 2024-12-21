import createMDX from '@next/mdx'
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx'

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  // optional (see code docs):
  components: { code: 'Code' },
  // if you can't use RSC:
  // syntaxHighlighting: {
  //   theme: "github-dark",
  // },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  remarkPlugins: [[remarkCodeHike, chConfig]],
  recmaPlugins: [[recmaCodeHike, chConfig]],
  jsx: true,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
