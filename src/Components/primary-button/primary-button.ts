import { ButtonBase, ButtonProps, styled } from "@mui/material";


export const PrimaryButton = styled(ButtonBase)<ButtonProps>(({ theme }) => ({
    color: "white",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(161,24,17,1) 0%, rgba(203,34,26,1) 100%)",
    borderRadius: 20,
    fontWeight: "bolder",
    fontSize: 16,
    padding: "5px 50px"
}));