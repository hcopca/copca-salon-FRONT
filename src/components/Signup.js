import { React, useState } from "react";
import { useHistory } from "react-router";
import MY_SERVICE from "../services/index";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const history = useHistory();
  const handleInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.persist();
    MY_SERVICE.signup(form)
      .then(({ data }) => {
        history.push("/login");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <Navbar />
      <div class="font-sans antialiased bg-grey-lightest">
        <div class="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
          <div class="container mx-auto py-8">
            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
              <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Registrate, es totalmente gratis.
              </div>
              <form>
                <div class="py-4 px-8">
                  <div class="flex mb-4">
                    <div class="w-1/2 mr-1">
                      <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="first_name">
                        Nombre
                      </label>
                      <input
                        onChange={handleInput}
                        class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="first_name"
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                      />
                    </div>
                    <div class="w-1/2 ml-1">
                      <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="last_name">
                        Apellido
                      </label>
                      <input
                        onChange={handleInput}
                        class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        name="apellidoPat"
                        id="last_name"
                        type="text"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="telefono">
                      Teléfono
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="telefono"
                      type="Number"
                      placeholder="Número fijo o celular"
                    />

                    <div class="mb-4">
                      <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="email">
                        Email
                      </label>
                      <input
                        onChange={handleInput}
                        class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu dirección email"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="password">
                        Contraseña
                      </label>
                      <input
                        onChange={handleInput}
                        class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Tu contraseña"
                        pattern="[A-Za-z0-9!?-]{6}"
                        required
                      />
                      <p class="text-grey text-xs mt-1">
                        Mínimo 6 carácteres, una mayúscula y un número
                      </p>
                    </div>
                    <div class="flex items-center justify-center mt-8 ">
                      <button
                        onClick={submit}
                        className="bg-green-100 hover:bg-blue-dark-200 text-black font-bold py-2 px-4 rounded-full"
                        type="submit">
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <p class="text-center my-4">
                <p
                  href="#"
                  class="text-grey-dark text-sm no-underline hover:text-grey-darker">
                  ¿Ya tienes una cuenta?
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-100 hover:bg-green-200 md:py-2 md:text-lg md:px-10">
                    Inicia sesión
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <footer class="w-full bg-grey-lighter py-8">
            <div class="container mx-auto text-center px-8">
              <p class="text-grey-dark mb-2 text-sm">
                Este es un producto de <span class="font-bold">Lucky inc.</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
