import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'


async function getContent(){

  try {
    const id = Math.floor(Math.random()*1000000)
    const response = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}&${language}`)
    
    const data = await response.json()
    
    console.log(data)
    if(data.status === "Released"){
      const img = document.querySelector('.movie-section img')
      if(data.backdrop_path === null){
  
        img.setAttribute('src', './assets/sean-benesh-6Nbo9Pn0yJA-unsplash.jpg')
      }else{
        img.setAttribute('src', `${IMG_URL}${data.backdrop_path}`)
      }
      
      const title = document.querySelector('.movie-information h3')
      title.innerHTML = data.title
  
      const p = document.querySelector('.movie-information p')
      if(data.overview === "" || undefined){
        p.innerHTML = 'Sem sinopse...'
  
      }else{
        p.innerHTML = data.overview
      }
      
    }else{
      const img = document.querySelector('.movie-section img')
      img.setAttribute('src', './assets/Poster_codar.png')
      
      const title = document.querySelector('.movie-information h3')
      title.innerHTML = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀'
  
      const p = document.querySelector('.movie-information p')
        p.innerHTML = ''
      }

  }catch (error) {
    console.error(error)
  }
  
}

getContent()




