import cn from 'clsx';

export const MySteps = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				'my-steps',
				'my-8 space-y-6 border-l-2 border-[#d7ccc8] pl-8',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export const MyStep = ({ number, title, children, className, ...props }) => {
	return (
		<div className={cn('my-step relative', className)} {...props}>
			{/* ステップ番号の丸 */}
			<div className="absolute -left-9 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#8d6e63] text-white font-bold text-sm shadow-md border-3 border-white">
				{number}
			</div>

			{/* タイトル */}
			<h3 className="mb-2 text-xl font-bold text-[#6d4c41]">{title}</h3>

			{/* 内容 */}
			<div className="text-coffee leading-relaxed">{children}</div>
		</div>
	);
};

// 使い方の例:
{
	/* <MySteps>
  <MyStep number={1} title="準備する">
    まずは材料を準備しましょう
  </MyStep>
  <MyStep number={2} title="混ぜる">
    よく混ぜます
  </MyStep>
  <MyStep number={3} title="焼く">
    オーブンで焼きます
  </MyStep>
</MySteps> */
}
