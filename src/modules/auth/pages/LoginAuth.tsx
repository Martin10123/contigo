import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginAuth = () => {
  return (
    <AuthLayout
      description="Ingresa y sientete libre de compartir tus pensamientos y emociones, expresa lo que sientes y vive una vida plena, no te sientas solo, estamos contigo."
      descriptionFooter="Recuerda que no estás solo, siempre hay alguien dispuesto a escucharte y apoyarte. No dudes en buscar ayuda si la necesitas."
      image="/Mental health-cuate.svg"
      title="Bienvenido de nuevo!"
    >
      <form action="">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="correo@gmail-hotmail.com..."
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="••••••••••••••••••"
          />
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounde"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Recordar sesión
          </label>
        </div>

        <button className="w-full text-white bg-septenary cursor-pointer hover:bg-quinary focus:ring-4 focus:outline-none focus:ring-quinary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Iniciar sesión
        </button>

        <div className="flex justify-between mt-4">
          <Link
            to="/auth/recover-password"
            className="text-sm text-white hover:underline"
          >
            Olvidaste tu contraseña?
          </Link>

          <div className="flex flex-col items-end">
            <Link
              to="/auth/register"
              className="text-sm text-white hover:underline"
            >
              Crear cuenta
            </Link>

            <Link
              to="/auth/welcome"
              className="text-sm text-white hover:underline"
            >
              Como invitado
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
