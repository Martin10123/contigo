import { BsDoorClosed } from "react-icons/bs";

interface NotificationsHomeProps {
  handleNotificationsHome: () => void;
  openNotificationsHome: boolean;
}

export const NotificationsHome = ({
  handleNotificationsHome,
  openNotificationsHome,
}: NotificationsHomeProps) => {
  return (
    <aside
      className={`w-full fixed top-0 left-0 h-screen bg-quinary shadow-lg p-4 z-50 transition-opacity duration-300 ease-in-out xl:relative xl:bg-transparent xl:shadow-none xl:opacity-100 xl:h-full xl:z-10 xl:pointer-events-auto xl:flex xl:justify-end ${
        openNotificationsHome ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="xl:max-w-sm">
        <div className="flex justify-between items-center border-b border-quaternary pb-2 mb-2">
          <h2 className="text-xl font-bold text-white text-center xl:text-septenary">
            Notificaciones
          </h2>

          <div
            className="flex items-center justify-center bg-quaternary rounded-full p-2 cursor-pointer xl:hidden"
            onClick={handleNotificationsHome}
          >
            <BsDoorClosed size={25} />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2 overflow-auto h-[calc(100vh-80px)] xl:h-screen">
          <div className="bg-quinary rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-lg font-bold text-white">
              Notificaciones - (foros de apoyo)
            </h3>

            <p className="text-sm text-white">
              Recuerda que puedes participar en los foros de apoyo y compartir
              tus experiencias con otros usuarios.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="bg-quaternary text-black rounded-lg px-4 py-2 cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
                Ir a
              </button>
              <button className="bg-septenary text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                Leído
              </button>
            </div>
          </div>
          <div className="bg-quinary rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-lg font-bold text-white">
              Notificaciones - (foros de apoyo)
            </h3>

            <p className="text-sm text-white">
              Recuerda que puedes participar en los foros de apoyo y compartir
              tus experiencias con otros usuarios.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="bg-quaternary text-black rounded-lg px-4 py-2 cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
                Ir a
              </button>
              <button className="bg-septenary text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                Leído
              </button>
            </div>
          </div>
          <div className="bg-quinary rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-lg font-bold text-white">
              Notificaciones - (foros de apoyo)
            </h3>

            <p className="text-sm text-white">
              Recuerda que puedes participar en los foros de apoyo y compartir
              tus experiencias con otros usuarios.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="bg-quaternary text-black rounded-lg px-4 py-2 cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
                Ir a
              </button>
              <button className="bg-septenary text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                Leído
              </button>
            </div>
          </div>
          <div className="bg-quinary rounded-lg p-4 shadow-md flex flex-col">
            <h3 className="text-lg font-bold text-white">
              Notificaciones - (foros de apoyo)
            </h3>

            <p className="text-sm text-white">
              Recuerda que puedes participar en los foros de apoyo y compartir
              tus experiencias con otros usuarios.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="bg-quaternary text-black rounded-lg px-4 py-2 cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
                Ir a
              </button>
              <button className="bg-septenary text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                Leído
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
