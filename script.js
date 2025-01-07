document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const post = params.get('post')

    const parseMarkDownContent = async (contentUrl) => {

        const response = await fetch(contentUrl)
        const resBody = await response.text()
        const renderer = new marked.Renderer()

        renderer.code = function(code, language) {
            const languageClass = language || 'plaintext'
            return `<pre class="code-block"><code class="${languageClass}">${code}</code></pre>`;
        }

        marked.setOptions({
            renderer: renderer
        })
        marked.setOptions({
            highlight: function(code, language) {
                return hljs.hljs.highlight(language, code).value; 
            }
        });

        const parsedContent = marked.marked(resBody)

        // Update the DOM with the parsed HTML
        document.getElementById('post-content').innerHTML = parsedContent
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    parseMarkDownContent(`${post}.md`)
})
