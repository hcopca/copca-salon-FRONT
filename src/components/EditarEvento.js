import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import EVENTO_SERVICE from "../services/eventos";
import GENERAL_SERVICE from "../services/upload";
import MY_SERVICE from "../services/index";

import Side from "./Side";

export const EditarEvento = (props) => {
  const [form, setForm] = useState({});
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null);
  const [eventos, setEventos] = useState(null);

  useEffect(() => {
    MY_SERVICE.currentUser()
      .then(({ data }) => {
        if (data.user) {
          setUser({ ...data.user });
        }
      })
      .catch((err) => console.log(err));
    EVENTO_SERVICE.detail(props.match.params.id)
      .then(({ data: { evento } }) => {
        setEventos(evento);
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
  const handleImage = async (e) => {
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    const response = await GENERAL_SERVICE.upload(formData);
    const { img } = response.data;
    setImg(img);
  };

  const submit = (e) => {
    e.persist();
    const data = {
      nombre: form.nombre,
      tipo: form.tipo,
      imagen: img,
    };

    EVENTO_SERVICE.edit(data, props.match.params.id)
      .then(({ data }) => {
        history.push("/dashboard/eventos");
      })
      .catch((err) => console.log(err.response));
  };
  console.log(eventos);
  if (!eventos) return <p>Loading</p>;
  return (
    <Side>
      <h2>Editar Eventos</h2>
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
                    defaultValue={eventos.nombre}
                  />
                </div>

                <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="first_name">
                      Numero
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="tipo"
                      type="text"
                      placeholder="Tipo de evento"
                      defaultValue={eventos.tipo}
                    />
                  </div>
                </div>
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="last_name">
                  Imagen
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="photo"
                  id="photo"
                  type="file"
                  onChange={handleImage}
                />

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
