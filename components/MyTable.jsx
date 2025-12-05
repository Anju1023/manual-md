import cn from 'clsx';

export const MyTable = ({
	headers = [],
	rows = [],
	className,
	striped = true,
	...props
}) => {
	return (
		<div className="my-4 overflow-x-auto rounded-xl border border-latte shadow-sm">
			<table className={cn('w-full border-collapse', className)} {...props}>
				<thead>
					<tr className="bg-[#efebe9]">
						{headers.map((header, i) => (
							<th
								key={i}
								className="px-4 py-3 text-left font-bold text-[#3e2723] border-b-2 border-white"
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className={cn(
								striped && rowIndex % 2 === 1 && 'bg-[#fafafa]',
								'hover:bg-[#fff9f0] transition-colors'
							)}
						>
							{row.map((cell, cellIndex) => (
								<td
									key={cellIndex}
									className="px-4 py-3 text-coffee border-b border-[#f5f5f5]"
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

// 使い方の例:
// <MyTable
//   headers={['名前', '年齢', '職業']}
//   rows={[
//     ['太郎', '25', 'エンジニア'],
//     ['花子', '23', 'デザイナー']
//   ]}
// />
