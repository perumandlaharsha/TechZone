import "./App.css";
import { Footer } from "./footer/Footer";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-x-hidden">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
};