import React from "react";
import Navbar from "./Navbar";
export default function Galeria() {
  return (
    <>
      <Navbar />
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Galeria
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A continuación las fotos de pocos de los muchos salones que están
              registrados.
            </p>
          </div>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="/royal.jpg" alt="" />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-green-600">Salón Gallia</p>

                  <p class="text-xl font-semibold text-gray-900">
                    Ubicado en Pachuca, Hgo.
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0"></div>
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="/evento-uno.jpg"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">Salón Prime</p>

                  <p class="text-xl font-semibold text-gray-900">
                    Ubicado en Pachuca Hgo.
                  </p>
                  <p class="mt-3 text-base text-gray-500"></p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span class="sr-only">Brenna Goyette</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Invitada</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-10">Mar 10, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>Salón muy amplio con un diseño increíble</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="/terraza-dentro.jpg"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    Terraza Aspen
                  </p>

                  <p class="text-xl font-semibold text-gray-900">
                    Pertenece a Gallia
                  </p>
                  <p class="mt-3 text-base text-gray-500"></p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span class="sr-only">Invitada</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      Daniela Metz
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-02-12">Feb 12, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>Excelente ambiente al aire libre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
