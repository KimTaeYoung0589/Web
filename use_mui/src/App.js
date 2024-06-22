import "./App.css";
import TextFiled from "@mui/material/TextField";
import { Avatar, Box, Checkbox, Container } from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextFiled
          label="Email Address"
          name="email"
          required
          fullWidth
          autoComplete="email"
          autoFocus
          sx={{ mt: 3, mb: 2 }}
        />

        <TextFiled
          label="Password"
          type="password"
          name="password"
          fullWidth
          required
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontWeight: "bold",
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>

        <Grid container>
          <Grid item xs sx={{ mt: 1 }}>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
