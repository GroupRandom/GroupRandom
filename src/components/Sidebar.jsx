import React from 'react';
import { Link } from 'react-router-dom'
const Sidebar= () => {  

    return (
        
        <div class="min-h-screen flex flex-row bg-gray-100">
          <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
           
            <ul class="flex flex-col py-4">
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                  <span class="text-sm font-medium">Dashboard</span>
                </a>
              </li>
              <li>
       
                <a href="categorias" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-folder"></i></span>
                  <span class="text-sm font-medium">Categorias</span>
                </a>

              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                  <span class="text-sm font-medium">Compras</span>
                </a>
              </li>
              <li>
                <a href="articulos" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-ball"></i></span>
                  <span class="text-sm font-medium">Articulos</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                  <span class="text-sm font-medium">Usuarios</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
                  <span class="text-sm font-medium">Notifications</span>
                  <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                  <span class="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>


    )

}

export default Sidebar