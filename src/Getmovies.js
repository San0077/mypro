import { useNavigate } from "react-router";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from 'react-bootstrap/Badge';

export function Getmovies({ mov }) {
  const navigate = useNavigate();
  const [like,setlike] = useState(0)
  let id = mov.id;
  return (
    <div className="col-lg-4">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image={mov.pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mov.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mov.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" ><a href={mov.learn}>Learn</a></Button>
          <Button size="small" onClick={()=>setlike(like+1)}>
            Like<h4><sup><Badge bg="success">{like}</Badge></sup></h4></Button>
          <Button size="small" onClick={()=>navigate("/bookYourSeats/"+id)}>Book Now</Button>
        </CardActions>
      </Card>
    </div>
  );
}
