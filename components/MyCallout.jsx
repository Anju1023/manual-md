import cn from 'clsx';
import {
	GitHubCautionIcon,
	GitHubImportantIcon,
	GitHubNoteIcon,
	GitHubTipIcon,
	GitHubWarningIcon,
} from 'nextra/icons';

const TypeToEmoji = {
	default: <GitHubTipIcon height=".8em" className="mt-[.3em]" />,
	error: <GitHubCautionIcon height=".8em" className="mt-[.3em]" />,
	info: <GitHubNoteIcon height=".8em" className="mt-[.3em]" />,
	warning: <GitHubWarningIcon height=".8em" className="mt-[.3em]" />,
	important: <GitHubImportantIcon height=".8em" className="mt-[.3em]" />,
};

const classes = {
	default: cn(
		'bg-green-100 dark:bg-green-900/30',
		'text-green-700 dark:text-green-500',
		'border-green-700 dark:border-green-800'
	),
	error: cn(
		'bg-red-100 dark:bg-red-900/30',
		'text-red-700 dark:text-red-500',
		'border-red-700 dark:border-red-600'
	),
	// ✨ ここがポイント‼️ ✨
	info: cn(
		'bg-orange-50 dark:bg-orange-900/30',
		'text-orange-800 dark:text-amber-50',
		'border-orange-200 dark:border-orange-800'
	),
	warning: cn(
		'bg-yellow-50 dark:bg-yellow-700/30',
		'text-yellow-700 dark:text-yellow-500',
		'border-yellow-700'
	),
	important: cn(
		'bg-purple-100 dark:bg-purple-900/30',
		'text-purple-600 dark:text-purple-400',
		'border-purple-600'
	),
};

export const MyCallout = ({
	className,
	type = 'default',
	emoji = type && TypeToEmoji[type],
	children,
	...props
}) => {
	return (
		<div
			className={cn(
				'my-callout overflow-x-auto mt-6 flex rounded-lg border py-2 pe-4',
				'contrast-more:border-current',
				type && classes[type],
				className
			)}
			{...props}
		>
			<div
				className="select-none text-xl ps-3 pe-2"
				style={{
					fontFamily:
						'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
				}}
			>
				{emoji}
			</div>
			<div className="w-full min-w-0 leading-7">{children}</div>
		</div>
	);
};
