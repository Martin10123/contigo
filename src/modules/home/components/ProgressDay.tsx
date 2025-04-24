import {
  bad,
  happy,
  normal,
  injuried,
  sohappy,
  verybad,
} from "../../../assets/icons";

export const ProgressDay = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8 text-center">
        ¿Como me he sentido en los últimos días?
      </h2>

      <div className="grid gap-4 border border-quinary p-4 rounded-lg mb-4">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <img
            src={injuried}
            alt="injuried"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
          <img
            src={verybad}
            alt="verybad"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
          <img
            src={bad}
            alt="bad"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
          <img
            src={normal}
            alt="normal"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
          <img
            src={happy}
            alt="happy"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
          <img
            src={sohappy}
            alt="sohappy"
            className="size-12 cursor-pointer hover:scale-120 transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <div className="flex flex-col flex-nowrap justify-end w-full h-4 bg-quinary rounded-full overflow-hidden">
            <div
              className="rounded-full h-full overflow-hidden bg-septenary"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div>
          <p className="text-gray-700">
            Has estado bien en los últimos días, sigue así! Recuerda que tus
            emociones son válidas y que está bien sentirte así. No estás solo/a.
            Aquí estamos para apoyarte en tu camino hacia el bienestar
            emocional.😊
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8 text-center">
              ¿Es correcto esto? ¿Quieres cambiar algo?{" "}
            </h2>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                Si, es correcto
              </button>

              <button className="bg-quinary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-septenary transform hover:scale-105 transition duration-300 ease-in-out">
                No, quiero cambiarlo
              </button>

              <button className="col-span-2 bg-septenary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-quinary transform hover:scale-105 transition duration-300 ease-in-out">
                ¿Te gustaria hablar con alguien?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
