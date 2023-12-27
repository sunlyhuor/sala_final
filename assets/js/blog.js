"use strict";
const blog = document.querySelector("#blog");
const showLoading = document.getElementById("showLoading")

let output = " ";
const url = "https://cms.istad.co/api/sala-blogs?populate=thumbnail%2C%20tag";
const Blockrender = (posts) => {
  posts.forEach((post) => {
  
    // console.log(post.attributes.thumbnail);
    if(post.attributes.tag.data.id == 4 ) {
      output += `
        <div class="p-3 max-w-full flex shadow-sm">
        <a href="/blog/view.html?id=${
          post.id
        }" class="flex flex-col items-center bg-white rounded-lg lg:flex-row lg:max-w-2xl hover:bg-gray-100">
        <img class="object-cover w-full h-full rounded-t-lg md:h-full md:w-full lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg" src="https://cms.istad.co${
          post.attributes.thumbnail?.data?.attributes?.url
        }" alt="">
        <div class="flex flex-col justify-between p-3 leading-relaxed">
        <p class="w-32  overflow-hidden rounded-full text-sm text-primary bg-secondary text-center py-1"> ${
          post.attributes.tag.data.attributes.name
        } </p>
        <h1 class="text-xl mt-3 w-full desTwoLine desc">${
          post.attributes.title
        }</h1>
        <h2 class="minititle desTwoLine text-des desc">${
          post.attributes.content
        }</h2>
        <span class="text-body text-gray-400"><i class="fa-regular fa-calendar-days"></i>
            ${new Date(post.attributes.createdAt).toDateString()} - ចំនួនដង៖ ${
      post.attributes.view
    }
        </span>
        </div>
    </a>
    </div>
        `;
    }
  });
  blog.innerHTML = output;
};

const relateBlog = document.querySelector("#relateBlog");
let result = " ";
const blogRender = (items) => {
  items.forEach((blogData) => {
    console.log(blogData.attributes.thumbnail.data.attributes?.formats.thumbnail.url);
    result += `
    <div class="p-3">
    <a href="/blog/view.html"
        class="flex bg-white rounded-lg flex-col md:flex-row md:max-w-xl hover:bg-gray-100 ease-in duration-300 shadow-sm">
        <img class="object-cover w-1/2 h-full md:h-[10rem] md:w-[12rem] lg:h-[6rem] lg:w-[3rem] md:rounded-none md:rounded-s-lg"
            src= "https://cms.istad.co${blogData.attributes.thumbnail.data.attributes?.url}"  alt="">
        <div class="flex flex-col p-2">
            <h1 class="text-xl md:text-[0.5rem] lg:text-ms w-full desc ">${blogData.attributes.title}</h1>
            <h2 class="minititle desc lg:text-sm"> ${blogData.attributes.content} </h2>
            <span class="text-body text-gray-400 lg:text-sm"><i class="fa-regular fa-calendar-days"></i>  ${new Date(blogData.attributes.createdAt).toDateString() } - ចំនួនដង៖ ${blogData.attributes.view}ពាន់​​</span>
        </div>
    </a>
</div>
    </div>
        `;
  });
  relateBlog.innerHTML = result;
};

fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    showLoading.style.display = "none"
    let result = jsonResult.data;
    Blockrender(result);
  });

  fetch(url)
  .then((res) => res.json())
  .then((jsonResult) => {
    let result = jsonResult.data;
    blogRender(result);
  });
