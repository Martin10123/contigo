import { Navbar } from "../../components/Navbar";
import { SidebarHome } from "./components/SidebarHome";
import { HowAreYou } from "./components/HowAreYou";
import { OptionsDoingToday } from "./components/OptionsDoingToday";
import { ProgressDay } from "./components/ProgressDay";
import { NotificationsHome } from "./components/NotificationsHome";
import { useState } from "react";

export const HomePage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openNotificationsHome, setOpenNotificationsHome] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleNotificationsHome = () => {
    setOpenNotificationsHome(!openNotificationsHome);
  };

  return (
    <div className="before:content before:bg-quaternary before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-50">
      <Navbar
        handleSidebar={handleSidebar}
        handleNotificationsHome={handleNotificationsHome}
      />

      <main className="!grid grid-cols-1 lg:grid-cols-3 lg:p-4 xl:grid-cols-4">
        <SidebarHome handleSidebar={handleSidebar} openSidebar={openSidebar} />

        <section className="px-4 pt-8 col-span-2 lg:max-w-xl mx-auto lg:pt-0">
          <div>
            <HowAreYou />

            <OptionsDoingToday />

            <ProgressDay />
          </div>
        </section>

        <NotificationsHome
          handleNotificationsHome={handleNotificationsHome}
          openNotificationsHome={openNotificationsHome}
        />
      </main>

      <footer className="bg-senary p-4 text-center text-white w-full">
        <p className="text-sm">
          © {new Date().getFullYear()} Contigo. Todos los derechos reservados.
        </p>
        <p className="text-sm">Desarrollado por el equipo de Contigo</p>
        <p className="text-sm">
          Contigo es una plataforma de bienestar emocional
        </p>
      </footer>
    </div>
  );
};
