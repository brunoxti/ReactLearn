import { FC, ReactElement } from "react";
import { Button, ButtonProps, Grid, Stack } from "@mui/material";
import { MainContainer } from "./HomeStyle";
import Typography from "@mui/material/Typography";

type IProps = {
  count: number;
  statusPlay: number;
  onStart: Function;
  onPause: Function;
  onStop: Function;
};

const HomeView: FC<IProps> = ({
  count,
  statusPlay,
  onStart,
  onPause,
  onStop,
}) => {
  let buttons: ReactElement<ButtonProps>[] = [];

  console.log(statusPlay);
  if (statusPlay === 0) {
    buttons.push(
      <Button
        key={1}
        variant="outlined"
        color="error"
        onClick={() => onStart()}
      >
        Iniciar
      </Button>
    );
  } else if (statusPlay === 1) {
    buttons.push(
      <Button
        key={2}
        variant="outlined"
        color="error"
        onClick={() => onPause()}
      >
        Pausar
      </Button>
    );
    buttons.push(
      <Button key={3} variant="outlined" color="error" onClick={() => onStop()}>        
        Parar
      </Button>
    );
  } else {
    buttons.push(
      <Button
        key={1}
        variant="outlined"
        color="error"
        onClick={() => onStart()}
      >
        Despausar
      </Button>
    );
    buttons.push(
      <Button key={2} variant="outlined" color="error" onClick={() => onStop()}>
        Parar
      </Button>
    );
  }
  return (
    <MainContainer>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography gutterBottom variant="h1" color="primary.dark">
            Count {count}
          </Typography>
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={10}>
            {buttons}
          </Stack>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default HomeView;