import React from "react";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(MUIEditorState.createEmpty());
  const onChange = (newState) => {
    setEditorState(newState);
  };
  return <MUIEditor editorState={editorState} onChange={onChange} />;
}

export default RichTextEditor;
