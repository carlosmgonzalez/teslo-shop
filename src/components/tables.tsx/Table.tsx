import Link from 'next/link';
import React, { useState } from 'react';

const Table = () => {
  // Datos de ejemplo
  const data = [
    { id: 1, name: 'John Jazmin', paid: true },
    { id: 2, name: 'Jane Jimenez', paid: true },
    { id: 3, name: 'Carlos Gonzalez', paid: false },
    { id: 4, name: 'Mario Sarmiento', paid: false },
    { id: 5, name: 'Lida Sarmiento', paid: true },
    { id: 6, name: 'Marcela Perez', paid: false },
    { id: 7, name: 'Diego Gonzalez', paid: true },
    { id: 8, name: 'Alejandro Cardona', paid: false },
    { id: 9, name: 'Jorge Ruiz', paid: true },
    { id: 10, name: 'Mariana Torres', paid: true },
    { id: 11, name: 'Manuel Cruz', paid: false },
    { id: 12, name: 'Nicolas Forero', paid: true  },
    { id: 13, name: 'Sabastiando Silva', paid: true }
    // ... Agrega más datos aquí ...
  ];

  // Estado para realizar la paginación
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo de índices de página
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8 rounded-md">
      <table className="min-w-full divide-y divide-neutral-600">
        <thead className="bg-neutral-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-normal uppercase tracking-wider w-10">ID</th>
            <th className="px-6 py-3 text-left text-xs font-normal uppercase tracking-wider w-52">Name</th>
            <th className="px-6 py-3 text-left text-xs font-normal uppercase tracking-wider w-32">Paid</th>
            <th className="px-6 py-3 text-left text-xs font-normal uppercase tracking-wider">info. order</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-950 divide-y divide-neutral-600">
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {
                  item.paid ? <div className='inline-block py-1 px-2 border border-green-700 text-green-700 rounded-md'><p>Paid</p></div> : <div className=' inline-block py-1 px-2 border border-red-700 text-red-700 rounded-md'><p>Unpaid</p></div>
                }
              </td>
              <td className="px-6 py-4 whitespace-nowrap"><Link href={"/orders/101921"} className={`font-light underline text-blue-700`}>View Order</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="mt-4">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-700 bg-neutral-800 text-sm font-medium 
              ${currentPage === 1 ? 'text-gray-600' : 'text-gray-300 hover:bg-neutral-900'}` }
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          {/* Generación de números de página */}
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`-ml-px relative inline-flex items-center px-4 py-2 border ${
                currentPage === index + 1
                  ? 'bg-neutral-900 border-neutral-700 text-gray-500'
                  : 'border-neutral-700 bg-neutral-800 text-gray-500 hover:bg-neutral-700'
              } text-sm font-medium`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-700 bg-neutral-800 text-sm font-medium 
              ${currentPage === Math.ceil(data.length / itemsPerPage)
                ? 'text-gray-600'
                : 'text-gray-300 hover:bg-neutral-900'}`}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Siguiente
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Table;
