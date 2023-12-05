"use client";

import { useState, useEffect } from "react";
//chakra
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Icon, Search2Icon } from "@chakra-ui/icons";

//component
import CardItem from "src/components/Card";

//redux
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchBlogs } from "src/redux/slices/blogSlice";

//filter
import filter from "lodash.filter";

import { getExs } from "src/app/actions";
//interface
import { IBlog } from "src/style";

const Home = () => {
  const dispatch = useAppDispatch();
  const [exs, setExs] = useState<IBlog[]>([]);

  useEffect(() => {
    getExs()
      .then((res) => {
        console.log(res);
        setExs(res);
        dispatch(fetchBlogs(res));
      })
      .catch((e) => {
        console.log(e);
        setExs([]);
        dispatch(fetchBlogs([]));
      });
  }, [dispatch]);

  const blogs = useAppSelector((state) => state.blog.blogs);
  useEffect(() => {
    setExs(blogs);
  }, [blogs]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const contains = ({ name }: { name: any }, query: string) => {
      if (name.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    };

    const value = e.target.value;
    const formatQuery = value.toLowerCase();
    const filterData = filter(blogs, (category) => {
      return contains(category, formatQuery);
    });
    setExs(filterData);
  };

  return (
    <>
      <InputGroup borderRadius={5} size="sm" w="300px" position="absolute" right="20">
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          onChange={(e) => handleChange(e)}
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      <SimpleGrid mt="100px" columns={4} p="10px" spacing={10} minChildWidth="300px">
        {exs.length ? (
          exs.map((ex: IBlog) => <CardItem key={ex?._id} ex={ex} />)
        ) : (
          <Text>No result</Text>
        )}
      </SimpleGrid>
    </>
  );
};

export default Home;
