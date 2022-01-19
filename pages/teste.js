import React from "react";
import { Button } from "reactstrap";

export default (props) => {
  return (
    <div className="min-h-screen bg-blue-500 flex mx-auto justify-center items-center">
      <div className="flex flex-col mb-4">
        <div className="flex flex-col  p-4 rounded-md w-96 h-96 bg-gray-50 shadow-md">
          <div className="flex h-28 border rounded-md shadow-md">
            <div className=" bg-white flex justify-center items-center w-2/5 border-r">
              <span>Foto</span>
            </div>
            <div className="bg-white w-full flex justify-center items-center">
              <h2>Claudio Lins</h2>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-sm mb-0 font-bold">content</h3>
            <p className="text-xs">
              Algumas das suas senhas foram expostas em uma violação de dados de
              terceiros. Mude-as imediatamente. Mudanças de senha recentes podem
              demorar para aparecer aqui.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
            <div className="bg-red-700 text-white text-xs cursor-pointer px-3 py-1 rounded-lg shadow-sm opacity-75 hover:opacity-100">
              btn01
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <Button color="danger">Danger!</Button>
        </div>
      </div>
    </div>
  );
};
