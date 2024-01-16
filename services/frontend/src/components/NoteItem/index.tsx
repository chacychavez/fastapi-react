import { Box, Typography } from "@mui/material";
import { Note } from "../../types/notes";
import { Link } from "react-router-dom";

type NoteProps = {
  note: Note;
};

function NoteItem({ note }: NoteProps) {
  return (
    <Box>
      <Typography>{note.title}</Typography>
      <Typography>{note.content}</Typography>
      <Typography>{note.author.full_name}</Typography>
      <Link to={`/notes/${note.id}`}>View note</Link>
    </Box>
  );
}

export default NoteItem;
