import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import EXTRA_SERVICE from "../services/extras";
import MY_SERVICE from "../services/index";

import Side from "./Side";

export const EditarExtra = (props) => {
  const [form, setForm] = useState({});
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

  useEffect(() => {
    MY_SERVICE.currentUser()
      .then(({ data }) => {
        if (data.user) {
          setUser({ ...data.user });
        }
      })
      .catch((err) => console.log(err));
    EXTRA_SERVICE.detail(props.match.params.id)
      .then(({ data: { extra } }) => {
        setExtra(extra);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

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
    const data = {
      nombre: form.nombre,
      cantidad: form.cantidad,
    };

    EXTRA_SERVICE.edit(data, props.match.params.id)
      .then(({ data }) => {
        history.push("/dashboard/extras");
      })
      .catch((err) => console.log(err.response));
  };
  console.log(form);
  if (!extra) return <p>Loading</p>;
  return (
    <Side>
      <h2>Editar Extra</h2>
      <div>
        <div class="w-full bg-grey-lightest">
          <div class="container mx-auto py-8">
            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
              <div class="py-4 px-8">
                <div class="mb-4">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name">
                    Nombre
                  </label>
                  <input
                    onChange={handleInput}
                    class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    defaultValue={extra.nombre}
                  />
                </div>

                <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="first_name">
                      Tipo
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="cantidad"
                      type="text"
                      placeholder="Cantidad"
                      defaultValue={extra.cantidad}
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <div class="flex items-center justify-center mt-8">
                    <button
                      onClick={submit}
                      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded-full"
                      type="submit">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Side>
  );
};
