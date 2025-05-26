import React, { useEffect, useState } from "react";
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
import { FaListUl } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaUnlink } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import Loading from "../loading/Loading";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} style={{ margin: "0 5px" }}>
    {children}
  </button>
);

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div
      style={{ borderBottom: "1px solid black", padding: "10px" }}
      className="text-black"
    >
      <Button onClick={() => editor.chain().focus().undo().run()}>
        <LuUndo2 />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        <LuRedo2 />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleBold().run()}>
        <FaBold
          className={
            editor.isActive("bold") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <FaItalic
          className={
            editor.isActive("italic") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <FaUnderline
          className={
            editor.isActive("underline") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
        <FaStrikethrough
          className={
            editor.isActive("strike") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleHighlight().run()}>
        <FaHighlighter
          className={
            editor.isActive("highlight") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleSuperscript().run()}>
        <FaSuperscript
          className={
            editor.isActive("superscript") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleSubscript().run()}>
        <FaSubscript
          className={
            editor.isActive("subscript") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <FaListUl
          className={
            editor.isActive("bulletList") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <FaListOl
          className={
            editor.isActive("orderedList") ? "text-[var(--primary-color)]" : ""
          }
        />
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
        <FaUnlink
          className={
            editor.isActive("link") ? "text-[var(--primary-color)]" : ""
          }
        />
      </Button>

      <Button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        <FaAlignLeft
          className={
            editor.isActive({ textAlign: "left" })
              ? "text-[var(--primary-color)]"
              : ""
          }
        />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        <FaAlignCenter
          className={
            editor.isActive({ textAlign: "center" })
              ? "text-[var(--primary-color)]"
              : ""
          }
        />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        <FaAlignRight
          className={
            editor.isActive({ textAlign: "right" })
              ? "text-[var(--primary-color)]"
              : ""
          }
        />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
      >
        <FaAlignJustify
          className={
            editor.isActive({ textAlign: "justify" })
              ? "text-[var(--primary-color)]"
              : ""
          }
        />
      </Button>

      <HeadingButton
        editor={editor}
        level={1}
        className={
          editor.isActive("heading", { level: 1 })
            ? "text-[var(--primary-color)]"
            : ""
        }
      />
      <HeadingButton
        editor={editor}
        level={2}
        className={
          editor.isActive("heading", { level: 2 })
            ? "text-[var(--primary-color)]"
            : ""
        }
      />
    </div>
  );
};

const TextEditor = ({ setForm }) => {
  const [editorContent, setEditorContent] = useState(null);

  const content = "<p>Courses</p>";

  useEffect(() => {
    setForm((f) => ({ ...f, content: editorContent }));
  }, [editorContent]);

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
    onUpdate: ({ editor }) => {
      // Capture the updated content as JSON
      setEditorContent(editor.getJSON());
    },
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        style={{ padding: "20px" }}
        className="p-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 text-black"
      />
    </div>
  );
};

export default TextEditor;
