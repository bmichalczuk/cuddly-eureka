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
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products/hoodies",
				destination: "/products/hoodies/1",
				permanent: false,
			},
			{
				source: "/products/accesories",
				destination: "/products/accesories/1",
				permanent: false,
			},
			{
				source: "/products/all",
				destination: "/products/all/1",
				permanent: false,
			},
		];
	},
};

module.exports = withMDX(nextConfig);
