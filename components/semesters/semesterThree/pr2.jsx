import gatcA from '../../../assets/gatc-a.pdb'
import gatcB from '../../../assets/gatc-b.pdb'
import gatcZ from '../../../assets/gatc-z.pdb'
import bigSmallClose from '../../../assets/big-small-close.png'

const linkClass = 'text-primary-600 dark:text-primary-400 underline link-primary'
const thClass =
	'text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800'
const thLastClass =
	'text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold'
const tdClass = 'text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800'
const tdLastClass = 'text-center p-2 md:p-4'
const rowClass =
	'border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight'
const tableWrapClass =
	'rounded-2xl border mt-6 border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full'

export default function Pr2() {
	const formParams = [
		['Тип спирали (правая или левая)', 'Правая', 'Правая', 'Левая'],
		['Шаг спирали (Å)', '28', '34', '45'],
		['Число оснований на виток', '11', '10', '12'],
		[
			'Ширина большой бороздки',
			<>2.7 Å<br />(от P A1 до P B3)</>,
			<>11.7 Å<br />(от P A1 до P B5)</>,
			'Нет',
		],
		[
			'Ширина малой бороздки',
			<>11.0 Å<br />(от P A1 до P B5)</>,
			<>5.7 Å<br />(от P A1 до P B2)</>,
			<>~2–3 Å<br />(от P A1 до P B2)</>,
		],
	]

	const stems = [
		['Акцепторный стебель', '1–7 / 66–72'],
		['T-стебель', '49–53 / 61–65'],
		['Антикодоновый стебель', '26–33 / 36–44'],
		['D-стебель', '10–13 / 22–25'],
	]

	const noncanonical = [
		['4', 'G–U', '4 / 69', 'wobble'],
		['13', 't–A', '54 / 58', 't = 5MU (5-метил-уридин)'],
		['14', 'A–U', '36 / 33', 'неканоническая A–U'],
		['15', 'A–C', '38 / 32', 'A–C'],
		['20', 'A–G', '44 / 26', 'A–G'],
		['25', 'A–U', '14 / 8', 'неканоническая A–U'],
		['26', 'G–C', '15 / 48', 'неканоническая G–C'],
	]

	const tertiary = [
		['A14–U8', '14 / 8', 'D-петля – D-петля (третичный контакт)'],
		['G15–C48', '15 / 48', 'D-петля – вариабельная петля'],
		['G19–C56', '19 / 56', 'D-петля – T-петля'],
		['t54–A58', '54 / 58', 'T-петля (t = 5MU)'],
	]

	const stemPairs = [
		{
			title: 'Акцепторный стебель',
			pairs: [
				'1 G – 72 C',
				'2 C – 71 G',
				'3 G – 70 C',
				'4 G – 69 U   (*)',
				'5 A – 68 U',
				'6 U – 67 A',
				'7 U – 66 A',
			],
		},
		{
			title: 'T-стебель',
			pairs: [
				'49 C – 65 G',
				'50 U – 64 A',
				'51 G – 63 C',
				'52 U – 62 A',
				'53 G – 61 C',
			],
		},
		{
			title: 'Антикодоновый стебель',
			pairs: [
				'26 G – 44 A   (*)',
				'27 C – 43 G',
				'28 C – 42 G',
				'29 A – 41 U',
				'30 G – 40 C',
				'32 C – 38 A   (*)',
				'33 U – 36 A   (*)',
			],
		},
		{
			title: 'D-стебель',
			pairs: [
				'10 G – 25 C',
				'11 C – 24 G',
				'12 U – 23 A',
				'13 C – 22 G',
			],
		},
	]

	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 2</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>

			<section className="mb-12">
				<h3 className="section-header mb-6">Задание 1. Модели A-, B- и Z-форм ДНК</h3>
				<p className="mb-4">
					Структуры дуплекса ДНК (последовательность 5×GATC), построенные с помощью программы{' '}
					<span className="font-mono">fiber</span> пакета 3DNA:
				</p>
				<div className="flex flex-col space-y-1 mb-4">
					<a href={gatcA} download="gatc-a.pdb" className={linkClass}>
						gatc-a.pdb
					</a>
					<a href={gatcB} download="gatc-b.pdb" className={linkClass}>
						gatc-b.pdb
					</a>
					<a href={gatcZ} download="gatc-z.pdb" className={linkClass}>
						gatc-z.pdb
					</a>
				</div>
			</section>

			<section className="mb-12">
				<h3 className="section-header mb-6">Задание 2. Большая и малая бороздки</h3>

				<div className="flex flex-col items-center mb-8 w-full max-w-xl md:max-w-[50%] mx-auto">
					<img
						src={bigSmallClose}
						alt="Большая и малая бороздки"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-center mt-3 font-semibold">
						Рис.1 Основание: атомы большой (красная) и малой (синяя) бороздок
					</p>
				</div>

				<div className={tableWrapClass}>
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className={thClass}>Параметр</th>
									<th className={thClass}>A-форма</th>
									<th className={thClass}>B-форма</th>
									<th className={thLastClass}>Z-форма</th>
								</tr>
							</thead>
							<tbody>
								{formParams.map(([param, a, b, z]) => (
									<tr key={param} className={rowClass}>
										<td className={`${tdClass} font-semibold text-primary-600 dark:text-glow-500`}>
											{param}
										</td>
										<td className={tdClass}>{a}</td>
										<td className={tdClass}>{b}</td>
										<td className={tdLastClass}>{z}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h3 className="section-header mb-6">Задание 3. Структура тРНК</h3>

				<h4 className="text-xl font-semibold mb-3">1) Координаты стеблей</h4>
				<div className={`${tableWrapClass} mb-10`}>
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className={thClass}>Стебель</th>
									<th className={thLastClass}>Нуклеотиды</th>
								</tr>
							</thead>
							<tbody>
								{stems.map(([name, coords]) => (
									<tr key={name} className={rowClass}>
										<td className={tdClass}>{name}</td>
										<td className={`${tdLastClass} font-mono`}>{coords}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<h4 className="text-xl font-semibold mb-3">2) Неканонические пары оснований</h4>
				<div className={`${tableWrapClass} mb-10`}>
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className={thClass}>№ пары</th>
									<th className={thClass}>Пара</th>
									<th className={thClass}>Нуклеотиды (I/II)</th>
									<th className={thLastClass}>Тип</th>
								</tr>
							</thead>
							<tbody>
								{noncanonical.map(([num, pair, nts, type]) => (
									<tr key={num} className={rowClass}>
										<td className={tdClass}>{num}</td>
										<td className={`${tdClass} font-mono`}>{pair}</td>
										<td className={`${tdClass} font-mono`}>{nts}</td>
										<td className={tdLastClass}>{type}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<h4 className="text-xl font-semibold mb-3">
					3) Дополнительные водородные связи (третичная структура)
				</h4>
				<div className={`${tableWrapClass} mb-10`}>
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className={thClass}>Пара</th>
									<th className={thClass}>Нуклеотиды</th>
									<th className={thLastClass}>Область</th>
								</tr>
							</thead>
							<tbody>
								{tertiary.map(([pair, nts, region]) => (
									<tr key={pair} className={rowClass}>
										<td className={`${tdClass} font-mono`}>{pair}</td>
										<td className={`${tdClass} font-mono`}>{nts}</td>
										<td className={tdLastClass}>{region}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<h4 className="text-xl font-semibold mb-3">4) Пары оснований в стеблях</h4>
				<p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
					(*) — неканоническая пара
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{stemPairs.map(({ title, pairs }) => (
						<div key={title}>
							<p className="font-semibold text-primary-600 dark:text-glow-500 mb-2">
								{title}:
							</p>
							<ul className="list-none pl-0 space-y-1 font-mono">
								{pairs.map((pair) => (
									<li key={pair}>{pair}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
