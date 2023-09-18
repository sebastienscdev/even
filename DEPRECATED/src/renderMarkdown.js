
import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.code = (code, lang) => {
  if (lang && lang.match(/^html/)) {
    return `
<div class="Example">
  <div class="Example-Demo">
  ${code}
  </div>
  <div class="Example-Code">
      <pre>
<code class="hljs ${lang}">
${hljs.highlight(lang, code).value}
</code>
      </pre>
  </div>
</div>
    `;
  }
  return `
    <div class="Example">
      <div class="Example-Demo">
      ${code}
      </div>
      <div class="Example-Demo">
          <pre>
              <code class="hljs ${lang}">
              ${hljs.highlight(lang, code).value}
              </code>
          </pre>
      </div>
    </div>
  `;
};

export default function (md) {
  return marked(md, { renderer });
}
