'use client'
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const RichTextEditor = ({ initialContent, onDone }) => {
  const editorRef = useRef();

  const handleDoneClick = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      // const strippedContent = content.replace(/<\/?p>/g, ''); // Optional: Strip <p> tags if needed
      onDone( content);
      console.log( content);
      if (editorRef.current) {
        editorRef.current.setContent(''); // Clear the editor content
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="editor-header">Edit Your Story</h2>
        <h2 onClick={handleDoneClick} className="text-custom-green-200 ml-16 cursor-pointer">Done</h2> 
      </div>
      <Editor
        apiKey="6gvxjieb4cp1ekx8va3rtte90zqqyzwex5d3h76m5w8tbuq5"
        initialValue={initialContent}
        init={{
          height: 400,
          menubar: false,
          branding: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'media', 'charmap', 'print', 'preview', 'anchor',
            'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'table', 'paste', 'code', 'help', 'wordcount'
          ],
          toolbar: 'image media | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify',
          content_css: 'custom-editor-styles.css',
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
      />
    </>
  );
};

export default RichTextEditor;
