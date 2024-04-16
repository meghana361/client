import React from 'react'
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
    
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const gotolandingpage=()=>{
        navigate("/home")
    }
    const [showPassword, setShowPassword] = useState(true);
  return (
    <Flex align={"center"} justify={"center"}  bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.300)',
      ]}>
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
            </Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "white")} color="black" boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              
                    <Box>
                        <FormControl isRequired> 
                            <FormLabel>First name</FormLabel>
                            <Input border={"solid black 1px"}
                                type='text'
                                _hover={{
                                    borderColor:"blue.400"
                                }}
                               
                            />
                        </FormControl>
                    </Box>
                    
                    <Box>
                        <FormControl isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input border={"solid black 1px"} 
                            _hover={{
                            borderColor:"blue.400"
                        }}
                                type='text'
                               
                            />
                        </FormControl>
                    </Box>
            
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input border={"solid black 1px"}
                        type='email'
                        _hover={{
                            borderColor:"blue.400"
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input border={"solid black 1px"}   _hover={{
                            borderColor:"blue.400"
                        }}
                            type={showPassword ? "text" : "password"}
                          
                        />
                        <InputRightElement h={"full"}>
                        <Button  display={"block"} bg={"gray.400"} h={"30px"} mr={"5px"}  _hover={{
                            bgGradient:'linear(to-r, #3dff3d.200, #fff0f0.500)'
                        }}
                                variant={"ghost"}
                                onClick={() => setShowPassword((showPassword) => !showPassword)}
                            >
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                    <Button
       
                        size='lg'
                        bgGradient='linear(to-r, #6a8bcd, #be56bc)'
                        color={"white"}
                        _hover={{
                            bgGradient:'linear(to-r, green.200, pink.500)'
                        }}
                        onClick={()=>gotolandingpage()}
                  
                    >
                        Sign up
                    </Button>
                </Stack>
                <HStack>

                <Box width={"100px"} border={"solid 1px black"}/>
                <h1>or</h1>
                <Box width={"100px"} border={"solid 1px black"}/>
                </HStack>
                <Flex justifyContent={"space-between"}gap={"10"}>
                  
                    <Link >
                    <FcGoogle/>
        </Link>
                
                    <Link>
                <BsFacebook />
                    </Link>
                </Flex>
                <Stack pt={6}>
                    <Text align={"center"}>
                        Already a user?{" "}
                        <Link color={"blue.400"}>
                            Login
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </Box>
    </Stack>
</Flex>
);
}
export default Signup;