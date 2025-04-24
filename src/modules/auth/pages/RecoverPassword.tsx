import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RecoverPassword = () => {
  return (
    <AuthLayout
      title="Recuperar contraseña"
      description="Asi como podemos ayudar a los demás, también podemos ayudarnos a nosotros mismos, y eso es lo que queremos hacer contigo."
      image="/Peace of mind-bro.svg"
      descriptionFooter="Todo lo que creas y sueñas, lo puedes lograr."
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="correo@gmail-hotmail.com..."
          />
        </div>

        <button className="w-full text-white bg-septenary cursor-pointer hover:bg-quinary focus:ring-4 focus:outline-none focus:ring-quinary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Recuperar contraseña
        </button>

        <div className="flex items-center justify-end mt-4">
          <Link to="/auth/login" className="text-sm text-white hover:underline">
            Recorde mi contraseña
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
