"use strict";
const popularBlog = document.getElementById('popularBlog');
const url = `https://cms.istad.co/api/sala-blogs?pagination%5Blimit%5D=6&populate=thumbnail%2C%20tag`
const urlSchool = "https://cms.istad.co/api/sala-schools?pagination%5Blimit%5D=4&populate=profile%2C%20tag"
const urlLesson = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=UU1VDpWpOf36CuP9fowyDZtQ&key=AIzaSyD5vvPK3F3OnV3z9x0alk2HtTi8UdknbXM"
const urlBook = "https://cms.istad.co/api/sala-lessons?populate=thumbnail%2Cprofile"
let display = ""
let date= new Date().getDate;


  // add to favourtite in localStorage 
  $(document).on("click", "#addtoFav", function () {
    console.log("Add to fav clicked");
  
    // Toggle the 'active' class
     $(this).toggleClass("active");
  
    if ($(this).hasClass("active")) {
      // Code to execute when the button is active (favorited)
      $(this).html(`
      <i class="fa-solid fa-heart text-2xl text-red-500"></i>
      `);
  
      // Find the parent card element
      const cardElement = $(this).closest('.max-w-sm');
  
      // Extract data from the card
      const title= cardElement.find('#title').text().trim();
      const imagePf = cardElement.find('#imageProfile').attr('src').trim();
      const imageBook = cardElement.find('#imagesBook').attr('src').trim();
      const about = cardElement.find('#about').text().trim();
      const name = cardElement.find('#name').text().trim();
      const follower = cardElement.find('#follower').text().trim();
      const dateOnly = cardElement.find('#dateOnly').text().trim();
     
  
      // Prepare the data to be stored in localStorage
      const storeData = {
        title,
        imagePf,
        imageBook,
        about,
        name,
        follower,
        dateOnly
      };
      console.log("Extracted Data:", storeData);
  
      // Store data in localStorage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(storeData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
  
    } else {
      // Code to execute when the button is not active (not favorited)
      $(this).html(`
      <i class="fa-regular fa-heart text-2xl"></i>
      `);
  
      // Code to execute when the button is not active (not favorited)
      try {
        // Attempt to store data in localStorage
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (e) {
        // Handle the error (e.g., show a message to the user)
        console.error("Error storing data in localStorage:", e);
      }
    }
  });


const popularBlogRender = (cards) =>{
    cards.forEach((card) => {
        // console.log(card)
        display += `
            <a href="/blog/view.html?id=${card.id}" class="flex flex-col items-center bg-white rounded-lg lg:flex-row lg:max-w-2xl hover:bg-gray-100">
                <img class="object-contain w-full h-full rounded-t-lg md:h-full md:w-full lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg" src="https://cms.istad.co${card.attributes.thumbnail?.data?.attributes?.url}" alt="">
                <div class="flex flex-col justify-between p-4 leading-relaxed">
                  <p class="w-36 overflow-hidden rounded-full text-primary bg-secondary text-center px-1 py-1 md:px-2 md:py-1"> ${ card.attributes.tag.data.attributes.name } </p>
                  <h1 class="text-xl mt-3 w-full desTwoLine">${card.attributes.title}</h1>
                  <h2 class="minititle desTwoLine text-des">${card.attributes.content}</h2>
                  <span class="text-body text-gray-400"><i class="fa-regular fa-calendar-days"></i>
                      ${ new Date(card.attributes.createdAt).toDateString() } - ចំនួនដង៖ ${card.attributes.view}
                  </span>
                </div>
            </a>
        `;
    });
    popularBlog.innerHTML = display;
}

async function getData(){  
    const rep = await fetch(url , {
        method:"GET"
    })
    
    const json = await rep.json()
    popularBlogRender(json.data)
}
getData()

function returnCard({profile,name,email,address,phoneNumber,facebookUrl,linkedInUrl,telegramUrl,youtubeUrl, id}){
    return `
    <div class="flex bg-white rounded-lg md:flex-row md:max-w-2xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
    <a href="/profile.html?id=${id}" class="flex p-3">
      <img class="object-contain w-[8rem] h-full md:h-full md:w-[10rem] md:rounded-none rounded-s-lg md:rounded-s-lg" src="https://cms.istad.co${profile}" alt="${profile}">
      <div class="flex flex-col ps-3" style="width:50%">
          <a href="/profile.html" class="mb-2">
            <h1 class="text-xl desTwoLine">${name}</h1>
          </a>
          <div class="flex justify-start items-center gap-3 mb-2">
            <i class="fa-solid fa-location-dot"></i>
            <span class="desTwoLine">${address}</span>
          </div>
          <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-regular fa-envelope"></i>
              <span class="desTwoLine">${email}</span>
          </div>
          <div class="flex justify-start items-center gap-3 mb-2">
              <i class="fa-solid fa-phone"></i>
              <span class="desTwoLine">${phoneNumber}</span>
          </div>   
          <div class="flex justify-start items-center gap-3 mb-2">
              <span class="text-des">ប្រព័ន្ធទំនាក់ទំនងផ្សេងៗ</span>
          </div>  
          
          <div class="flex justify-start items-center gap-3 mb-2">
            <a href="${facebookUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="${linkedInUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="${telegramUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="${youtubeUrl}" class="text-gray-400 hover:text-gray-900">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
      </div>
    </a>
  </div>
    `
}

$.ajax({
    type: "GET",
    url: urlSchool,
    // data: "data",
    dataType: "json",
    success: function (response) {
        let cardDisplay = ""
        response.data.map(data =>{
            cardDisplay += returnCard( { 
                id: data.id,
                name: data.attributes.name,
                email: data.attributes.e,
                address: data.attributes.address,
                phoneNumber: data.attributes.phoneNumber,
                facebookUrl: data.attributes.facebookUrl,
                telegramUrl: data.attributes.telegramUrl,
                linkedInUrl: data.attributes.linkedInUrl,
                youtubeUrl: data.attributes.youtubeUrl,
                profile: data.attributes.profile?.data?.attributes?.url
            } )
            // console.log(data.attributes.profile?.data?.attributes?.url)
            
        })
        $("#schoolHomepage").html(cardDisplay)
        
    },
    error: ( er, err, error ) => {
        console.log(error)
    }
});

function returnLessonCard({thumbnailUrl,channelTitle,publishedAt,title, id}){
    return `
    <div class="max-w-sm bg-white rounded-lg relative">
    <div class ="h-40" >
    <a href="/course/view.html?id=${id}">
      <img class="rounded-t-lg object-contain h-full w-full " src="${thumbnailUrl}" alt="thumbnail"> 
      <div class="relUtube">
      <i class="fa-solid fa-play w-9 h-9 bg-red-600 flex justify-center items-center rounded-full" style="color: #ffffff;"></i>
    </div>
    </a>
    </div>
    
    <div class="container flex items-end justify-between  text-xs rel px-3">
      <p class="py-1 px-2 bg-background rounded-lg bg-opacity-75 ">10 នាទី</p>
      <p class="py-1 px-2  bg-background rounded-lg bg-opacity-75"><i class="fa-solid fa-eye"></i> ​១០ពាន់ នាក់</p>
    </div>
    <div class="p-5 mt-10"> 
      <!-- profile -->
      <div class="flex items-center">
        <div class="flex-shrink-0">
            <img class="rounded-full w-9 h-9"
                src="https://images.unsplash.com/photo-1703027817355-e78fa9cbc1f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile picture">
        </div>
          <div class="flex-1 ms-4">
            <p class="text-sm font-medium text-Onsecondary truncate">
                ${channelTitle}
            </p>
            <p class="text-xs text-des truncate">
                <i class="fa-regular fa-calendar-days"></i> ${publishedAt}
            </p>
        </div>
    </div>
      <!-- end of profile -->
      <a href="/course/view.html">
        <h5 class="my-2 text-black text-xl tracking-tight desTwoLine">${title}</h5>
      </a>
    </div>
  </div>
    `
}

$.ajax({
    type: "GET",
    url: urlLesson,
    // data: "data",
    dataType: "json",
    success: function (response) {
        let cardLesson = ""
        response.items.map(lesson =>{
            cardLesson += returnLessonCard( { 
                id: lesson.id,
                thumbnailUrl: lesson.snippet.thumbnails?.medium.url,  
                channelTitle: lesson.snippet.channelTitle,
                publishedAt: new Date(lesson.snippet.publishedAt).toDateString(),
                title: lesson.snippet.title,

            } )
            // console.log(data.snippet.title)
            
        })
        $("#lessonHomepage").html(cardLesson)
        
    },
    error: ( er, err, error ) => {
        console.log(error)
    }
});

function returnBookCard({thumbnailBook,title,des,profile,name,follower,createdAt}){
    return `
    <div class="max-w-sm bg-white rounded-lg">
   <div class = "h-40"> 
   <a href="/book/view.html">
   <img class="rounded-t-lg h-full w-full object-contain" src="https://cms.istad.co${thumbnailBook}" alt="" id="imagesBook">
 </a>
   </div>
    <div class="p-5">
      <a href="/book/view.html">
        <h5 class="mb-2 text-black text-2xl tracking-tight" id="title">${title}</h5>
      </a>
      <p class="mb-3 text-black text-base tracking-tight text-des desc" id="about">${des}</p>
      <div class="flex items-center">
        <img class="rounded-full w-9 h-9" src="https://cms.istad.co${profile}" alt="profile picture" id="imageProfile">
        <div class="w-full flex justify-between items-center">
          <div class=" text-start text-black text-sm font-medium font-['Noto Serif Khmer'] tracking-tight">
            <div class="ps-3" id="name">${name}</div>
            <div class="text-center text-black text-xs font-light font-['Noto Serif Khmer'] tracking-tight ps-3"> <span id="follower">${follower} 
            </span>នាក់ <span id="dateOnly">${new Date( createdAt ).toDateString()}</span> </div>
          </div>
            <button id="addtoFav">
              <i class="fa-regular fa-heart text-2xl"></i>
            </button>
        </div>
      </div>
    </div>
  </div>
    `
}
$.ajax({
    type: "GET",
    url: urlBook,
    // data: "data",
    dataType: "json",
    success: function (response) {
        let cardBook = ""
        response.data.map(book =>{
            cardBook += returnBookCard( { 
                thumbnailBook: book.attributes.thumbnail?.data?.attributes?.formats?.small?.url,
                title: book.attributes.title,
                des: book.attributes.about,
                profile: book.attributes.profile.data.attributes.formats.small.url,
                name: book.attributes.name,
                follower: book.attributes.follower,
                createdAt: new Date(book.attributes.createdAt).toDateString(),
            } )
            // console.log(data.snippet.title)
            
        })
        $("#bookHomepage").html(cardBook)
        
    },
    error: ( er, err, error ) => {
        console.log(error)
    }
});
