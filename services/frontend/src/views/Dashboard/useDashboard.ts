import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { createNoteFn, getNotesFn } from "../../services/api";


export default function useDashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  const { data: notes, refetch: refetchNotes } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotesFn,
    retry: false,
  });

  const { mutate: createNote, isPending: isCreating } = useMutation({
    mutationFn: createNoteFn,
    onSuccess: async (response) => {
      console.log(response);
      setTitle("");
      setContent("");
      await refetchNotes();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCreateNote = (event: React.FormEvent) => {
    event.preventDefault();
    createNote({ title, content });
  };
  
  return {
    notes,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleCreateNote,
    isCreating
  }
}