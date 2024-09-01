import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/samepleData";
import UserItem from "../shared/UserItem";

const Search = () => {
  const [users, setUsers] = useState(sampleUsers);
  const searchInput = useInputValidation("");
  let isLoadingSendFriendRequest = false;

  const addFriendHandler = () => {
    console.log("Friend");
  };
  return (
    <Dialog open>
      <Stack
        p={"2rem"}
        direction={"column"}
        width={{ xs: "20rem", sm: "25rem" }}
      >
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          value={searchInput.value}
          onChange={searchInput.changeHandler}
          label=""
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List sx={{maxHeight: "25rem", overflowY: "auto"}}>
          {users.map((itm) => {
            return (
              <UserItem
                user={itm}
                key={itm._id}
                handler={addFriendHandler}
                handleIsLoading={isLoadingSendFriendRequest}
              />
            );
          })}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
