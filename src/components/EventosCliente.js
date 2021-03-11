import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import EVENTO_SERVICE from "../services/eventos";

export default function EventosCliente() {
  const history = useHistory();
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
      <h1>TIPOS DE EVENTOS</h1>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {eventos?.map((e, i) => {
            return (
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Imágen del evento"
                      class="block h-auto w-full"
                      src={e.imagen}
                    />
                  </a>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="#">
                        <h5>Nombre del salón: </h5>
                        {e.nombre}
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                      Número de contacto: {e.tipo}
                    </p>
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
