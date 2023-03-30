import { Photo } from "../types";
import { Typography } from "@mui/material";

interface ListViewProps {
  photos: Photo[];
}

const ListView = ({ photos }: ListViewProps): JSX.Element => {
  return (
    <div className="list" data-testid="test-list-view">
      {photos.map((photo) => (
        <div className="list-item" key={photo.id}>
          <div className="image">
            <img width="100%" src={photo.image} alt={photo.title} loading="lazy" />
          </div>
          <Typography variant="body1" sx={{ paddingX: 3 }}>
            {photo.content}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ListView;
