import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function NewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          {props.title && (
            <Typography gutterBottom variant="h5" component="h2">
              {props.title.substr(0, 20) + "..."}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content ? props.content : props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={props.url} className="readMore">
            Read More...
          </a>
        </Button>
        <small className="publishedDate">
          Published At:
          {new Date(props.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </small>
      </CardActions>
    </Card>
  );
}
export default NewsCard;
