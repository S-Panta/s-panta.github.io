document.addEventListener('DOMContentLoaded',()=>{
    fetch('template.html')
    .then(response=>response.text())
    .then(data=>{
        const container = document.createElement('div')
        container.innerHTML=data
        document.getElementById('navbar').innerHTML=container.querySelector("#navbar").innerHTML
        document.getElementById('footer').innerHTML=container.querySelector("#footer").innerHTML
    })
    .catch(error=>console.error("Error fetching  templater",error))
})