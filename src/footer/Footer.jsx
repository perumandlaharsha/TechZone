import { footerData, footSocial } from "./footerData";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl text-white mb-4">Tech-Zone</h2>
          <p className="text-sm mb-5 leading-relaxed">
            Subscribe to our Email alerts to receive early discount offers,
            and new products info.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mb-3 bg-black border border-gray-600 text-sm"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm">
            Subscribe
          </button>
        </div>

        {footerData.map((section) => (
          <div key={section.id}>
            <h3 className="text-white mb-4 font-medium">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2025 | All Rights Reserved
          </p>
          <div className="flex gap-6 text-xl">
            {footSocial.map(item => 
                <Link key={item.id} to={item.path} className="hover:text-white">
                    {item.icon}
                </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};