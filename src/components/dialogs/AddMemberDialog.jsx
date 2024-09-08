import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/samepleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({
  addMember,
  isLoadingAddMember,
  chatId,
  setIsAddMember,
}) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((itm) => itm !== id) : [...prev, id]
    );
  };
  const addFriendHandler = () => {
    console.log("Friend Added");
  };
  const addMemberSubmitHandler = () => {
    console.log("Friend Added");
    closeHandler();
  };
  const closeHandler = () => {
    setSelectedMembers([]);
    setIsAddMember(false);
  };
  return (
    <Dialog open>
      <Stack p={"2rem"} width={"20rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack
          sx={{
            maxHeight: "25rem",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {members.length > 0 ? (
            members.map((user, idx) => (
              <UserItem
                user={user}
                key={idx}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={addMemberSubmitHandler}
            disabled={isLoadingAddMember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
