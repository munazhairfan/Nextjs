export default function Header() {
  return (
    <>
      <nav className="h-12 bg-gradient-to-r from-orange-300 via-amber-200 via-teal-200 via-pink-200 to-emerald-300">
        <span className="w-2/5 flex items-center justify-evenly ">
          <a className="text-white text-3xl font-black">Portfolio</a>
          <a href="./" className="text-white text-xl mt-2.5 self-center hover:underline">Home</a>
          <a href="https://www.linkedin.com/in/munazha-irfan-0534742ba/" target="_blank" className="text-white text-2xl mt-2.5 hover:text-slate-100">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/munazhairfan" target="_blank" className="text-white text-2xl mt-2.5 hover:text-slate-100">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=munazhairfan@gmail.com" target="_blank" className="text-white text-2xl mt-2.5 hover:text-slate-100">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </span>
      </nav>
    </>
  );
}
