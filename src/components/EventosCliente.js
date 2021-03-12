import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import EVENTO_SERVICE from "../services/eventos";

export default function EventosCliente() {
  const [eventos, setEventos] = useState(null);

  useEffect(() => {
    EVENTO_SERVICE.show()
      .then(({ data }) => setEventos(data.eventos))
      .catch((err) => console.log(err));
  }, []);
  if (!eventos) return <p>Loading</p>;
  return (
    <div>
      <Navbar />
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Tipos de evento
      </h2>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {eventos?.map((e, i) => {
            return (
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Imágen del evento"
                    class="block h-auto w-full"
                    src={e.imagen}
                  />

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4 ">
                    <h1 class="text-lg text-blue-900 font-bold">
                      <h5 class="flex items-center justify-between leading-tight p-2 md:p-4 ">
                        Salón:{" "}
                      </h5>
                      {e.nombre}
                    </h1>
                    <h1 class="text-lg text-red-900 font-bold">
                      <h5 class="flex items-center justify-between leading-tight p-2 md:p-4">
                        Contacto:{" "}
                      </h5>
                      {e.tipo}
                    </h1>
                  </header>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
