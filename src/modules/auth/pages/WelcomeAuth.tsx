import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const WelcomeAuth = () => {
  return (
    <AuthLayout
      description="Este es un espacio seguro y gratuito, creado para acompañarte en los
            momentos difíciles. Aquí puedes expresarte libremente, conectar con
            personas que te entienden y recibir apoyo sin juicios. No estás
            sol@, estamos contigo."
      descriptionFooter="Tu espacio seguro para hablar y sanar"
      image="/Mental health-bro.svg"
      title="Bienvenido a Contigo"
    >
      <div className="flex flex-col gap-2 mt-4 mb-4">
        <Link
          to="/auth/login"
          className="w-full !bg-quaternary py-3 px-4 text-sm font-medium rounded-lg cursor-pointer border border-transparent text-center text-gray-800 hover:opacity-75 focus:outline-hidden focus:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
        >
          Ingresar
        </Link>
        <Link
          to="/auth/register"
          className="w-full !bg-septenary py-3 px-4 text-sm font-medium rounded-lg cursor-pointer border border-transparent text-center text-gray-800 hover:opacity-75 focus:outline-hidden focus:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
        >
          Registrarme
        </Link>
        <Link
          to="/"
          className="w-full !bg-quaternary py-3 px-4 text-sm font-medium rounded-lg cursor-pointer border border-transparent text-center text-gray-800 hover:opacity-75 focus:outline-hidden focus:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
        >
          Explorar como invitado
        </Link>
      </div>
    </AuthLayout>
  );
};
