import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import Axios from "axios";

export default function PostForm(props) {
  const [User, setUser] = useState("");
  const [Text, setText] = useState("");

  const addtoList = () => {
    Axios.post("https://gc-bucket-list-asratadne.herokuapp.com/data", {
      User: User,
      Text: Text,
    });

    document.getElementById("outlined-basic").value = "";
    document.getElementById("outlined-multiline-static").value = "";
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      maxWidth={500}
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      borderRadius={3}
      marginTop={5}
      padding={3}
      boxShadow={"10px 10px 10px 10px #ccc"}
      rowGap={3}
      sx={{
        backgroundColor: "lightblue",
      }}
    >
      <Typography variant="h5" component="h6" color="primary">
        {" "}
         Gc 2015 Bucket List
      </Typography>
      <TextField
        color="primary"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />

      <TextField
        id="outlined-multiline-static"
        label="Your Bucket List"
        multiline
        rows={4}
        defaultValue=""
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          addtoList();
          props.callparentfunction();
        }}
      >
        Post
      </Button>
    </Box>
  );
}
