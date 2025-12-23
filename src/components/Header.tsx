type HeaderProps = {
  cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="bg-[#ffe03b]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/images/mastercoffee logo.png"
            alt="Master Coffee Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-extrabold text-lg tracking-wide">
            MASTER COFFEE
          </span><object data="" type=""></object>
        </div>

        {/* CENTER: MENU */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-semibold text-sm">
            <li>
              <a href="#menu" className="hover:text-[#e50914]">
                MENU
              </a>
            </li>
            <li>
              <a href="#promo" className="hover:text-[#e50914]">
                PROMO
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#e50914]">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* RIGHT: APP BUTTON + CART */}
        <div className="flex items-center gap-4">

          {/* GOOGLE PLAY */}
          <img
            src="/images/play-store logo.png"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />

          {/* APP STORE */}
          <img
            src="/images/apps-store logo.png"
            alt="App Store"
            className="h-7 cursor-pointer"
          />

          {/* CART */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4
                   M7 13l-1.35 2.7a1 1 0 00.9 1.45h12
                   M7 13l.4-8
                   M16 16a1 1 0 11-2 0
                   M10 16a1 1 0 11-2 0"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
