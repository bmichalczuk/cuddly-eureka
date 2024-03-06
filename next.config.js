const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: true,
			},
			{
				source: "/categories/accesories",
				destination: "/categories/accesories/1",
				permanent: true,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

module.exports = withMDX(nextConfig);
