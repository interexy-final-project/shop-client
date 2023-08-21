import { Paper, Stack, Box, Typography } from '@mui/material'
import img from '../../../assets/images/product-img.jpg'
import l from '../../../lang/l'

const OrderItem = () => {
 return(
    <Paper sx={{marginTop: 5, padding: 1}}>
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
    </Stack>
  </Paper>
 )
}

export default OrderItem;