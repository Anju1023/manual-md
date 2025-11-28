import nextra from 'nextra';

const withNextra = nextra({
	defaultShowCopyCode: true,
});

export default withNextra({
	output: 'export',
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
});
