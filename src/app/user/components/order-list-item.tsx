import { Paper, Button, Box, Typography, Stack } from "@mui/material";
import l from "../../../lang/l";
import img from '../../../assets/images/product-img.jpg'

const OrderListItem = () => {
  return (
    <Box>
      <Paper sx={{ bgcolor: "#F6F6F6" }}>
        <Typography variant="h5" gutterBottom>
          {l("orderItem.orderTitle")}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography gutterBottom>{l("orderItem.orderDate")}</Typography>
            <Typography gutterBottom>{l("orderItem.orderEstimation")}</Typography>
          </Box>
          <Box>
            <Typography gutterBottom>{l("orderItem.orderStatus")}</Typography>
            <Typography gutterBottom>{l("orderItem.orderPaymentMethod")}</Typography>
          </Box>
        </Stack>
      </Paper>
      <Box sx={{marginTop: 5}}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Stack direction={"row"} spacing={2}>
            <Box component={"img"} src={img}/>
            <Box>
              <Typography>Black Printed T-shirt</Typography>
              <Typography>{l('orderItem.color')}</Typography>
              <Typography>{l('orderItem.quantity')}</Typography>
              <Typography>{l('orderItem.total')}</Typography>
            </Box>
          </Stack>
          <Button variant="contained">{l('orderItem.detailButton')}</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default OrderListItem;
