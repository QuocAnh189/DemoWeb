"use client"

import { SimpleGrid } from "@chakra-ui/react";
import CardItem from "src/components/Card";

const Home = () => {
  return (
    <SimpleGrid columns={4} p="10px" spacing={10} minChildWidth="300px">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </SimpleGrid>
  );
};

export default Home;

// export default function Home() {
//     const [task, setTask] = useState<ITask[]>();

//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(`http://localhost:3001/tasks`);
//         const newData = await response.json();
//         setTask(newData);
//       };

//       fetchData();
//     }, []);

//     return (
//       <SimpleGrid columns={4} p="10px" spacing={10} minChildWidth="300px">
//         {task &&
//           task.map((task) => (
//             <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
//               <CardHeader>
//                 <Flex gap={5}>
//                   <Avatar src={task.img}/>
//                   <Box>
//                     <Heading as="h3" size="sm">
//                       {task.title}
//                     </Heading>
//                     <Text>by {task.author}</Text>
//                   </Box>
//                 </Flex>
//               </CardHeader>
//               <CardBody color="gray.500">
//                 <Text>{task.description}</Text>
//               </CardBody>

//               <Divider/>

//               <CardFooter>
//                 <HStack>
//                   <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
//                   <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
//                 </HStack>
//               </CardFooter>
//             </Card>
//           ))}
//       </SimpleGrid>
//     );
//   }
