import React from "react";
import Navbar from "./Navbar";
export default function Contacto() {
  return (
    <>
      <Navbar />
      <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div class="space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Conoce a nuestro equipo de trabajo.
              </h2>
              <p class="text-xl text-gray-500">
                Son las personas responsables de llevar a cabo este proyecto que
                con esfuerzo y dedicación se ha logrado.
              </p>
            </div>
            <div class="lg:col-span-2">
              <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="/perfiles/hugo.jpg"
                      alt=""
                    />
                    <div class="font-medium text-lg leading-6 space-y-1">
                      <h3>Hugo Copca Lara</h3>
                      <p class="text-green-800">Founder</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1470139235/job-covers/000/042/274/42274-original.png?1470139235"
                      alt=""
                    />
                    <div class="font-medium text-lg leading-6 space-y-1">
                      <h3>Mike Nieva</h3>
                      <p class="text-green-800">Lead Teacher</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="/perfiles/image.png"
                      alt=""
                    />
                    <div class="font-medium text-lg leading-6 space-y-1">
                      <h3>Eduardo Zamarrón</h3>
                      <p class="text-green-800">Teacher Assistent</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="/perfiles/jorge.jpg"
                      alt=""
                    />
                    <div class="font-medium text-lg leading-6 space-y-1">
                      <h3>Jorge Martínez</h3>
                      <p class="text-green-800">Teacher Assistent</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////// CONTACTO DOS */}

      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div class="divide-y-2 divide-gray-200">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Contáctanos
              </h2>
              <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Correo
                  </h3>
                  <dl class="mt-2 text-base text-gray-500">
                    <div>
                      <dt class="sr-only">Email</dt>
                      <dd>Hugo: copcal79@gmail.com</dd>
                    </div>
                    <div class="mt-1">
                      <dt class="sr-only">Phone number</dt>
                      <dd></dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Github
                  </h3>
                  <dl class="mt-2 text-base text-gray-500">
                    <div>
                      <dt class="sr-only">github</dt>
                      <dd>Hugo: https://github.com/hcopca</dd>
                    </div>
                    <div class="mt-1">
                      <dt class="sr-only">Phone number</dt>
                      <dd></dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    LinkedIn
                  </h3>
                  <dl class="mt-2 text-base text-gray-500">
                    <div>
                      <dt class="sr-only">Email</dt>
                      <dd>
                        Hugo: www.linkedin.com/in/hugo-copca-lara-075292202
                      </dd>
                    </div>
                    <div class="mt-1">
                      <dt class="sr-only">Phone number</dt>
                      <dd></dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Say hello
                  </h3>
                  <dl class="mt-2 text-base text-gray-500">
                    <div>
                      <dt class="sr-only">Email</dt>
                      <dd>support@example.com</dd>
                    </div>
                    <div class="mt-1">
                      <dt class="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Lugar
              </h2>
              <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Hidalgo
                  </h3>
                  <div class="mt-2 text-base text-gray-500">
                    <p>42115</p>
                    <p class="mt-1">Pachuca Hgo. </p>
                  </div>
                </div>

                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Ironhack
                  </h3>
                  <div class="mt-2 text-base text-gray-500">
                    <p>ironhack.com</p>
                    <p class="mt-1">Campus México</p>
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
