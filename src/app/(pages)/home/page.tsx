"use client";

import { useState, useEffect } from "react";
//chakra
import { SimpleGrid, Text } from "@chakra-ui/react";

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
      .catch(() => {
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
    // <SimpleGrid columns={4} p="10px" spacing={10} minChildWidth="300px">
    //   {/* <CardItem />
    //   <CardItem />
    //   <CardItem />
    //   <CardItem />
    //   <CardItem />
    //   <CardItem />
    //   <CardItem />
    //   <CardItem /> */}
    //   {exs ? (
    //     exs.map((ex: IBlog) => <CardItem key={ex?._id} ex={ex} />)
    //   ) : (
    //     <Text>No result</Text>
    //   )}
    // </SimpleGrid>
    <Text>No result</Text>
  );
};

export default Home;
