import React, { useState } from 'react';
import './navigation.scss';

const Navigation = ({ setSelectedSection }) => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái của navbar (mở/đóng)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={`navbar ${isOpen ? 'open' : 'close'}`}>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? "=" : "="} {/* Tùy chỉnh nút khi mở hoặc đóng */}
      </button>
      <div className={`flex flex-col justify-between h-full navbar-links`}>
        <div className="flex flex-col justify-center items-center p-4 text-white">
          <a
            href='#home'
            className="vertical-text text-base uppercase border-l-[2.5px] border-yellow hover:border-l-[2.5px] hover:border-yellow"
            onClick={(e) => { e.preventDefault(); setSelectedSection('home'); }} >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="opacity-60"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(90deg)", background: "white !important", fill: "black" }}
            >
              <path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"></path>
              <path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"></path>
            </svg>
          </a>
        </div>

        <nav className="flex flex-col items-center gap-6 text-white p-4">
          <a 
            href='#world-map'
            className="vertical-text text-sm hover:border-l-[2.5px] hover:border-yellow uppercase"
            onClick={(e) => { e.preventDefault(); setSelectedSection('world-map'); }}
            >Hành trình
          </a>
          <a 
            href='#cards'
            className="vertical-text text-sm hover:border-l-[2.5px] hover:border-yellow uppercase"
            onClick={(e) => { e.preventDefault(); setSelectedSection('cards'); }}
            >Nhân Vật Có Tầm Ảnh Hưởng Đến Bác Hồ</a>
          <a 
            href='#heritage'
            className="vertical-text text-sm hover:border-l-[2.5px] hover:border-yellow uppercase"
            onClick={(e) => { e.preventDefault(); setSelectedSection('heritage'); }}
            >Di Sản
          </a>
          <a
            href='#quizz' 
            className="vertical-text text-sm hover:border-l-[2.5px] hover:border-yellow uppercase"
            onClick={(e) => { e.preventDefault(); setSelectedSection('quizz'); }}
            >Q&A
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
