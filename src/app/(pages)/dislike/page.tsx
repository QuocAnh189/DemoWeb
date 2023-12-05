"use client";

import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList> 
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:anhquoc18092003@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Email:anhquoc18092003@gmail.comEmail:anhquoc18092003@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:anhquoc18092003@gmail.comaaaaaaaaaa
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
