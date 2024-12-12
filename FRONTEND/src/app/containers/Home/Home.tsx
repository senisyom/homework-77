import { CircularProgress, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchMessages } from "../../../store/messagesThunk";
import React, { useEffect } from "react";
import MessageItem from "../../../components/MessageItem/MessageItem";
import {
  selectFetchMessageLoading,
  selectMessages,
} from "../../../store/messagesSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const messagesLoading = useAppSelector(selectFetchMessageLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  let messagesArea: React.ReactNode = <CircularProgress />;

  if (!messagesLoading && messages) {
    messagesArea = messages.map((message) => (
      <MessageItem
        key={message.id}
        author={message.author}
        message={message.message}
        image={message.image}
      />
    ));
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container direction="column" spacing={2}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Typography variant="h4">Отзывы</Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Grid container spacing={1}>
          {messagesArea}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
