import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

// テーマのコンポーネント（h1, p, codeなど）を取得
const themeComponents = getThemeComponents();

// Next.jsのApp RouterがMDXを使うために必須の設定！
export function useMDXComponents(components) {
	return {
		...themeComponents,
		...components,
	};
}
