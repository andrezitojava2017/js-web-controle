import { Alert, Snackbar } from "@mui/material";

type Props = {
    open: boolean;
    onClose: ()=>void;
    message:string;
    type: string | any ;
}

const MessageSnack = (props:Props) => {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}  anchorOrigin={{ vertical:"bottom", horizontal: "center" }}>
      <Alert onClose={props.onClose} severity={props.type} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnack;