import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import SALON_SERVICE from "../services/salones";

export default function SalonesCliente() {
  const [salones, setSalones] = useState(null);

  useEffect(() => {
    SALON_SERVICE.show()
      .then(({ data }) => setSalones(data.salones))
      .catch((err) => console.log(err));
  }, []);
  if (!salones) return <p>Loading</p>;
  return (
    <div>
      <Navbar />
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Salones
      </h2>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {salones?.map((e, i) => {
            return (
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Placeholder"
                    class="block h-auto w-full"
                    src={e.imagen}
                  />

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <div className="text-lg text-indigo-600 font-bold">
                      Salon: {e.nombre}
                    </div>
                    <p>PPP $</p>
                    <p className="text-lg text-red-600 font-bold">{e.precio}</p>
                  </header>
                  <h1 className="text-lg text-align:left">
                    <h5>Detalles </h5>
                    {e.detalles}
                  </h1>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <p class="ml-2 text-sm font-bold">
                      Capacidad Mínima: {e.capacidadMin}
                    </p>
                    <p class="ml-2 text-sm font-bold">
                      Capacidad Máxima: {e.capacidadMax}
                    </p>

                    <i class="fa fa-heart"></i>
                  </footer>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
