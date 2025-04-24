import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  books,
  cap,
  daily,
  forum,
  group,
  help,
  home,
} from "../../../assets/icons";

interface SidebarHomeProps {
  openSidebar: boolean;
  handleSidebar: () => void;
}

export const SidebarHome = ({
  handleSidebar,
  openSidebar,
}: SidebarHomeProps) => {
  return (
    <section
      className={`w-full fixed top-0 left-0 h-screen bg-quaternary shadow-lg p-4 z-50 transition-opacity duration-300 ease-in-out lg:relative lg:shadow-none lg:opacity-100 lg:h-full lg:z-10 lg:pointer-events-auto lg:max-w-sm ${
        openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <ul className="grid gap-1.5">
          <li className="flex justify-between items-center border-b border-white pb-4 lg:hidden">
            <img
              className="size-13 rounded-full cursor-pointer"
              src="/logo-contigo.webp"
              alt="Logo - Contigo"
            />

            <IoIosCloseCircleOutline
              size={30}
              color="#000000"
              onClick={handleSidebar}
              className="cursor-pointer"
            />
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer mt-4 px-2 rounded-xl hover:bg-septenary lg:py-6 lg:mt-0">
            <img className="size-8" src={home} alt="Diario" />
            <div>
              <p className="text-base font-semibold text-gray-800">Home</p>
              <p className="text-sm text-gray-500 font-light">
                Contigo, tu espacio de bienestar emocional
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={daily} alt="Diario" />
            <div>
              <p className="text-base font-semibold text-gray-800">Diario</p>
              <p className="text-sm text-gray-500 font-light">
                Escribe lo que sientes y reflexiona sobre tu día
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={forum} alt="Foros" />
            <div>
              <p className="text-base font-semibold text-gray-800">Foros</p>
              <p className="text-sm text-gray-500 font-light">
                Ver hilos y compartir con otros
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={group} alt="Grupos" />
            <div>
              <p className="text-base font-semibold text-gray-800">Grupos</p>
              <p className="text-sm text-gray-500 font-light">
                Entrar a un grupo de apoyo temático
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={cap} alt="Mentores" />
            <div>
              <p className="text-base font-semibold text-gray-800">Mentores</p>
              <p className="text-sm text-gray-500 font-light">
                Hablar con un estudiante de psicología
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={books} alt="Recursos" />
            <div>
              <p className="text-base font-semibold text-gray-800">Recursos</p>
              <p className="text-sm text-gray-500 font-light">
                Ver ejercicios, meditaciones, videos útiles
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 border-b border-gray-400 py-4 cursor-pointer px-2 rounded-xl hover:bg-septenary lg:py-6">
            <img className="size-8" src={help} alt="Recursos" />

            <div>
              <p className="text-base font-semibold text-gray-800">
                Estoy en crisis
              </p>
              <p className="text-sm text-gray-500 font-light">
                Líneas de ayuda, chat urgente o activar una alerta.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
