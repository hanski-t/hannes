import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/foundergame",
        destination: "https://game.hannestayronen.com",
        permanent: false,
      },
      // Pages from the old multi-page version of the site
      { source: "/about", destination: "/", permanent: false },
      { source: "/life", destination: "/", permanent: false },
      { source: "/build/:path*", destination: "/", permanent: false },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
