import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Side from "./Side";
import EVENTO_SERVICE from "../services/eventos";
import MY_SERVICE from "../services/index";
import { Link } from "react-router-dom";

export const Eventos = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [eventos, setEventos] = useState(null);

  const agregar = (e) => {
    e.preventDefault();
    history.push("/dashboard/eventos/crear");
  };

  useEffect(() => {
    MY_SERVICE.currentUser()
      .then(({ data }) => {
        EVENTO_SERVICE.eventos_user(data.user._id)
          .then(({ data }) => {
            console.log(data);
            setEventos(data.eventos);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    EVENTO_SERVICE.delete(id)
      .then(({ data }) => {
        console.log(data);
        setEventos(
          eventos.filter((eventos) => eventos._id !== data.eventos._id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <Side>
      <div className="flex flex-row justify-between px-6 py-5">
        <h2>Tus Eventos</h2>
        <button
          onClick={agregar}
          style={{
            backgroundColor: "rgb(67,148,108)",
            color: "white",
            borderRadius: "4px",
            width: "150px",
            height: "40px",
          }}>
          Agregar
        </button>
      </div>
      <div className="flex flex-col px-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                {eventos?.map((e, i) => {
                  return (
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {e.nombre}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {e.tipo}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/dashboard/eventos/edit/${e._id}`}>
                            Editar
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => handleDelete(e._id)}>
                            Borrar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Side>
  );
};
