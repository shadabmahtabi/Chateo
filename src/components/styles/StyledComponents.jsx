import { styled } from "@mui/material";
import { Link as LinkComponent} from "react-router-dom"
import { greyColor, mattBlack } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: "0",
    whiteSpace: "nowrap"
})

export const Link = styled(LinkComponent)({
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    '&:hover': {
        backgroundColor: "#f0f0f0",
    }
})

export const InputBox = styled('input')({
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    padding: "0 3rem",
    borderRadius: "1.5rem",
    backgroundColor: `${greyColor}`
})

export const SearchField = styled('input')({
    width: "20vmax",
    height: "100%",
    border: "none",
    outline: "none",
    padding: "1rem 2rem",
    borderRadius: "1.5rem",
    backgroundColor: `${greyColor}`,
    fontSize: "1.1rem"
})

export const CurvedButton = styled('button')({
    border: "none",
    outline: "none",
    // padding: "1rem 2rem",
    borderRadius: "1.5rem",
    backgroundColor: `${mattBlack}`,
    fontSize: "1.1rem",
    cursor: "pointer",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.8)"
    }
})