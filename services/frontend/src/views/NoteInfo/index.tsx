import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useNoteInfo from "./useNoteinfo";

function NoteInfo() {
  const { id } = useParams();
  const {
    note,
    isEditMode,
    setIsEditMode,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleUpdateNote,
    isUpdating,
    handleDeleteNote,
    isDeleting,
  } = useNoteInfo(Number(id ?? -1));

  return (
    <Box>
      {isEditMode ? (
        <>
          <Box display="flex" flexDirection="column" width="50vw">
            <TextField
              label="Title"
              variant="standard"
              onChange={handleTitleChange}
              value={title}
            />
            <TextField
              label="Content"
              variant="standard"
              onChange={handleContentChange}
              value={content}
            />
            <Button disabled={isUpdating} onClick={handleUpdateNote}>
              Update note
            </Button>
            <Button disabled={isUpdating} onClick={() => setIsEditMode(false)}>
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography>{id}</Typography>
          <Typography>{note?.title}</Typography>
          <Typography>{note?.content}</Typography>
          <Typography>{note?.author.full_name}</Typography>
          <Typography>{note?.created_at}</Typography>
          <Button disabled={isDeleting} onClick={handleDeleteNote}>
            Delete
          </Button>
          <Button onClick={() => setIsEditMode(true)}>Edit</Button>
        </>
      )}
    </Box>
  );
}

export default NoteInfo;
