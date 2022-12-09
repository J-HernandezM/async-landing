const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC_qIdLo-8pDvgQWvAy8T0mQ&filter=videos_latest&hl=en&gl=US'
const videoContent = document.getElementById('video-content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e00039235msh040b859b12ea92bp1475c7jsnfc19a52d032d',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

// request
async function fetchData (urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}
// tratamiento de datos
async function getVideos(){
    try{
        const videos = await fetchData(API)
        videos.contents.forEach(vidItem => {
            let showVideo = 
                `<a href="https://www.youtube.com/watch?v=${vidItem.video.videoId}" target="blank"><div class="group relative">
                <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${vidItem.video.thumbnails[3].url}" alt="${vidItem.video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${vidItem.video.title}
                  </h3>
                </div>
          </div></a>`
            videoContent.innerHTML+= showVideo
        })     
    }
    catch(error){
        console.log(error)
    }
};
getVideos() 