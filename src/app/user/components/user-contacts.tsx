import { Box, Divider, Typography, Stack } from "@mui/material"
import l from '../../../lang/l'
import ContactItem from "./contacts-item";

const UserContacts = () => {
    //GET UserInfo

    return(
        <Box>
            <Typography>{l('userContacts.contactsTitle')}</Typography>
            <Typography>{l('userContacts.contactsDetails')}</Typography>
            <Stack spacing={4} divider={<Divider/>}>
                <ContactItem variant="common" data={{name: 'Some', value: 'Name'}} />
                <ContactItem variant="common" data={{name: 'Some', value: 'Name'}} />
                <ContactItem variant="common" data={{name: 'Some', value: 'Name'}} />
                <ContactItem variant="secured" data={{name: 'Some', value: 'Name'}} />
            </Stack>
        </Box>
    )
}

export default UserContacts;