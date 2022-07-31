import { CardActionArea, CircularProgress, Container } from "@mui/material";
import "./App.css";
import PostForm from "./components/PostForm";
import Axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Footer from './components/Footer'


function App() {
  const [PostList, setPostList] = useState({});
  const [loading, setLoading] = useState(false);
  const [Posted, setPosted] = useState(0);
  


  const onClick1 = () => {
    setPosted((c)=>c+1)
  };
 
  const Post = async () => {
    try {
      await Axios("https://gc-bucket-list-asratadne.herokuapp.com/read").then((response) => {
        console.log(response.data);
        setPostList(response.data);
       
        
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Post();
   
  },[Posted]);
 


  return (
    <div className="todo-app">
      <PostForm callparentfunction={() => onClick1()}  />
      <Container
        sx={{
          boxShadow: 4,
          borderRadius: 6,
          p: 2,
          minWidth: 300,
          my: 6,
          position: "sticky",
          backgroundColor: "lightblue",
          display: " grid",
          gridTemplateColumns: { md: " repeat(3,3fr)", xs: "repeat(1,1fr)" },
          columnGap: 3,
          rowGap: 4,
        }}
        fixed
      >
        {loading ? (
          <>
            {PostList.map((val, index) => {
              return (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing="4"
                  position="sticky"
                  key={index}   >
                  <Grid item xs={12} md={8}  >
                    <Card sx={{ maxWidth: { xs: 500, md: 600 },backgroundColor:"rgba(4, 61, 68, 0.89)" ,color:"lightblue", borderRadius:4,boxShadow:'10px 10px 10px #ccc' ,border:'2px solid green' }} >
                      <CardActionArea>
                        <CardContent >
                          <Typography gutterBottom variant="h5" component="div"   maxLength={400}>
                        <strong> {val.UserName}</strong>   
                          </Typography>
                          <Typography variant="body2"  maxLength={100} >
                           <strong> {val.Post}</strong>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
          </>
        ) : (
          <div><CircularProgress /></div>
        )}
      </Container>
 <Footer/>
    </div>
  );
}

export default App;
