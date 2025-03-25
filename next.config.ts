import type { NextConfig } from "next";
import createMdx from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: process.env.NODE_ENV !== "production" ? ["next-mdx-remote"] : undefined
};

const withConfig = createMdx({
  extension: '/\.mdx?$/'
})

export default withConfig(nextConfig);
