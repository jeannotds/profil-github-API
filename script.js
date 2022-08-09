
const btn = document.querySelector('#btn')
const champ = document.querySelector('#champ')
const names = document.querySelector('#names')
// const imgBlog = document.querySelector('#img-blog')
const img = document.querySelector('#img')

    btn.addEventListener('click', (e)=>{

        e.preventDefault()

        fetch("https://api.github.com/users/" + champ.value)
        .then((resultat)=>resultat.json())
        .then((data)=>{
            champ.value = ""
            // let img = document.createElement('img')
            // imgBlog.appendChild(img)
            names.textContent = data.name
            img.src = data.avatar_url
            img.value =""
        })
    })




        
