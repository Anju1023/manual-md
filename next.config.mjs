import nextra from 'nextra';

const withNextra = nextra({
	defaultShowCopyCode: true,
});

export default withNextra({
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
});
