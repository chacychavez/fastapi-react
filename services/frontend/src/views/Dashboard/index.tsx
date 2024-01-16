import { Box, Button, TextField, Typography } from "@mui/material";
import NoteItem from "../../components/NoteItem";
import useDashboard from "./useDashboard";

function Dashboard() {
  const {
    notes,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleCreateNote,
    isCreating,
  } = useDashboard();

  return (
    <Box>
      <Typography>Dashboard</Typography>
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
        <Button type="submit" disabled={isCreating} onClick={handleCreateNote}>
          Create note
        </Button>
      </Box>
      <Box>
        {notes === undefined || notes?.length === 0 ? (
          <Typography>No notes yet</Typography>
        ) : (
          <Box>{notes?.map((note) => <NoteItem note={note} />)}</Box>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
