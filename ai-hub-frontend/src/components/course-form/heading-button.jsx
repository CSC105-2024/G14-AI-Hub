// components/tiptap-ui/heading-button.js
export const HeadingButton = ({ editor, level }) => {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
      style={{ margin: "0 5px" }}
    >
      H{level}
    </button>
  );
};
