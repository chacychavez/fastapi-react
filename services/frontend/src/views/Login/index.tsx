import { Box, Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { loginUserFn } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginUserFn,
    onSuccess: async (response) => {
      console.log(response);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", event.target["login-username"].value);
    formData.append("password", event.target["login-password"].value);
    loginUser(formData);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Typography>Login</Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
        display="flex"
        flexDirection="column"
        width="50vw"
      >
        <TextField id="login-username" label="Username" variant="standard" />
        <TextField id="login-password" label="Password" variant="standard" />
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
