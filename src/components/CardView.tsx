import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Photo } from "../types";
import Grid from "@mui/material/Grid";

interface CardViewProps {
  photos: Photo[];
}

const CardView = ({ photos }: CardViewProps): JSX.Element => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} data-testid="test-card-view">
      {photos.map((photo) => (
        <Card className="card" key={photo.id}>
          <img width="100%" src={photo.image} alt={photo.title} loading="lazy" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {photo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {photo.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default CardView;
