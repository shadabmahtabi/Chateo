import { Container, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mattBlack } from "../../constants/color";

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        width: {
          xs: "100%",
          lg: "75vw",
        },
        padding: "0",
      }}
    >
      <Paper
        sx={{
          padding: {
            xs: "1rem",
            sm: "1rem 4rem"
          },
          borderRadius: {
            xs: "0",
            lg: "1rem",
          },
          margin: "auto",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          boxShadow: "none",
        //   bgcolor: "red",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{ height: "80%" }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: mattBlack,
              color: "white",
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
