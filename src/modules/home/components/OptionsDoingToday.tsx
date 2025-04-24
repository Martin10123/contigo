export const OptionsDoingToday = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8 text-center">
        ¿Qué quieres hacer hoy?
      </h2>

      <div className="grid grid-cols-2 gap-2 border-b border-quinary pb-4 mb-4">
        <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
          Quiero escribir en mi diario
        </button>
        <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
          Quiero ver los foros
        </button>
        <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
          Quiero entrar a un grupo de apoyo
        </button>
        <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
          Quiero hablar con un mentor
        </button>
        <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
          Quiero ver ejercicios, meditaciones, videos útiles
        </button>
        <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
          Me gustaria hablar con mi psicologa (IA)
        </button>
      </div>
    </div>
  );
};
