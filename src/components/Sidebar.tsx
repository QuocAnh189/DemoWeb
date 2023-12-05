"use client";

import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";

//redux
import { useAppDispatch } from "src/redux/hooks";
import { setTitle } from "src/redux/slices/titleSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem _selected={{ bgColor: "red" }}>
        <Link href="/home" onClick={() => dispatch(setTitle("My Ex"))}>
          <ListIcon as={CalendarIcon} /> Home
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/favorite" onClick={() => dispatch(setTitle("Favorite"))}>
          <ListIcon as={EditIcon} />
          Favorite
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/dislike" onClick={() => dispatch(setTitle("Dislike"))}>
          <ListIcon as={AtSignIcon} />
          DisLike
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/checklist" onClick={() => dispatch(setTitle("List"))}>
          <ListIcon as={AtSignIcon} />
          Check List
        </Link>
      </ListItem>
    </List>
  );
};

export default Sidebar;
