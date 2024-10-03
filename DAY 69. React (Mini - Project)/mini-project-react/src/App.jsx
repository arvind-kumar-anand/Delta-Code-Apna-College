import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

let handleContained = () => {
  console.log("Button Clicked");
};

function App() {
  return (
    <>
      <Button
        variant="contained"
        onClick={handleContained}
        size="small"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <Button
        variant="contained"
        color="success"
        size="medium"
        onClick={handleContained}
        endIcon={<SendIcon />}
      >
        Send
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={handleContained}
        size="large"
      >
        Error
      </Button>

      <Alert severity="success">This is a success Alert.</Alert>
    </>
  );
}

export default App;
