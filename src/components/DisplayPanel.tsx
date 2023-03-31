import { Box, CircularProgress } from "@mui/material";
import { usePhotos } from "../hooks/usePhotos";
import DisplayTabs from "./DisplayTabs";
import { ContentTab } from "../types";
import Carousel from "./Carousel";
import GridView from "./GridView";
import CardView from "./CardView";
import ListView from "./ListView";
import { useSelector } from "react-redux";
import { getLoading } from "../redux/photoReducer";

const DisplayPanel = (): JSX.Element => {
  const isLoading = useSelector(getLoading);
  const { photos } = usePhotos();
  if (isLoading) {
    return (
      <Box
        sx={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  const tabs: ContentTab[] = [
    {
      label: "Carousel",
      value: 0,
      content: <Carousel photos={photos} />,
    },
    {
      label: "Grid",
      value: 1,
      content: <GridView photos={photos} />,
    },
    {
      label: "List",
      value: 2,
      content: <ListView photos={photos} />,
    },
    {
      label: "Card",
      value: 3,
      content: <CardView photos={photos} />,
    },
  ];

  return (
    <div className="container">
      <DisplayTabs tabs={tabs} />
    </div>
  );
};

export default DisplayPanel;
