import React, { useEffect } from "react";
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
import Loading from "../loading/Loading";

const Content = ({ content }) => {
  if (!content) return <Loading />;

  const editor = useEditor({
    editable: false,
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
    content: content,
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className={`p-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 text-black`}
      />
    </>
  );
};

export default Content;
