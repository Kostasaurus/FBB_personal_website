import {useRef, useState} from "react";
import useClickOutside from "../../hooks/useClickOutside.jsx";
import avatar from '../../assets/avatar.png'

export default function About() {
	const [showPortfolio, setShowPortfolio] = useState(false);
	const portfolioRef = useRef(null);
	
	useClickOutside(portfolioRef, () => setShowPortfolio(false));
	
	return (
		<section id="about" className="py-8 px-4 max-w-4xl mx-auto">
			<div className="space-y-8">
				<header className="mb-12 flex flex-col items-center">
					<h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
              Обо мне
              
            </span>
					</h2>
					<p className="  text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
				</header>
				
				<div className="max-w-none space-y-6">
					<div className="bg-white border border-mystic-200 dark:border-mystic-700 dark:bg-primary-800 rounded-2xl p-6 shadow-[0_0_4px] dark:shadow-[0_0_7px] shadow-primary-500">
						<p className="text-xl font-semibold">
							Рад приветствовать вас на своем сайте!
						</p>
						
						<div className="flex flex-col md:flex-row gap-8 items-start mt-6 text-lg">
							<div className="flex-1 space-y-4">
								<p>
									Меня зовут <span className="font-semibold text-glow-600 dark:text-glow-400">Константин Зельцер</span>,
									я студент Факультета биоинженерии и биоинформатики МГУ.
								</p>
								
								<p>
									С детства я увлекался естественными науками, особенно <span className="font-semibold text-glow-600 dark:text-glow-400">химией</span> и
									<span className="font-semibold text-glow-600 dark:text-glow-400"> биологией</span>. Любовь к ним определила дальнейший путь:
									успешное участие в олимпиадах и поступление на этот факультет.
								</p>
								<p>Вот
								<a className="text-primary-600 dark:text-glow-400 mx-1 hover:underline! hover:text-glow-600 dark:hover:text-lime-700! font-medium"
									target="_blank"
									href="mailto:Kostasaurus@fbb.msu.ru">моя студенческая почта</a>
									 но лучше пишите в тг)
								</p>
							</div>
							
							
							<div className="shrink-0 mx-auto md:mx-0">
								<div className="relative w-40 h-40 rounded-full overflow-hidden ring-4
								ring-primary-200 dark:ring-glow-800 shadow-[0_0_20px] shadow-primary-500 dark:shadow-accent-300">
									
									<img
										src={avatar}
										alt="Константин Зельцер"
										className="w-full h-full object-cover"
										
									/>
								</div>
							</div>
						</div>
					</div>
					
					<div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-2xl p-6 border
					 border-blue-200 dark:border-blue-800 shadow-[0_0_4px] dark:shadow-[0_0_7px] shadow-blue-800">
						<h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
							<i className="fas fa-code mr-3"></i>
							Программирование
						</h3>
						<p className="text-lg">
							Относительно недавно я также заинтересовался программированием и создал:
						</p>
						<ul className="mt-3 space-y-2">
							<li className="flex items-start">
								<i className="fas fa-robot text-glow-500 dark:text-blue-300 mt-1 mr-2"></i>
								<span><a href="https://t.me/KotEGA_Bot" className="text-blue-800 dark:text-glow-400 hover:underline! hover:text-blue-900 dark:hover:text-blue-400! font-medium">Телеграм-бота для подготовки к ЕГЭ</a></span>
							</li>
							<li className="flex items-start">
								<i className="fas fa-frog text-glow-500 dark:text-blue-300 mt-1 mr-3"></i>
								<span><a href="https://t.me/VserosQuizBot" className="text-blue-800 dark:text-glow-400 hover:underline! hover:text-blue-900 dark:hover:text-blue-400! font-medium">
									Бота для подготовки к олимпиадам по биологии</a></span>
							</li>
							<li className="flex items-start">
								<i className="fas fa-microscope text-glow-500 dark:text-blue-300 mt-1 mr-3"></i>
								<span><a href="https://lichenid.ru/" className="text-blue-800 dark:text-glow-400 hover:underline! hover:text-blue-900 dark:hover:text-blue-400! font-medium">
									Сайт для интерактивного определения и каталогизации лишайников</a></span>
							</li>
						</ul>
					</div>
					<div className="bg-amber-50/80 dark:bg-amber-900/20 rounded-2xl p-6 border
					border-amber-200 dark:border-amber-800 shadow-[0_0_4px] dark:shadow-[0_0_7px] shadow-glow-800">
						<h3 className="text-2xl font-semibold text-amber-700 dark:text-amber-300 mb-4 flex items-center">
							<i className="fas fa-heart mr-3"></i>
							Мои увлечения
						</h3>
						<p className="text-lg">
							<span className="text-amber-600 dark:text-amber-400 text-2xl mr-1">✨</span>
							Но это всё скучно! Больше всего я люблю <span className="font-semibold text-amber-600 dark:text-amber-400">путешествовать</span>,
							ходить в лес и <span className="font-semibold text-amber-600 dark:text-amber-400">собирать грибы</span>,
							а также люблю готовить (особенно грибы! 🍄).
						</p>
						<div className="mt-4 flex items-center">
							<i className="fas fa-paper-plane text-amber-600 dark:text-amber-400 mr-4"></i>
							<span>
                Ещё больше информации обо мне, моей жизни и путешествиях можно узнать из моего
                <a href="https://t.me/kostyaiskostya"
                   target="_blank"
                   className="ml-1 text-amber-600 dark:text-amber-400
                hover:underline! font-medium hover:text-amber-800 dark:hover:text-amber-600">Telegram-канала</a>
              </span>
						</div>
					</div>
				</div>
				
				<div
					ref={portfolioRef}
					className="mt-12 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20
					dark:to-pink-900/20 rounded-2xl p-6 border border-purple-300 shadow-[0_0_4px] dark:shadow-[0_0_7px]  shadow-purple-400 dark:shadow-purple-500 dark:border-purple-800"
				>
					<button
						className="w-full flex items-center justify-between px-6 py-4 rounded-xl! btn-primary"
						onClick={() => setShowPortfolio(!showPortfolio)}
					>
            <span className="flex items-center space-x-3">
              <i className={`fas fa-${showPortfolio ? 'folder-open' : 'folder'} text-glow-500 text-xl`}></i>
              <span className="font-semibold text-xl not-dark:text-pink-950">Портфолио и достижения</span>
            </span>
						<i className={`fas fa-chevron-${showPortfolio ? 'up' : 'down'} text-gray-500 not-dark:text-purple-400 group-hover:text-glow-500 transition-colors`}></i>
					</button>
					
					{showPortfolio && (
						<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
							<div className="bg-white dark:bg-pink-800/30 border border-purple-300 dark:border-purple-900/50 rounded-xl p-5 shadow-sm">
								<h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-3 flex items-center">
									<i className="fas fa-trophy text-yellow-500 mr-2"></i>
									Олимпиады
								</h4>
								<ul className="space-y-2">
									<li className="flex items-center">
										<p className="font-medium">🥇 <span className="font-semibold text-glow-600 dark:text-glow-400">Победитель</span> ВсОШ по биологии 2025</p>
									</li>
									<li className="flex items-center">
										<p className="font-medium">🥇 <span className="font-semibold text-glow-600 dark:text-glow-400">Трехкратный призер</span> ВсОШ по химии 2023-2025</p>
									</li>
									<li className="flex items-center">
										<p className="font-medium">🥇 <span className="font-semibold text-glow-600 dark:text-glow-400">Призер</span> ВсОШ по биологии 2024</p>
									</li>
									
									<li className="italic mt-1">
										+ перечневые олимпиады (лень писать)
									</li>
								</ul>
							</div>
							
							<div className="bg-white dark:bg-pink-800/30 border border-purple-300 dark:border-purple-900/50 rounded-xl p-5 shadow-sm">
								<h4 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-3 flex items-center">
									<i className="fas fa-graduation-cap mr-2"></i>
									ЕГЭ
								</h4>
								<div className="space-y-2 font-semibold">
									<div className="flex justify-between items-center">
										<span>Химия</span>
										<span className="font-bold text-green-600 dark:text-green-400">97 баллов</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Русский язык</span>
										<span className="font-bold text-green-600 dark:text-green-400">91 балл</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Профильная математика</span>
										<span className="font-bold text-green-600 dark:text-green-400 whitespace-nowrap">84 балла</span>
									</div>
								</div>
							</div>
							
							<div className="md:col-span-2 bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20
							rounded-xl p-5 text-center border dark:border-purple-800/50 border-purple-300">
								<h4 className="font-bold text-2xl text-purple-800 dark:text-indigo-300 mb-2">
									<span className="text-2xl mr-2">🏆</span>
									Clash Royale
									<span className="text-2xl ml-2">🏆</span>
								</h4>
								<p className="text-center">
									
									<span className="ml-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">11 000 кубков</span>
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}