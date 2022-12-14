const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPreact(
	withBundleAnalyzer({
		compress: true,
		devIndicators: {
			buildActivityPosition: "bottom-right",
		},
		reactStrictMode: true,
	})
);
