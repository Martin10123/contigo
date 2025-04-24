import { useState } from "react";
import { photouser } from "../assets/images";
import { AiOutlineHistory } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsCloudMoon } from "react-icons/bs";

interface NavbarProps {
  handleSidebar: () => void;
  handleNotificationsHome: () => void;
}

export const Navbar = ({
  handleSidebar,
  handleNotificationsHome,
}: NavbarProps) => {
  const [openProfileDrop, setOpenProfileDrop] = useState(false);

  const handleOpenProfileDrop = () => {
    setOpenProfileDrop(!openProfileDrop);
  };

  return (
    <header className="flex justify-between items-center bg-senary p-4 shadow sticky top-0 z-50">
      <img
        className="size-13 rounded-full cursor-pointer"
        src="/logo-contigo.webp"
        alt="Logo - Contigo"
      />

      <div className="relative flex items-center gap-1">
        <div
          className="bg-quaternary p-2.5 rounded-full flex items-center justify-between cursor-pointer lg:hidden"
          onClick={handleSidebar}
        >
          <CgMenuRightAlt size={25} />
        </div>

        <div
          className="bg-quaternary p-2.5 rounded-full flex items-center justify-between cursor-pointer xl:hidden"
          onClick={handleNotificationsHome}
        >
          <LuBellRing size={25} />
        </div>

        <img
          className="size-11 rounded-full cursor-pointer"
          src={photouser}
          alt="photo user"
          onClick={handleOpenProfileDrop}
        />

        <ul
          className={`absolute right-0 top-16 border border-gray-200 bg-quinary shadow-lg rounded-lg p-4 w-90 transition-opacity duration-300 ease-in-out ${
            openProfileDrop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <li className="flex gap-2 border-b border-quaternary py-4 rounded-xl">
            <img
              className="size-20 rounded-2xl"
              src={photouser}
              alt="photo user"
            />
            <div>
              <p className="text-xl font-semibold text-gray-800">
                Nombre Apellido
              </p>
              <p className="text-sm text-gray-500 font-medium">Apodo</p>
            </div>
          </li>
          <li className="flex items-center gap-2 border-b border-quaternary py-4 cursor-pointer px-2 rounded-xl hover:bg-quaternary">
            <FaRegUserCircle size={22} />
            Mis datos
          </li>
          <li className="flex items-center gap-2 border-b border-quaternary py-4 cursor-pointer px-2 rounded-xl hover:bg-quaternary">
            <AiOutlineHistory size={22} />
            Historial emocional
          </li>
          <li className="flex items-center gap-2 border-b border-quaternary py-4 cursor-pointer px-2 rounded-xl hover:bg-quaternary">
            <IoSettingsOutline size={22} />
            Configuraciones
          </li>
          <li className="flex items-center gap-2 border-b border-quaternary py-4 cursor-pointer px-2 rounded-xl hover:bg-quaternary">
            <IoIosHelpCircleOutline size={22} />
            Ayuda
          </li>
          <li className="flex items-center gap-2 border-b text-red-500 border-quaternary py-4 cursor-pointer px-2 rounded-xl hover:bg-red-400">
            <MdLogout size={22} />
            Cerrar sesión
          </li>

          <li className="flex justify-center items-center gap-2 border-b border-quaternary py-4 rounded-xl">
            <div className="flex items-center gap-2">
              <TiWeatherPartlySunny size={25} />
              <p className="text-sm text-gray-700">Claro</p>
            </div>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-septenary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-quinary dark:peer-checked:bg-quinary"></div>
            </label>

            <div className="flex items-center gap-2">
              <BsCloudMoon size={25} />
              <p className="text-sm text-gray-700">Oscuro</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
