async function getPhotos() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 200) {
      console.log("Photos successfully fetched.");
      renderPhotos(data);
    } else {
      console.log("Server Error");
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }
}

function renderPhotos(photos) {
  const OUTPUT = document.getElementById("output");

  photos.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img.thumbnailUrl);
    OUTPUT.appendChild(imgEl);
  });
}

async function start() {
  await getPhotos();
}

start();

