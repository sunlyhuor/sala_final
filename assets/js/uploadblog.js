const titleEle = document.querySelector("#title");
const contentEle = document.querySelector("#content");
const btnSubmit = document.getElementById("btnSubmit");
let contentData;
const tagsUrl = "https://cms.istad.co/api/sala-tags"
const selectTag = document.getElementById("selectTag")

ClassicEditor.create(document.querySelector("#content"))
  .then((data) => (contentData = data))
  .catch((error) => {
    console.error(error);
  });

let getFile;
function changeFile(e) {
  getFile = e.target.files[0];
}

//Fetch Tag
fetch(tagsUrl,{
  headers:{
    "Content-Type": "application/json"
  }
})
  .then(d => d.json() ) 
  .then(respo => {
    let opt = ""
    respo.data.map(t => {
      opt += `
        <option value="${t.id}" >${t.attributes.name}</option>
      `
    })
    selectTag.innerHTML = opt
  } )
  .catch(d => alert("Tag getting error"))

btnSubmit.addEventListener("click", async function (e) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  e.preventDefault();

  const title = titleEle.value;
  // console.log( contentData.getData() )
  // console.log(getFile)
  // console.log( title )

  try {
    let formImage = new FormData();
    formImage.append("files", getFile);
    const imageResponse = await fetch("https://cms.istad.co/api/upload", {
      method: "POST",
      body: formImage,
    });
    const imageResponseJson = await imageResponse.json()
    console.log(imageResponseJson[0].id)
    console.log(selectTag.value)
    const blog = {
      title: title,
      content: contentData.getData(),
      view: 0,
      thumbnail: `${imageResponseJson[0].id}`,
      tag: `${selectTag.value}`,
      school: "string or id",
    };
    $.ajax({
      type: "POST",
      url: "https://cms.istad.co/api/sala-blogs",
      data: JSON.stringify({
        data: blog,
      }),
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        alert("Blog uploaded successfully");
        window.location.reload()  
      },
      error: ( x, s, er )=> {
        if( x.status == 500 ){
          alert("Blog uploaded successfully");
          window.location.reload()  
        }else{
          alert("Blog uploaded failed");
        }
      }
    });
  } catch (e) {
    alert("Blog uploaded failed");
  }
});