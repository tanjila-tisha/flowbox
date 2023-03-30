import Grid from "@mui/material/Grid";
import { Photo } from "../types";

interface GridViewProps {
  photos: Photo[];
}

const GridView = ({ photos }: GridViewProps): JSX.Element => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }} data-testid="test-grid-view">
      {photos.map((photo) => (
        <Grid item md={4} xs={12} key={photo.id}>
          <img width="100%" src={photo.image} alt={photo.title} loading="lazy" />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;
