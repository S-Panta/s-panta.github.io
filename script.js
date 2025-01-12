document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const post = params.get('post')

    const parseMarkDownContent = async (contentUrl) => {

        const response = await fetch(contentUrl)
        const resBody = await response.text()
        const parsedContent = marked.marked(resBody)

        // Update the DOM with the parsed HTML
        document.getElementById('post-content').innerHTML = parsedContent
        // to activate css code highlighter
        hljs.highlightAll();
      
    }

    parseMarkDownContent(`${post}.md`)
})
