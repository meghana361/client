import { Box, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
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

const WorkoutTracker = ({ chartData }) => {
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Heading color={"rgba(22, 21, 21, 0.8)"} size='lg'>Workout Tracker</Heading>
      </Flex>
      <Flex align={"center"} justify={"center"}>
        <Box
          height={"300px"}
          w={{ base: "320px", md: "350px", lg: "400px" }}
          flex={true}
          alignContent={"center"}
        >
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                    text: "Your daily achievements",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
          <Flex
            w={{ base: "300px", md: "200px", lg: "400px" }}
            height={"60px"}
            mt={"10px"}
            border={"solid 2px gray"}
            rounded={"10px"}
            color={"black"}
            bgGradient="linear(to-l, #fdfbff, #6ba9bf)"
          >
            <Box ml={"20px"} mt={"20px"}>
              <GoAlertFill />
            </Box>
            <Text
              noOfLines={2}
              color={"black"}
              ml={"10px"}
              mt={"10px"}
              fontSize={{ base: "13px", md: "10px", lg: "28px" }}
            >
          
              You&apos;ve burned fewer calories than yesterday . Time to get
              moving!{" "}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Stack>
        <Flex align={"center"} justify={"space-around"}>
          <Flex justify={"center"}>
            <Text
              color={"black"}
              fontSize={{ base: "12px", md: "15px", lg: "28px" }}
              ml={{ base: "1px", md: "15px", lg: "28px" }}
            >
              Upcoming Workout
            </Text>
          </Flex>
          <Box>
            <Text color={"gray"}>See more</Text>
          </Box>
        </Flex>

        <Flex align={"center"} justify={"center"}>
          <HStack
            
            w={{ base: "300px", md: "180px", lg: "500px" }}
            rounded={"20px"}
            boxShadow={"xl"}
            mb={"10px"}
          >
            <Box rounded={"20px"} boxShadow="xl">
              <img src="./workout.png" width={"80px"} height={"70px"} />
            </Box>
            <Box>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
              >
                Full Body workout
              </Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
              >
                Today 3pm
              </Text>
            </Box>
            <Box ml={"40px"}>
              <input type="checkbox" className="toggle" checked />
            </Box>
            {/* <input type="checkbox" className="toggle toggle-primary" checked /> */}
          </HStack>
        </Flex>

        <Flex align={"center"} justify={"center"}>
          <HStack
            // border={"solid 2px gray"}
            w={{ base: "300px", md: "180px", lg: "500px" }}
            rounded={"20px"}
            boxShadow={"xl"}
            mb={"10px"}
          >
            <Box h={"100px"} rounded={"20px"} boxShadow="xl">
              <img src="./yoga.png" width={"80px"} height={"70px"} />
            </Box>
            <Box>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
              >
                Yoga
              </Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
              >
                4th Feb , 3:30pm
              </Text>
            </Box>
            <Box ml={"40px"}>
              <input type="checkbox" className="toggle" checked />
            </Box>
          </HStack>
        </Flex>
        <Flex align={"center"} justify={"center"}>
          <HStack
            border={"solid 1 gray"}
            w={{ base: "300px", md: "180px", lg: "500px" }}
            rounded={"20px"}
            bgGradient="linear(to-l, #cbdcff, #0da0b7)"
          >
           
            <Box  >
              <Text
                color={"gray.800"}
                fontSize={{ base: "15px", md: "25px", lg: "28px" }} ml={"20px"}
              >
                Full Body Workout
              </Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
                ml={"20px"}
              >
                Arms
              </Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "12px", md: "15px", lg: "28px" }}
                ml={"20px"}
              >
                chest
              </Text>
            </Box>
            <Box h={"100px"} rounded={"20px"} boxShadow="xl" ml={"80px"}>
              <img src="./arms.png" width={"80px"} height={"70px"} />
            </Box>
          </HStack>
        </Flex>

      </Stack>
      <Box  w={"full"} mb={"20px"} >

        <Flex bg={"gray.800"} justify={"space-evenly"} bgGradient="linear(to-l, #6397ff, #590077)" gap={2}>
          <Box h={"30px"} w={"30px"}>
            <RiHome2Line />
          </Box >
          <Box h={"30px"} w={"30px"}>
            <BsGraphUpArrow />
          </Box>
          <Box h={"30px"} w={"30px"}>
          <BsSearch />

          </Box>
          <Box h={"30px"} w={"30px"}>
            <CiCamera />
          </Box>

          <CiUser />
        </Flex>
</Box>
      
    </>
  );
};

export default WorkoutTracker;
