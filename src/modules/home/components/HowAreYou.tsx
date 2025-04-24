import { breathe, daily } from "../../../assets/icons";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export const HowAreYou = () => {
  return (
    <>
      <div>
        <h1 className="!text-4xl text-center font-bold text-gray-800 mb-4">
          Holaaaa, ¿Como te sientes hoy, Martin? 😊
        </h1>

        <p className="text-center text-gray-700 font-light mb-4">
          Hoy es 23 de octubre de 2025, y es un buen día para reflexionar sobre
          cómo te sientes.
        </p>

        <p className="text-center text-gray-700 font-light mb-4">
          Recuerda que eres importante y que tus emociones son válidas. No estás
          solo/a. Aquí estamos para apoyarte en tu camino hacia el bienestar
          emocional.
        </p>

        <p className="text-center text-gray-700 font-light mb-4">
          ¿Qué tal va tu día?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 border-b border-quinary pb-4 mb-4">
        <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
          Excelente 🤗
        </button>
        <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
          Bien, pero podria mejorar 🙂
        </button>
        <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
          Me siento mal 😔
        </button>
        <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
          Me siento muy mal 😢
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No te olvides de:{" "}
        </h2>

        <div>
          <div className="flex items-center gap-4 mb-4 border border-quinary p-4 rounded-lg">
            <img className="size-12" src={breathe} alt="Respira" />
            <p>Respirar y relájate, 5 minutos de respiración consciente</p>
          </div>
          <div className="flex items-center gap-4 mb-4 border border-quinary p-4 rounded-lg">
            <img className="size-12" src={daily} alt="Diario" />
            <p>Escribir lo que sientes y reflexionar sobre tu día</p>
          </div>
          <div className="flex items-center gap-4 mb-4 border border-quinary p-4 rounded-lg">
            <MdOutlineTipsAndUpdates size={45} />
            <p>Hacer ejercicios, meditaciones, ver videos útiles</p>
          </div>
        </div>
      </div>
    </>
  );
};
