// components/tiptap-ui/heading-button.js
export const HeadingButton = ({ editor, level, className }) => {
  if (!editor) return null;

  return (
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
      style={{ margin: "0 5px" }}
      className={`${className} font-bold`}
    >
      H{level}
    </button>
  );
};
