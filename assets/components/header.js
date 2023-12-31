// const header = document.getElementById("showHeader")

const path = window.location.pathname

console.log(path)

header.innerHTML = `

  <nav class="bg-primary border-gray-200 lg:text-Onprimary font-NotoSerifKhmer w-full sticky top-0 left-0 z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 w-full">

        <section class="flex items-center gap-5">
          <!--Logo-->
          <a href="/index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/images/Sala-Logo.png" class=" w-[40px] lg:w-[60px]" alt="Logo">
          </a>
          <!--End Logo-->

          <!-- Search Bar​ -->
          <div id="mainSearchBar" class="relative">
              <section id="btnSearch" class="absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>   
              </section>  
              <input type="search" id="default-search" class="hidden md:block p-2 md:p-2 ps-10 text-sm md:w-full lg:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="ស្វែងរក..." required>
          </div>
          <!--End Search Bar-->
        </section>

        <!--Hamberber Icon-->
        <section id="mainHamberger" class="flex items-center gap-5 flex-row-reverse">
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <!--Profile when  small screen-->
          <div>
            <a href="/login.html" id="btnNoProfile1" class="py-2 px-3 text-white md:bg-transparent md:text-Onprimary md:p-0 block lg:hidden">
              <i class="fa-regular fa-user p-2 md:p-3 text-Onsecondary bg-secondary rounded-sm-radius"></i>
            </a>
            <button id="btnProfile1" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" class="hidden lg:border-hidden py-2 px-3 text-white md:bg-transparent md:text-Onprimary md:p-1">
                <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" class="rounded-sm-radius h-8 w-8 lg:h-12 lg:w-12"> 
            </button>
            <!-- drawer component -->
            <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 bg-background ease-in-out duration-300" tabindex="-1" aria-labelledby="drawer-right-label">
              
              <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400  rounded-lg p-1.5 absolute top-2.5 end-2.5 inline-flex items-center">
                  <i class="fa-solid fa-xmark text-nav"></i>
                  <span class="sr-only">Close menu</span>
              </button>

              <div class="flex text-primary">
                <a href="/setting.html">
                  <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" class="rounded-sm-radius h-16 w-16"> 
                </a>
                <div>
                  <h1 id="usernameSidebar" class="ms-3 text-miniTitle"></h1>
                  <h2 id="emailSidebar" class="ms-3 text-body"></h2>
                </div>
              </div>

              <div class="py-4 overflow-y-auto text-miniTitle">
                <ul class="space-y-2 font-body">
                  <li>
                      <a href="create-sala.html" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <i class="fa-solid fa-graduation-cap w-8 h-8"></i>
                        <span class="flex-1 ms-3">បង្កើតសាលា</span>
                      </a>
                  </li>
                  <li>
                    <a href="setting.html" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <i class="fa-solid fa-gear w-8 h-8"></i>
                      <span class="flex-1 ms-3">កំណត់</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <i class="fa-solid fa-file-import w-8 h-8"></i>
                      <span class="flex-1 ms-3">
                        <button data-modal-target="select-modal" data-modal-toggle="select-modal">បញ្ជូលមាតិកា</button>
                      </span>
                    </a>
                    <!-- Main modal -->
                      <div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-lg shadow">
                                <!-- Modal header -->
                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                    <h3 class="text-lg font-semibold text-gray-900">
                                      បញ្ចូលមតិកា
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="select-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-4 md:p-5">
                                    <p class="text-gray-500 dark:text-gray-400 mb-4">ជ្រើសរើសប្រភេទមាតិកា</p>
                                    <ul class="space-y-4 mb-4">
                                        <li>
                                            <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">                      
                                              <a href="/course/upload-video.html" class="flex gap-5 items-center">
                                                <i class="fa-solid fa-video"></i>
                                              <div class="w-full text-lg font-semibold">បញ្ជូលជាមេរៀន(វីឌីអូ)</div>
                                              </a>
                                            </label>
                                        </li>
                                        <li>
                                          <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">                      
                                            <a href="/book/upload-book.html" class="flex gap-5 items-center">
                                              <i class="fa-solid fa-book"></i>
                                              <div class="block w-full text-lg font-semibold">បញ្ជូលជាសៀវភៅ</div>
                                            </a>   
                                          </label>
                                        </li>
                                        <li>
                                          <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "> 
                                            <a href="/blog/upload-blog.html" class="flex gap-5 items-center">
                                              <i class="fa-solid fa-file-lines"></i>
                                              <div class="w-full text-lg font-semibold">បញ្ជូលជាអត្ថបទ(Blog)</div>
                                            </a>
                                          </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </div> 
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <i class="fa-solid fa-eye w-8 h-8"></i>
                      <span class="flex-1 ms-3">មើលមាតិកាទាំងអស់</span>
                    </a>
                  </li>
                  <li>
                    <a href="favorite.html" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <i class="fa-solid fa-bookmark w-8 h-8"></i>
                      <span class="flex-1 ms-3">Favorite</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      <i class="fa-solid fa-right-from-bracket w-8 h-8"></i>
                      <span class="flex-1 ms-3"><button data-modal-target="popup-modal" data-modal-toggle="popup-modal">ចាកចេញ</button>
                      </span>
                    </a>
                    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                      <div class="relative p-4 w-full max-w-md max-h-full">
                          <div class="relative bg-white rounded-lg">
                              <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                  </svg>
                                  <span class="sr-only">Close modal</span>
                              </button>
                              <div class="p-4 md:p-5 text-center">
                                  <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                  </svg>
                                  <h3 class="mb-5 text-lg font-normal text-gray-500">តើអ្នកចង់ចាកចេញពីគណនីមែនទេ?</h3>
                                  <button id="logoutButton" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                      ចាកចេញ
                                  </button>
                                  <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">មិនយល់ព្រម</button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!--End Hamberber Icon-->

      <!-- Link Menu-->
      <section class="hidden w-full lg:block lg:w-auto" id="navbar-default">
        <ul class="text-body md:text-nav flex flex-col lg:items-center p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-2 rtl:space-x-reverse lg:mt-0 lg:border-0">
          <li>
            <a href="/school.html" class="block py-2 px-3 text-md md:bg-transparent text-Onprimary ${ path.includes("school.html") ? 'text-secondary' : '' } md:p-1">សាលារៀន</a>
          </li>
          <li>
            <a href="/book/index.html" class="block py-2 px-3 text-Onprimary md:p-1  ${ path.includes("book") ? 'text-secondary' : '' } ">​បណ្ណាល័យ</a>
          </li>
          <li>
            <a href="/course/index.html" class="block py-2 px-3 text-Onprimary md:p-1  ${ path.includes("course") ? 'text-secondary' : '' }">មេរៀន</a>
          </li>
          <li>
            <a href="/blog/index.html" class="block py-2 px-3 md:p-1 text-Onprimary  ${ path.includes("blog") ? 'text-secondary' : '' }">អត្ថបទ</a>
          </li>
          <li>
            <a href="/about-us.html" class="text-Onprimary block py-2 px-3 md:p-1 ${ path.includes("about-us.html") ? 'text-secondary' : '' }">អំពីយើង</a>
          </li>
          <li>
            <a href="/login.html" id="btnNoProfile2" class="hidden lg:block py-2 px-3 text-white md:bg-transparent md:text-Onprimary md:p-1 hover:text-secondary">
              <i class="fa-regular fa-user p-3 md:p-3 text-Onsecondary bg-secondary rounded-sm-radius"></i>
            </a>
            <button id="btnProfile2" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
            data-drawer-placement="right" aria-controls="drawer-right-example" class="hidden py-2 px-3 text-white md:bg-transparent md:text-Onprimary md:p-1">
              <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" class="rounded-sm-radius h-8 w-8 lg:h-12 lg:w-12"> 
            </button>

            <!-- drawer component -->
            <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 bg-background ease-in-out duration-300" tabindex="-1" aria-labelledby="drawer-right-label">
              
                <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400  rounded-lg p-1.5 absolute top-2.5 end-2.5 inline-flex items-center">
                    <i class="fa-solid fa-xmark text-nav"></i>
                    <span class="sr-only">Close menu</span>
                </button>

                <div class="flex text-primary">
                  <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" class="rounded-sm-radius h-16 w-16"> 
                  <div>
                    <h1 id="usernameSidebarLarge" class="ms-3 text-miniTitle"></h1>
                    <h2 id="emailSidebarLarge" class="ms-3 text-body"></h2>
                  </div>
                </div>

                <div class="py-4 overflow-y-auto text-miniTitle">
                  <ul class="space-y-2 font-body">
                    <li>
                      <a href="create-sala.html" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <i class="fa-solid fa-graduation-cap w-8 h-8"></i>
                        <span class="flex-1 ms-3">បង្កើតសាលា</span>
                      </a>
                    </li>
                    <li>
                      <a href="setting.html" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <i class="fa-solid fa-gear w-8 h-8"></i>
                        <span class="flex-1 ms-3">កំណត់</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <i class="fa-solid fa-file-import w-8 h-8"></i>
                        <span class="flex-1 ms-3"><button data-modal-target="select-modal" data-modal-toggle="select-modal">បញ្ជូលមាតិកា</button></span>
                      </a>
                      <!-- Main modal -->
                        <div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                          <div class="relative p-4 w-full max-w-md max-h-full">
                              <!-- Modal content -->
                              <div class="relative bg-white rounded-lg shadow">
                                  <!-- Modal header -->
                                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                      <h3 class="text-lg font-semibold text-gray-900">
                                        បញ្ចូលមតិកា
                                      </h3>
                                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="select-modal">
                                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                          </svg>
                                          <span class="sr-only">Close modal</span>
                                      </button>
                                  </div>
                                  <!-- Modal body -->
                                  <div class="p-4 md:p-5">
                                      <p class="text-gray-500 dark:text-gray-400 mb-4">ជ្រើសរើសប្រភេទមាតិកា</p>
                                      <ul class="space-y-4 mb-4">
                                          <li>
                                              <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">                      
                                                <a href="/course/upload-video.html" class="flex gap-5 items-center">
                                                  <i class="fa-solid fa-video"></i>
                                                <div class="w-full text-lg font-semibold">បញ្ជូលជាមេរៀន(វីឌីអូ)</div>
                                                </a>
                                              </label>
                                          </li>
                                          <li>
                                            <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">                      
                                              <a href="/book/upload-book.html" class="flex gap-5 items-center">
                                                <i class="fa-solid fa-book"></i>
                                                <div class="block w-full text-lg font-semibold">បញ្ជូលជាសៀវភៅ</div>
                                              </a>   
                                            </label>
                                          </li>
                                          <li>
                                            <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "> 
                                              <a href="/blog/upload-blog.html" class="flex gap-5 items-center">
                                                <i class="fa-solid fa-file-lines"></i>
                                                <div class="w-full text-lg font-semibold">បញ្ជូលជាអត្ថបទ(Blog)</div>
                                              </a>
                                            </label>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                        </div> 
                    </li>
                    <li class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                      
                        <i class="fa-solid fa-right-from-bracket w-8 h-8"></i>
                        <span class="flex-1 ms-3">
                          <button data-modal-target="popup-modal" data-modal-toggle="popup-modal">ចាកចេញ</button>
                        </span>
                      
                      <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg">
                                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">តើអ្នកចង់ចាកចេញពីគណនីមែនទេ?</h3>
                                    <button id="logoutButton" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                        ចាកចេញ
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">មិនយល់ព្រម</button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </li>
        </ul>
      </section>
      <!--End Link Menu-->
    </div>
  </nav>

`
