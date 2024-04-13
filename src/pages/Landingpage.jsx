import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
const SecondCard = () => {
  const navigate=useNavigate();
  return (
    <>
      <Stack>
        <Box>
          <Button
            ml={{ base: "300px", md: "300px", lg: "500px" }}
            w={"50px"}
            color={"white"}
            h={"23px"}
            bgGradient="linear(to-l, #6a22b2, #6ba9bf)"
            rounded={"full"}
            onClick={()=>navigate("/goal")}
            _hover={{ bgGradient:"linear(to-l, #e3dce9, #6ba9bf)" }}
          >
            skip
          </Button>
        </Box>
        <Flex justify={"center"} height={"300px"} w={{ base: "320px", md: "370px", lg: "500px" }}  ml={{ base: "30px", md: "30px", lg: "500px" }}>
          <img src="./girl.png" alt="" />
        </Flex>

        <Flex ml={{ base: "30px", md: "30px", lg: "500px" }}>
          <Heading size={"md"} color={"rgba(22, 21, 21, 0.8)"}>
            Get Burn
          </Heading>
        </Flex>
        <Box ml={{ base: "30px", md: "30px", lg: "500px" }} w={{ base: "320px", md: "370px", lg: "400px" }}>
          <Text color={"rgba(22, 21, 21, 0.8)"}>
            Don&apos;t worry if you have trouble determining your goals.We xan help you determine your goals and track your goals.
          </Text>
        </Box>
        <Flex justify={"flex-end"} gap={3}  mr={{ base: "50px", md: "20px", lg: "50px" }} h={"180px"} >
          <Button
            bgGradient="linear(to-l, #8564a6, #178eb9)"
            w={"60px"}
            height={"60px"}
            rounded={"full"}
            _hover={{ bg: "rgba(58, 123, 229, 0.64) " }}
            onClick={()=>navigate("/secondcard")}
          >
            <ArrowCircleRightIcon />
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default SecondCard;
