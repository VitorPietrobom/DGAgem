import { ButtonBase, ButtonProps, styled } from "@mui/material";

interface OptionsButtonProps extends ButtonProps {
  isActive?: boolean;
}

export const OptionsButton = styled(ButtonBase)<OptionsButtonProps>(({ theme, isActive }) => ({
  color: isActive ? "white" : "black",
  borderRadius: 20,
  fontWeight: "bolder",
  fontSize: 16,
  padding: "5px 50px",
  background: isActive
    ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(161,24,17,1) 0%, rgba(203,34,26,1) 100%)"
    : 'gray',
}));