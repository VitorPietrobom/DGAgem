import { ButtonBase, ButtonProps, styled } from "@mui/material";


export const SecondaryButton = styled(ButtonBase)<ButtonProps>(({ theme }) => ({
    color: "black",
    background: "gray",
    borderRadius: 20,
    fontWeight: "bolder",
    fontSize: 16,
    padding: "5px 50px"
}));