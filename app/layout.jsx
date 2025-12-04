/* app/layout.jsx */
import 'nextra-theme-docs/style.css';
import './globals.css';

import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar, Footer } from 'nextra-theme-docs';
import { Head } from 'nextra/components';

export const metadata = {
	title: '南部センターベーカリー業務マニュアル',
	description: '業務マニュアル',
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
	const pageMap = await getPageMap();

	return (
		<html lang="ja" dir="ltr" suppressHydrationWarning>
			<Head
				color={{
					hue: { light: 23, dark: 13 },
					saturation: { light: 37, dark: 44 },
					lightness: { light: 64, dark: 94 },
				}}
				backgroundColor={{ light: '#fff9f5', dark: '#7a5f4d' }}
			>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
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
