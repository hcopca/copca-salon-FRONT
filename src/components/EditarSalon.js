import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import SALON_SERVICE from "../services/salones";
import GENERAL_SERVICE from "../services/upload";
import MY_SERVICE from "../services/index";

import Side from "./Side";

export const EditarSalon = (props) => {
  const [form, setForm] = useState({});
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null);
  const [salon, setSalon] = useState(null);

  useEffect(() => {
    MY_SERVICE.currentUser()
      .then(({ data }) => {
        if (data.user) {
          setUser({ ...data.user });
        }
      })
      .catch((err) => console.log(err));
    SALON_SERVICE.detail(props.match.params.id)
      .then(({ data: { salon } }) => {
        setSalon(salon);
        setImg(salon.imagen);
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
      capacidadMin: form.capacidadMin,
      capacidadMax: form.capacidadMax,
      detalles: form.detalles,
      imagen: img,
      userId: user._id,
    };

    SALON_SERVICE.edit(data, props.match.params.id)
      .then(({ data }) => {
        history.push("/dashboard/salones");
      })
      .catch((err) => console.log(err.response));
  };
  console.log(form);
  if (!salon) return <p>Loading</p>;
  return (
    <Side>
      <h2>Editar Salon</h2>
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
                    defaultValue={salon.nombre}
                  />
                </div>

                <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="first_name">
                      Capacidad Mínima
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="capacidadMin"
                      type="text"
                      placeholder="Capacidad Mínima"
                      defaultValue={salon.capacidadMin}
                    />
                  </div>
                  <div class="w-1/2 ml-1">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="last_name">
                      Capacidad Máxima
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="capacidadMax"
                      type="number"
                      placeholder="Capacidad máxima"
                      defaultValue={salon.capacidadMax}
                    />
                  </div>
                  <div class="w-1/2 ml-1">
                    <label
                      class="block text-grey-darker text-sm font-bold mb-2"
                      for="last_name">
                      Precio
                    </label>
                    <input
                      onChange={handleInput}
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="precio"
                      type="number"
                      placeholder="Precio"
                      defaultValue={salon.precio}
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="telefono">
                    Detalles
                  </label>
                  <textarea
                    onChange={handleInput}
                    name="detalles"
                    class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    placeholder="Describe lo mejor que puedas tu salón"
                    defaultValue={salon.detalles}
                  />
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
