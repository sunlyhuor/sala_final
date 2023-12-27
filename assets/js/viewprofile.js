// Function to parse query parameters from the URL
function getQueryParams() {
    var queryParams = {};
    var queryString = window.location.search.substring(1);
    var queryParamsArray = queryString.split("&");
  
    for (var i = 0; i < queryParamsArray.length; i++) {
      var pair = queryParamsArray[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
  
      // Handle cases where a parameter may appear more than once
      if (queryParams[key]) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = [queryParams[key], value];
        }
      } else {
        queryParams[key] = value;
      }
    }
  
    return queryParams;
}  
const pro=document.querySelector('#profile');
let dis=" " ;
const url='https://cms.istad.co/api/sala-schools?populate=profile%2Ccover';
const renderProfile=(profiles)=>{
  profiles.map((posts)=>{
    if(posts.id==getQueryParams().id){
      dis+=`
      <div class="w-full mx-auto" >
      <img class="w-5/6 mx-auto rounded-lg relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTJHXrWPaD9N6czL20wVyIsRUMDl7RZHdLVt6zMqWbnb-43zT1MP2O3dz2HNeVOKcgv8&usqp=CAU">
      <img id="#textThumbnail" class="mx-32 top-12 absolute w-[130px] h-[130px] rounded-[140px] lg:mx-60 lg:mt-72 md:mt-36 " src="https://cms.istad.co${posts.attributes?.profile.data?.attributes?.url}" alt="">
  </div>
  <!--Info-->
  <div class="mt-14 xl:mt-8 lg:mt-1 w-full text-center ">
      <div class="lg:w-3/5 mx-32 lg:float-right lg:flex lg:justify-between md:block ">
              <div class="lg:text-justify">
                  <h3 id="textName" class="text-miniTitle w-full">${posts.attributes.name}</h3>
                  <div class="xl:flex">
                      <p class="mt-2 ">អ្នកតាមដាន</p>
                      <p class="mt-2">1ពាន់ នាក់</p>
                  </div>
                  <p id="txtDes" class=" mt-2 text-center">${posts.attributes.description}</p>
  
              </div>
              <div class="flex items-center justify-center text-Onprimary sm:my-4 sm:mx-4 ">
                  <button type="button" class="bg-gray-900 rounded p-btn mt-2">តាមដាន</button>
              </div>
      </div>
  </div>
      `
    }
  })
  pro.innerHTML=dis;
}
fetch(url)
.then(res=>res.json())
.then((ResProfile)=>{
  let resutl=ResProfile.data;
  renderProfile(resutl);
})
