const titleEle = document.querySelector("#title");
const contentEle = document.querySelector("#content");
const btnSubmit = document.getElementById("btnSubmit");
let contentData;

ClassicEditor.create(document.querySelector("#content"))
  .then((data) => (contentData = data))
  .catch((error) => {
    console.error(error);
  });

let getFile;
function changeFile(e) {
  getFile = e.target.files[0];
}

btnSubmit.addEventListener("click", async function (e) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  e.preventDefault();

  const title = titleEle.value;
  // console.log( contentData.getData() )

  try {
    let formImage = new FormData();
    formImage.append("files", getFile);
    const imageResponse = await fetch("https://cms.istad.co/api/upload", {
      method: "POST",
      body: formImage,
    });
    const imageResponseJson = await imageResponse.json()
    try {
      const blog = {
          title: title,
          content: contentData.getData(),
          view: 0,
          thumbnail: imageResponseJson[0].id,
          tag: "string or id",
          school: "string or id",
      };
      const repo = await fetch("https://cms.istad.co/api/sala-blogs", {
        method:"POST",
        body: JSON.stringify({
          data: blog,
        }),
      });
      console.log(await repo.json());
    } catch (ex) {
      alert(ex);
    }
  } catch (e) {
    alert(e);
  }
});