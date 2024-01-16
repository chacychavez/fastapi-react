import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletNoteFn, getNoteFn, updateNoteFn } from "../../services/api";

export default function useNoteInfo(id: number) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  const { data: note, refetch: refetchNote } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNoteFn(Number(id ?? -1)),
    retry: false,
  });

  const { mutate: updateNote, isPending: isUpdating } = useMutation({
    mutationFn: updateNoteFn,
    onSuccess: async (response) => {
      console.log(response);
      setTitle("");
      setContent("");
      setIsEditMode(false);
      await refetchNote();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault();
    updateNote({ id: Number(id ?? -1), title, content });
  };

  const { mutate: deleteNote, isPending: isDeleting } = useMutation({
    mutationFn: deletNoteFn,
    onSuccess: async (response) => {
      console.log(response);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDeleteNote = () => {
    deleteNote(Number(id ?? -1));
  };

  return {
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
    isDeleting
  }
}