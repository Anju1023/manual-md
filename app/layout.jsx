import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar, Footer } from 'nextra-theme-docs';

export const metadata = {
	title: '南部センターベーカリー業務マニュアル',
	description: '業務マニュアルの決定版',
};

const navbar = (
	<Navbar
		logo={<b>🍞 南部センターベーカリー業務マニュアル</b>}
		projectLink="https://github.com/shuding/nextra"
	/>
);

const footer = (
	<Footer>{new Date().getFullYear()} © Nanbu Center Bakery Operations.</Footer>
);

export default async function RootLayout({ children }) {
	// ページ構造のデータを取得
	const pageMap = await getPageMap();

	return (
		<html lang="ja" dir="ltr" suppressHydrationWarning>
			<Head />
			<body>
				<Layout
					navbar={navbar}
					pageMap={pageMap}
					docsRepositoryBase="https://github.com/shuding/nextra"
					footer={footer}
					sidebar={{ defaultMenuCollapseLevel: 1 }}
					editLink="編集する"
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
