<template>
  <div class="max-w-6xl mx-auto px-4 sm:pr-6 lg:pr-8">
    <ul class="list-none">
      <li class="text-xl leading-6 font-medium text-cool-gray-900">ផលិតផល</li>
    </ul>
    <div class="sm:flex justify-between items-center bg-white p-4 rounded-md">
      <div class="space-y-1 w-full sm:w-1/4">
        <label
          for="project_name"
          class="block text-sm font-medium leading-5 text-gray-900"
        >ស្វែងរកតាមឈ្មោះផលិតផល</label>
        <div class="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600 border border-grey-500">
          <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            id="search_field"
            type="search"
            class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 sm:text-sm"
          />
        </div>
      </div>
      <span class="inline rounded-md shadow-sm">
        <button
          type="button"
          class="mt-4 sm:mt-0 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-danger hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-indigo-700 transition ease-in-out duration-150"
        >
          <svg
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="18.064"
            height="18.064"
            viewBox="0 0 18.064 18.064"
          >
            <path
              id="plus-circle-regular"
              d="M21.693,16.449v1.165a.438.438,0,0,1-.437.437h-3.2v3.2a.438.438,0,0,1-.437.437H16.449a.438.438,0,0,1-.437-.437v-3.2h-3.2a.438.438,0,0,1-.437-.437V16.449a.438.438,0,0,1,.437-.437h3.2v-3.2a.438.438,0,0,1,.437-.437h1.165a.438.438,0,0,1,.437.437v3.2h3.2A.438.438,0,0,1,21.693,16.449Zm4.37.583A9.032,9.032,0,1,1,17.032,8,9.03,9.03,0,0,1,26.064,17.032Zm-1.748,0a7.284,7.284,0,1,0-7.284,7.284A7.282,7.282,0,0,0,24.316,17.032Z"
              transform="translate(-8 -8)"
              fill="#fff"
            />
          </svg>
          ផលិតផលថ្មី
        </button>
      </span>
    </div>
    <!-- Activity list (smallest breakopoint only) -->
    <div class="shadow sm:hidden">
      <ul class="mt-2 divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden">
        <li>
          <a href="#" class="block px-4 py-4 bg-white hover:bg-cool-gray-50">
            <div class="flex items-center space-x-4">
              <div class="flex-1 flex space-x-2 truncate">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="text-cool-gray-500 text-sm truncate">
                  <p class="truncate">Payment to Molly Sanders</p>
                  <p>
                    <span class="text-cool-gray-900 font-medium">$20,000</span> USD
                  </p>
                  <p>July 11, 2020</p>
                </div>
              </div>
              <div>
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>

        <!-- More items... -->
      </ul>
      <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200"
      >
        <div class="flex-1 flex justify-between">
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
          >Previous</a>
          <a
            href="#"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
          >Next</a>
        </div>
      </nav>
    </div>

    <!-- Activity table (small breakopoint and up) -->
    <div class="hidden sm:block">
      <div class="flex flex-col mt-2">
        <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden">
          <table class="min-w-full divide-y divide-cool-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >#</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >រូបភាព</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >ឈ្មោះ​ផលិតផល</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >តម្លៃ</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >លេខកូដ</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >ស្ថានភាព</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                >កាលបរិច្ឆេទបង្កើត</th>
                <th
                  class="px-6 py-3 bg-cool-gray-50 text-center text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-cool-gray-200">
              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900"
                    >
                  1
                </td>
                <td
                  class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                    >
                  
                      <img src="/images/img-1.png" alt="">
                 
                 
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block"
                    >
                  Scoop Bucket
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block"
                    >
                  $ 2.00
                </td>
                <td
                  class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                    >0001
                </td>
           
                <td
                  class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                    >
                    <span
                        role="checkbox"
                        :aria-checked="isOn"
                        tabindex="0"
                        @click="isOn = !isOn"
                        :class="isOn ? 'bg-indigo-600' : 'bg-gray-200'"
                        class="relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                    >
                        <span
                        aria-hidden="true"
                        :class="isOn ? 'translate-x-5' : 'translate-x-0'"
                        class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                        ></span>
                    </span>
                    
                </td>
                <td
                    class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                    >
                    27-05-2020
                </td>
                <td
                class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                    ></td>
              </tr>

              <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>

export default {
    data: () => ({
      isOn: false,
    })
}

</script>