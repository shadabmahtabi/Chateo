import { useInputValidation } from "6pp";
import {
  Button,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import Container from "@mui/material/Container";
import { Navigate } from "react-router-dom";

const isAdmin = false
const AdminLogin = () => {
  
  const sekretKey = useInputValidation()
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("admin_login")
  }

  if(isAdmin) return <Navigate to={'/admin/dashboard'} />

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="initial">
            Admin Login
          </Typography>
          <form
            onSubmit={SubmitHandler}
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <TextField
              required
              fullWidth
              margin="normal"
              type="password"
              variant="outlined"
              label="Sekret Key"
              value={sekretKey.value}
              onChange={sekretKey.changeHandler}
            />
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
