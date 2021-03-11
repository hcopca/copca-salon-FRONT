import React from "react";
import { Link } from "react-router-dom";
import HomeMitad from "../../components/HomeMitad";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <p href="#">
                      <span class="sr-only">Workflow</span>
                      <img
                        class="h-8 w-auto sm:h-10"
                        src="../../../trebol.png"
                        alt="img"
                      />
                    </p>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false">
                        <span class="sr-only">Open main menu</span>

                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <Link to="/contacto">Contacto</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/galeria">Galería</Link>
                  <Link to="/signup">Registrate</Link>
                  <Link to="/login">Iniciar sesión</Link>
                </div>
              </nav>
            </div>

            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div class="-mr-2"></div>
                </div>
              </div>
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">
                    El lugar ideal para encontrar el salón perfecto para el
                    evento de tus
                  </span>
                  <span class="block text-green-600 xl:inline"> Sueños</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  ¿Buscas otro tipo de evento? Nuestros salones cuentan con todo
                  lo necesario para alojar cualquier tipo de evento ¡De 60 hasta
                  900 invitados
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <Link
                      to="/signup"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Registrate cómo salón
                    </Link>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/all"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Salones
                    </Link>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/eventos"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Eventos
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/royal.jpg"
            alt=""
          />
        </div>
      </div>

      <HomeMitad />
      <Footer />
    </>
  );
}

export default Home;
