'use client'
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

const RichTextEditor = () => {
  const [showEditor,setShowEditor] = useState(false)
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };
  const toggleEditor=()=>{
      setShowEditor(false)
  }
  return (
    <>
    <div className="flex justify-between">
      <h2 className="editor-header">Edit Your Story </h2>
      <h2 onClick={handleEditorChange} className="text-custom-green-200 ml-16 cursor-pointer ">Done</h2> 
    </div>
      <Editor
        apiKey="6gvxjieb4cp1ekx8va3rtte90zqqyzwex5d3h76m5w8tbuq5"
        initialValue="<p>Ex: I am a student working on a project..</p>"
        init={{
          height: 400,
          menubar: false,
          branding: false, // Disable TinyMCE branding
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'media', 'charmap', 'print', 'preview', 'anchor',
            'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'table', 'paste', 'code', 'help', 'wordcount'
          ],
          toolbar:
            ' image media | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            ',
          content_css: 'custom-editor-styles.css',
          setup: (editor) => {
            editor.on('init', () => {
              const header = document.createElement('div');
            header.className = 'editor-header';
            header.innerHTML = '<h2>Edit Your Story</h2>';
              const toolbarElement = editor.editorContainer.querySelector('.tox-toolbar');
              if (toolbarElement) {
                toolbarElement.style.backgroundColor = 'rgba(198, 198, 198, 1)'; 
              }
            });
          },
          images_upload_handler: (blobInfo, success, failure) => {
            // Implement image upload handler here
          },
          file_picker_callback: (callback, value, meta) => {
            if (meta.filetype === 'media') {
              // Implement file picker for media files (e.g., videos)
            }
          }
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default RichTextEditor;
