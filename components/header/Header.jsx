import {ThemeToggle} from './ThemeToggle.jsx'
import {useRef, useState} from 'react'
import useClickOutside from "../../hooks/useClickOutside.jsx"

const Header = () => {
    
    const [showMobileNav, setShowMobileNav] = useState(false)
    
    const [showSemesterNav, setShowSemesterNav] = useState(false)
    
    const semesterNavRef = useRef(null)
    
    const mobileMenuRef = useRef(null)
    
    
    useClickOutside(mobileMenuRef, () => setShowMobileNav(false))
    useClickOutside(semesterNavRef, () => setShowSemesterNav(false))
    
    
    return (
      <header id="Header"
        
        className="md:sticky top-0 z-40  py-4 md:pt-6 bg-primary-50/80 dark:bg-primary-900/80 backdrop-blur-md border-b border-gray-200 dark:border-mystic-900">
          <div className="w-full h-full mx-auto px-6 items-center flex justify-between">
                  <div className="flex items-center space-x-3">
                      <div className="w-15 h-15 gradient-bg rounded-xl flex items-center justify-center">
                          <i className="text-3xl fas fa-radiation text-white"></i>
                      </div>
                      <div className="block">
                          <h1 className="text-2xl md:text-3xl font-bold text-gradient">Kostasaurus</h1>
                          <p className="text-md md:text-base text-gray-600 dark:text-lime-50">FBB MSU
                              </p>
                      </div>
                  </div>
                  
                  <nav className="hidden lg:block">
                      <ul className="flex items-center space-x-8 -ml-20">
                          <li>
                              <a
                                href="index.html"
                                className="font-medium text-xl link-primary transition-colors"
                              >
                                  Главная
                              </a>
                          </li>
                          <li>
                              <a
                                href="index.html?/about"
                                className="font-medium text-xl link-primary transition-colors"
                              >
                                  Обо мне
                              </a>
                          </li>
                          <li
                          ref={semesterNavRef}
                          onMouseLeave={() => setTimeout(() =>setShowSemesterNav(!showSemesterNav), 100)}
                          >
                              <button
                              className="font-medium text-xl link-primary transition-colors"
                              onMouseEnter={() => setShowSemesterNav(!showSemesterNav)}
                              
                              >
                                  
                                  <i className={`pr-2 ${showSemesterNav ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                                  <span className="font-medium text-xl">Семестры</span>
                              </button>
                              
                              {showSemesterNav && (
                                <div
                                  id="semester-menu"
                                  className="absolute w-40 -ml-4 bg-white dark:bg-primary-900 rounded-lg shadow-lg border border-gray-200 dark:border-[#1c3024] z-100"
                                >
                                    <div className="flex flex-col">
                                        <a href="index.html?/semesters1"
                                           className="px-4 py-2 font-medium select-primary transition-colors">I семестр</a>
                                        <a href="index.html?/semesters2"
                                           className="px-4 py-2 font-medium  select-primary transition-colors">II семестр</a>
                                        <a href="index.html?/semesters3"
                                           className="px-4 py-2 font-medium  select-primary transition-colors">III семестр</a>
                                        
                                    </div>
                                </div>
                              )}
                          </li>
                          <li>
                              <a
                                href="https://fbb.msu.ru/"
                                target='_blank'
                                className="font-medium text-xl link-primary transition-colors"
                              >
                                  Сайт ФББ
                              </a>
                          </li>
                          
                      </ul>
                  </nav>
              
             
              <div className="pl-3 flex items-center justify-between space-x-4 md:space-x-3 lg:space-x-4"
              ref={mobileMenuRef}>
                  <div className="relative">
                      <button
                        id="mobile-menu-btn"
                        className="lg:hidden p-2"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                      >
                          <i className="fas fa-bars text-4xl"></i>
                      </button>
                      
                      
                  </div>
                  
                  {showMobileNav && (
                    <div
                      id="mobile-menu"
                      className="absolute right-0 mt-2 top-full w-48 bg-white dark:bg-[#0c1F10] rounded-lg shadow-lg border border-gray-200 dark:border-[#1c3024] z-50"
                    >
                        <div className="flex flex-col">
                            <a href="index.html"
                               className="px-4 py-2 font-medium select-primary transition-colors">Главная</a>
                            <a href="index.html?/about"
                               className="px-4 py-2 font-medium  select-primary transition-colors">Обо мне</a>
                            <a href="index.html?/semesters1"
                               className="px-4 py-2 font-medium  select-primary transition-colors">I семестр</a>
                            <a href="index.html?/semesters2"
                               className="px-4 py-2 font-medium  select-primary transition-colors">II семестр</a>
                            <a href="index.html?/semesters3"
                               className="px-4 py-2 font-medium  select-primary transition-colors">III семестр</a>
                            <a href="https://fbb.msu.ru/"
                               target='_blank'
                               className="px-4 py-2 font-medium  select-primary transition-colors">Сайт ФББ</a>
                            
                        </div>
                    </div>
                  )}
                  
                 
                  <div>
                      <ThemeToggle/>
                  </div>
              </div>
          </div>
          
          
          
      </header>
    )
}
export default Header