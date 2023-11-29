import { Editor } from "@tiptap/core";
import { Markdown } from "tiptap-markdown";
import { StarterKit } from "@tiptap/starter-kit";

const content = `<pre><code>class A {\n    public hello() {\n        console.log()\n    }\n}</code></pre><pre><code>class A {\n  public hello() {\n    console.log()\n  }\n}</code></pre>`;

new Editor({
  element: document.querySelector("#app")!,
  content: content,
  extensions: [StarterKit, Markdown],
});
