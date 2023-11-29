import { Editor } from "@tiptap/core";
import { Markdown } from "tiptap-markdown";
import { StarterKit } from "@tiptap/starter-kit";

const content = `<pre><code>class A {\n    public hello() {\n        console.log()\n    }\n}</code></pre>`;

new Editor({
  element: document.querySelector("#app")!,
  // Uncomment below line and then code-block works
  // content: `${content}\n${content}\n${content}`,
  content: `${content}${content}${content}`,
  extensions: [StarterKit, Markdown],
});
