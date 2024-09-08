import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/samepleData";
import UserItem from "../shared/UserItem";

const NewGroup = ({setIsNewGroup}) => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((itm) => itm !== id) : [...prev, id]
    );
  };

  const submitHandler = () => {};
  const closeHandler = () => {
    setSelectedMembers([])
    setIsNewGroup(false)
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        maxWidth={"25rem"}
        width={{ xs: "18rem", sm: "25rem" }}
        spacing={"1rem"}
      >
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack
          sx={{
            maxHeight: { xs: "25rem", sm: "20rem" },
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {members.map((itm, idx) => (
            <UserItem
              user={itm}
              key={itm._id}
              handler={() => selectMemberHandler(itm._id)}
              isAdded={selectedMembers.includes(itm._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" color="primary" onClick={submitHandler}>
            Create
          </Button>
          <Button variant="outlined" color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
