<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 my-4">
    <div class="flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Agence de voyage</span
        >
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Accueil
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'allVoyages' }"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Forfaits
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'about' }"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >À-propos
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
