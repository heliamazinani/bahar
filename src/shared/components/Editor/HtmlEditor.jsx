import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Button from "react-bootstrap/Button";
import "./editor.css";

export default function HtmlEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "توضیحات محصول را وارد کنید...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="editor">
      <div className="mb-2 d-flex gap-2 flex-wrap">
        <Button
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </Button>
        <Button
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </Button>
        <Button
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </Button>

      </div>

      <div className="editor-box">
        <EditorContent dir="rtl" editor={editor} />
      </div>
    </div>
  );
}
