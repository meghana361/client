import { Box, Divider, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Data } from "../Utils/Data";
import { GoAlertFill } from "react-icons/go";
import { Text } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { RiHome2Line } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import { CiUser } from "react-icons/ci";

import { MdSearch } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
const Workoutschedule = () => {
  return (
    <>
    <Stack>
      <Flex align={"center"} justify={"center"}>
        <Heading color={"rgba(22, 21, 21, 0.8)"} size='lg'>Workout Schedule</Heading>
      </Flex>
      <Flex align={"center"} justify={"center"}>
        <Text color={"gray.900"}>Feb 2024 </Text>
      </Flex>
      <Flex>
        <Box ml={"20px"} 
        boxShadow={"xl"} height={"70px"} w={"60px"} rounded={"10px"}>
          <Text mt={"7px"} ml={"12px"}color={"black"}>Mon</Text>
          <Text  ml={"18px"} color={"black"}>5</Text>
        </Box>
        <Box ml={"20px"}
        boxShadow={"xl"} height={"70px"} w={"60px"} rounded={"10px"}  bgGradient="linear(to-l, #d9b3ff, #8bc8de)"
        >
          
          <Text mt={"7px"} ml={"12px"} color={"white"}>Tue</Text>
          <Text  ml={"18px"}color={"white"}>6</Text>
        </Box>
        <Box color={"black"} ml={"20px"} rounded={"10px"}
        boxShadow={"xl"} height={"70px"} w={"60px"}>
          {" "}
          <Text mt={"7px"} ml={"14px"} color={"black"}>wed</Text>
          <Text  ml={"18px"} color={"black"}>7</Text>
        </Box>
        <Box ml={"20px"}
        boxShadow={"xl"} height={"70px"} w={"60px"} rounded={"10px"}>    
          {" "}
          <Text  mt={"7px"} ml={"14px"} color={"black"}>Thu</Text>
          <Text  ml={"18px"} color={"black"}>8</Text>
        </Box>
        <Box ml={"20px"}
        boxShadow={"xl"} height={"70px"} w={"60px"} rounded={"10px"}>
          {" "}
          <Text mt={"7px"} ml={"14px"} color={"black"}>Fri</Text>
          <Text ml={"18px"} color={"black"}>9</Text>
        </Box>
      </Flex>
      <Text color={"black"} ml={"20px"}>06:00 Am</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>07:00 Am</Text>
      <HStack>

      <Box width={"170px"} border={"solid 1px gray"}/><Box w={"130px"} rounded={"10px"} bgGradient='linear(to-r, green.200, pink.500)'><Text color={"white"}> Ab Workout</Text></Box>
      <Box width={"180px"} border={"solid 1px gray"}/>
      </HStack>

      <Text color={"black"} ml={"20px"}>08:00 Am</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>09:00 Am</Text>
      <HStack>

      <Box width={"170px"} border={"solid 1px gray"}/><Box w={"220"} rounded={"10px"} bgGradient='linear(to-r, green.200, pink.500)' ><Text  width={"200px"}color={"white"}> Upperbody Workout,9am</Text></Box>
      <Box width={"100px"} border={"solid 1px gray"}/>
      </HStack>
 
      <Text color={"black"} ml={"20px"}>10:00 Am</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>11:00 Am</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>12:00 Pm</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>01:00 Pm</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>02:00 Pm</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>03:00 Pm</Text>
      <Box width={"full"} border={"solid 1px gray"}/>
      <Text color={"black"} ml={"20px"}>04:00 Pm</Text>
   
     
    </Stack>
   

      <Flex bg={"gray.800"} justify={"space-evenly"} bgGradient="linear(to-l, #6397ff, #590077)" gap={2} mt={"2px"}>
        <Box h={"30px"} w={"30px"} mt={"4px"}>
          <RiHome2Line />
        </Box >
        <Box h={"30px"} w={"30px"} mt={"4px"}>
          <BsGraphUpArrow />
        </Box>
        <Box h={"30px"} w={"30px"} mt={"4px"}>
        <BsSearch />

        </Box>
        <Box h={"30px"} w={"30px"} mt={"4px"}>
          <CiCamera />
        </Box>

        <CiUser />
      </Flex>


            </>
  );
};

export default Workoutschedule;
