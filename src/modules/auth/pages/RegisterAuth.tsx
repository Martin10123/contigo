import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterAuth = () => {
  return (
    <AuthLayout
      description="Crea una cuenta y conéctate con personas que comparten tus intereses y preocupaciones. Comparte tus pensamientos y emociones, y vive una vida plena. No te sientas solo, estamos contigo."
      descriptionFooter="Recuerda que no estás solo, siempre hay alguien dispuesto a escucharte y apoyarte. No dudes en buscar ayuda si la necesitas."
      image="/Mental health-rafiki.svg"
      title="Regístrate!"
    >
      <form action="">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="mb-4 col-span-2">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pedro Pérez..."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nickname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Alias/Apodo
            </label>
            <input
              type="text"
              id="nickname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pedrito..."
            />
          </div>
        </div>

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
            placeholder="pedro@gmail.com..."
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

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="mb-4">
            <label
              htmlFor="cellphone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Telefono
            </label>
            <input
              type="number"
              id="cellphone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="3001234567..."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="birthdate"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="birthdate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              required
            />
            <span className="ml-2 text-sm font-medium text-gray-900">
              Acepto los términos y condiciones
            </span>
          </label>
        </div>

        <button className="w-full text-white bg-blue-600 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Registrarme
        </button>

        <p className="text-end text-sm font-light text-gray-500 mt-4">
          Ya tienes una cuenta?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Inicia sesión
          </Link>
        </p>

        <p className="text-end text-sm font-light text-gray-500 mt-2">
          Quieres entrar como invitado?{" "}
          <Link
            to="/auth/welcome"
            className="font-medium text-blue-600 hover:underline"
          >
            Invitado
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
