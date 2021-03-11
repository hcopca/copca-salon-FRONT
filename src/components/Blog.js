import React from "react";
import Navbar from "./Navbar";
export default function Blog() {
  return (
    <>
      <Navbar />
      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Publicaciones Recientes
            </h2>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
              Puedes observar los testimonios de personas que nos han contado su
              experiencia después del evento.
            </p>
          </div>
          <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div>
              <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Comentario
                </span>
              </div>

              <p class="text-xl font-semibold text-gray-900">Graduación</p>
              <p class="mt-3 text-base text-gray-500">
                "Asisti a la Graduación de Derecho, buen servicio y atención,
                excelente que tengan personal de seguridad, meseros muy atentos,
                baños limpios, comida muy rica y salones muy bonitos. Super
                recomendado desde CDMX".
              </p>

              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <span class="sr-only">Paul York</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900"></p>
                  <p>Sergio Pat</p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">Mar 16, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>Salón Prime</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  Comentario
                </span>
              </div>

              <p class="text-xl font-semibold text-gray-900">Boda</p>
              <p class="mt-3 text-base text-gray-500">
                "El servicio es de excelencia, el personal está altamente
                capacitado, las instalaciones son de buen gusto. Los costos
                accesibles".
              </p>

              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <span class="sr-only">Dessie Ryan</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900"></p>
                  <p>Liz Madorran</p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-10">Mar 10, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>Salón Aspen</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Comentario
                </span>
              </div>

              <p class="text-xl font-semibold text-gray-900">XV AÑOS</p>
              <p class="mt-3 text-base text-gray-500">
                "La comida excelente y el personal es muy atento !!! Sin duda lo
                recomiendo. El lugar muy bonito".
              </p>

              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <span class="sr-only">Easer Collins</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <p>Gabriela Saenz</p>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-02-12">Feb 12, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>Salón Gallia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div>
              <div>
                <a href="#" class="inline-block">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </a>
              </div>
              <a href="#" class="block mt-4">
                <p class="text-xl font-semibold text-gray-900">
                  Boost your conversion rate
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </a>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Paul York</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#">Paul York</a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">Mar 16, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <a href="#" class="inline-block">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Video
                  </span>
                </a>
              </div>
              <a href="#" class="block mt-4">
                <p class="text-xl font-semibold text-gray-900">
                  How to use search engine optimization to drive sales
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </a>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Dessie Ryan</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#">Dessie Ryan</a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-10">Mar 10, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <a href="#" class="inline-block">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Case Study
                  </span>
                </a>
              </div>
              <a href="#" class="block mt-4">
                <p class="text-xl font-semibold text-gray-900">
                  Improve your customer experience
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  iure iusto fugiat commodi sequi.
                </p>
              </a>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Easer Collins</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#">Easer Collins</a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-02-12">Feb 12, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>11 min read</span>
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
