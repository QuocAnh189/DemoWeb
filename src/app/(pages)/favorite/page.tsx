import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Create = () => {
  return (
    <Box maxW="480px" maxH="100%">
      <FormControl isRequired mb="40px">
        <FormLabel>Task name:</FormLabel>
        <Input type="text" name="title" />
        <FormHelperText>Enter a descriptive task name</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Task description:</FormLabel>
        <Textarea
          placeholder="Enter a detailed description for the task..."
          name="description"
        />
        <FormHelperText>Enter a descriptive task name</FormHelperText>
      </FormControl>

      <FormControl display="flex" alignItems="center" mb="480px">
        <Checkbox name="isPriority" size="lg" />
        <FormLabel ml="10px" mb="0">
          Make this a priority task.
        </FormLabel>
      </FormControl>

      <Button color="white" bg="purple.400">
        Submit
      </Button>
    </Box>
  );
};

export default Create;
