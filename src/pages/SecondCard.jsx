import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from 'react-router-dom';
const SecondCard = () => {
  const navigate=useNavigate();
  return (
    <>
      <Stack>
        <Box>
          <Button
            ml={"300px"}
            w={"50px"}
            color={"white"}
            h={"23px"}
            bgGradient="linear(to-l, #6a22b2, #6ba9bf)"
            rounded={"full"}
            _hover={{ bgGradient:"linear(to-l, #e3dce9, #6ba9bf)" }}
            onClick={()=>navigate("/goal")}
          >
            skip
          </Button>
        </Box>
        <Flex justify={"center"}>
          <img src="./cycle2.jpg" alt="" />
        </Flex>

        <Flex ml={"20px"}>
          <Heading size={"md"} color={"rgba(22, 21, 21, 0.8)"}>
            Get Burn
          </Heading>
        </Flex>
        <Box ml={"20px"} w={{ base: "320px", md: "370px", lg: "400px" }}>
          <Text color={"rgba(22, 21, 21, 0.8)"}>
            Let&apos;s keep burning to achieve your goals, it hurts only
            temporarily, if you give up now you will be in pain forever
          </Text>
        </Box>
        <Flex justify={"flex-end"} gap={3} mr={"20px"} h={"180px"}>
          <Button
            bgGradient="linear(to-l, #8564a6, #178eb9)"
            w={"60px"}
            height={"60px"}
            rounded={"full"}
            _hover={{ bg: "rgba(58, 123, 229, 0.64) " }}
            onClick={()=>navigate("/goal")}
          >
            <ArrowCircleRightIcon />
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default SecondCard;
