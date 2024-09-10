import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { blackColor, greyColor, hoverBlackColor } from "../constants/color";
import {
  Menu as MenuIcon,
  KeyboardBackspace as BackIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../components/specific/GroupList";
import { sampleChats, sampleUsers } from "../constants/samepleData";
import AddMemberDialog from "../components/dialogs/AddMemberDialog";
import UserItem from "../components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);

const Groups = () => {
  const chatId = parseFloat(useSearchParams()[0].get("group"));
  // console.log(chatId)
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAddMember, setIsAddMember] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const NavigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobile(true);
  };

  const handleClose = () => {
    setIsMobile(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
  };

  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete group");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler = () => {
    console.log("Delete group");
  };

  const removeMemberHandler = (id) => {
    console.log("Remove Member", id);
  };

  const openAddMembersHandler = () => {
    console.log("add member");
    setIsAddMember(true);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
      handleClose();
    }
    if (!chatId) {
      handleMobile();
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          position: "fixed",
          right: "1rem",
          top: "2rem",
        }}
      >
        <Tooltip title="Menu">
          <IconButton onClick={handleMobile}>
            <MenuIcon sx={{ fontSize: "1.7rem" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title={"Back"}>
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "1rem",
            bgcolor: blackColor,
            color: "#fff",
            ":hover": {
              bgcolor: hoverBlackColor,
            },
          }}
          onClick={NavigateBack}
        >
          <BackIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        sx={{
          padding: {
            xs: "5rem 0 1rem 0",
            sm: "1rem",
          },
        }}
        // padding={"5rem 0 0 0"}
        // bgcolor={"red"}
      >
        {isEdit ? (
          <>
            <TextField
              value={groupNameUpdatedValue}
              onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
            />
            <IconButton onClick={updateGroupName}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton onClick={() => setIsEdit(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        sm={3}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
          bgcolor: greyColor,
        }}
        xs={12}
        sm={9}
      >
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={".5rem 0 1rem 0"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                xs: "0",
                sm: "1rem",
                md: "0rem 4rem",
              }}
              // spacing={"0.5rem"}
              maxHeight={{
                xs: "60vh",
                sm: "65vh",
              }}
              overflow={"auto"}
              sx={{
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {sampleUsers.map((user, idx) => (
                <UserItem
                  user={user}
                  key={idx}
                  styling={{
                    padding: "1rem",
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    borderRadius: "1rem",
                  }}
                  isAdded
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>

            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              spacing={"1rem"}
              p={{
                xs: "1rem 0 0 0",
                sm: "1rem",
                md: "1rem 4rem",
              }}
            >
              <Button
                size="large"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={confirmDeleteHandler}
              >
                Delete Group
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAddMembersHandler}
              >
                Add Member
              </Button>
            </Stack>
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog setIsAddMember={setIsAddMember} />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        open={isMobile}
        onClose={handleClose}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <GroupList w={"80vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

export default Groups;
