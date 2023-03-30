/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				pathname:
					"/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
			},
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
				pathname: "/profile_images/1560723870197288960/61QqIpfX_400x400.jpg",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
