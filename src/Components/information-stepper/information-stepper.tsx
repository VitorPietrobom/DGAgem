import { Box, Grid, Step, StepConnector, StepIconProps, StepLabel, Stepper, stepConnectorClasses, styled } from "@mui/material";
import { ReactElement } from "react";
import { InformationStepperProps } from "../../Components/information-stepper/types";
import { Check } from "@mui/icons-material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#a11811',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#a11811',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#a11811',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#a11811',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    }),
  );

const QontoStepIcon = ({ active, completed, className }: StepIconProps) => {  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

export const InformationStepper = ({
    steps,
    activeStep
}: InformationStepperProps): ReactElement => {
    return (
        <Box>
            <Grid
                columns={{ xs: 12, sm: 6, md: 6, lg: 6 }}
            >

            </Grid>
            <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}