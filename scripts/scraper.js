const token = token
const userName = 'S-Panta'
const repository = 'Django-101'
const path = ''
const blog_url = []

const getResponse = async(url) =>{
    const headers = {
        Authorization: `token ${token}`
    } 
    const response = await fetch(url,{
        headers:headers}
    )
    const data = await response.json()
    return data
}
const getNotes = async() => {
    const url = `https://api.github.com/repos/${userName}/${repository}/contents/${path}`
    const response = await getResponse(url)
    for (const item of response){
        if (item.name === 'notes.md'){
            blog_url.push(item.url)
        }
    }
    return blog_url
}

const fetch_blog = async() => {
    // const url = await getNotes()[0]
    const urls = await getNotes()
    const response = await getResponse(urls[0])

    // console.log(response)
}
fetch_blog()

document.addEventListener("DOMContentLoaded", () => {

    const parsedContent = marked.marked(fetch_blog())
    // Update the DOM with the parsed HTML
    document.getElementById('post-content').innerHTML = parsedContent
    // to activate css code highlighter
    hljs.highlightAll();
})