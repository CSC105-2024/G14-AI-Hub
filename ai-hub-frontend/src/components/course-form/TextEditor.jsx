import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Link from "@tiptap/extension-link";
import { HeadingButton } from "./heading-button";

//icons
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaHighlighter } from "react-icons/fa";
import { FaSuperscript } from "react-icons/fa";
import { FaSubscript } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaUnlink } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";

const content = "<p>Hello World!</p>";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} style={{ margin: "0 5px" }}>
    {children}
  </button>
);

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <Button onClick={() => editor.chain().focus().undo().run()}>
        <LuUndo2 />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        <LuRedo2 />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBold().run()}>
        <FaBold />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <FaItalic />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <FaUnderline />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
        <FaStrikethrough />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleHighlight().run()}>
        <FaHighlighter />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleSuperscript().run()}>
        <FaSuperscript />
      </Button>
      <Button onClick={() => editor.chain().focus().toggleSubscript().run()}>
        <FaSubscript />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <MdFormatListBulleted />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <MdFormatListNumbered />
      </Button>

      <Button
        onClick={() => {
          const url = window.prompt("Enter URL");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
      >
        <FaLink />
      </Button>
      <Button onClick={() => editor.chain().focus().unsetLink().run()}>
        <FaUnlink />
      </Button>

      <Button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        <FaAlignLeft />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        <FaAlignCenter />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        <FaAlignRight />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
      >
        <FaAlignJustify />
      </Button>

      <HeadingButton editor={editor} level={1} />
      <HeadingButton editor={editor} level={2} />
    </div>
  );
};

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
        bulletList: true,
        listItem: true,
      }),
      Underline,
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Typography,
      Superscript,
      Subscript,
      Link.configure({ openOnClick: false }),
    ],
    content,
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        style={{ padding: "20px" }}
        className="p-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1"
      />
    </div>
  );
};

export default TextEditor;
