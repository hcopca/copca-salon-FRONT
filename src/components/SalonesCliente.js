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
      <h1>Salones</h1>
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

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <h5>Nombre del salón: </h5>
                      {e.nombre}
                    </h1>
                    <p class="text-grey-darker text-sm">
                      Precio por${e.precio}
                    </p>
                  </header>
                  <h1 class="text-lg">
                    <h5>Detalles </h5>
                    {e.detalles}
                  </h1>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <p class="ml-2 text-sm">
                      Capacidad Mínima: {e.capacidadMin}
                    </p>
                    <p class="ml-2 text-sm">
                      Capacidad Máxima: {e.capacidadMax}
                    </p>

                    <span class="hidden">Like</span>
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
