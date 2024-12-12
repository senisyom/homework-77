import React from "react";
import axiosAPI from "../../axiosApi";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

interface Props {
  author: string;
  message: string;
  image: string | null;
}

const MessageItem: React.FC<Props> = ({ author, message, image }) => {
  const cardImage = axiosAPI + "/" + image;

  return (
    <Grid size={{ xs: 12, md: 6, sm: 12, lg: 4 }}>
      <Card sx={{ height: "100%" }}>
        <CardHeader title={author} />
        <ImageCardMedia image={cardImage} title={author} />
        <CardContent>
          <strong>{message}</strong>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MessageItem;
