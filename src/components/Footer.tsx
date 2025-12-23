import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-extrabold mb-2">MASTER COFFEE</h3>
          <p className="text-sm text-gray-300">
            Premium coffee with affordable price.
          </p>
        </div>

        {/* WHATSAPP */}
        <div>
          <h4 className="font-bold mb-3">WhatsApp</h4>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3 29l6.74-1.76a12.74 12.74 0 006.26 1.6c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.84-12.8-12.84zm0 22.88a10.03 10.03 0 01-5.16-1.42l-.36-.22-4 .98 1.06-3.9-.24-.4a9.99 9.99 0 01-1.56-5.44c0-5.52 4.48-10 10-10 5.52 0 10 4.48 10 10s-4.48 10-10 10z"/>
            </svg>
            <span>+62 812-3456-7890</span>
          </a>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h4 className="font-bold mb-3">Instagram</h4>
          <a
            href="https://https://www.instagram.com/master.coffee_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5C19.99 2 22 4.01 22 6.25v8.5C22 17.99 19.99 20 17.75 20h-8.5C4.01 20 2 17.99 2 14.75v-8.5C2 4.01 4.01 2 7.75 2z"/>
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10z"/>
              <circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
            <span>@mastercoffee</span>
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Master Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
