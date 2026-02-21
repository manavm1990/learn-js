import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Turbopack requires plugins to be serializable.
    // Use plugin *names* instead of imported functions.
    // Docs: /docs/app/guides/mdx#using-plugins-with-turbopack
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

const nextConfig = {
  turbopack: {},
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8n3.c1.e2-8.dev",
        pathname: "/swic/**",
      },
      {
        protocol: "https",
        hostname: "y.yarn.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "file.notion.so",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
