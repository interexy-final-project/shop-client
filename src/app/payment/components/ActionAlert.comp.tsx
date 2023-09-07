import { Stack, Alert } from "@mui/material";

interface ActionAlertsProps {
  isAlertInvoked: boolean;
  setIsAlertInvoked: (arg: boolean) => void;
  orderErrors: string | null;
  alertMessage: string;
  setAlertMessage: (arg: string) => void;
  isWarning: boolean;
  setIsWarning: (arg: boolean) => void;
}

const ActionAlert: React.FC<ActionAlertsProps> = ({
  isAlertInvoked,
  setIsAlertInvoked,
  orderErrors,
  alertMessage,
  setAlertMessage,
  isWarning,
  setIsWarning,
}: ActionAlertsProps) => {
  const handleAlertClosed = () => {
    setIsAlertInvoked(false);
    setAlertMessage("");
    setIsWarning(false);
  };

  if (isAlertInvoked && orderErrors === null && !isWarning) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        {}
        <Alert severity="success" onClose={handleAlertClosed}>
          {alertMessage}
        </Alert>
      </Stack>
    );
  }

  if (isAlertInvoked && orderErrors && !isWarning) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        {}
        <Alert severity="error" onClose={handleAlertClosed}>
          {alertMessage}
        </Alert>
      </Stack>
    );
  }

  if (isWarning) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        {}
        <Alert severity="warning" onClose={handleAlertClosed}>
          {alertMessage}
        </Alert>
      </Stack>
    );
  }
};

export default ActionAlert;
