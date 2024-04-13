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
	ListItem,
	UnorderedList,Checkbox
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const GoalList = () => {
	const navigate=useNavigate();
  return (
	<>
	<Flex align={"center"} justify={"center"}  >

	<Heading color={"black"} fontSize={{ base: '24px', md: '40px', lg: '56px' }} mt={"40px"} >	
		What are your Goals?
	</Heading>
	</Flex>
	<Flex align={"center"} justify={"center"} w={"full"} h={"600px"} flexDirection={"column"} >
{/* <Stack flex={80} align={"center"} justify={"center"} w={"full"} h={"600px"}> */}

    {/* <UnorderedList color={"black"} >
    <ListItem>
	<Button color={"black"} w={"400px"} border={"solid 2px black"} mt={"20px"}>
	Weight Loss
	
	
	<Input ml={"200px"} w={"30px"}>
	</Input>	
	</Button>
	</ListItem>
    <ListItem>
	<Button color={"black"} w={"400px"} border={"solid 2px black"}  mt={"20px"}>
	
	Muscle Gain
	
	<Input ml={"200px"} w={"30px"}>
	</Input>
	</Button>
	</ListItem>
    <ListItem>
		<Button color={"black"} w={"450px"} border={"solid 2px black"}  mt={"20px"}>
		
		Flexibility and Mobility
		
		<Input ml={"120px"} w={"30px"}>
		</Input>
		</Button>
		</ListItem>
		<ListItem ><Button color={"black"} w={"200px"} border={"solid 2px black"}  mt={"20px"}>
		
		General Fitness
		</Button>
		
		</ListItem>
		<ListItem>
		<Button color={"black"} w={"240px"} border={"solid 2px black"}  mt={"20px"}>
		
		Event-specific training
		</Button>
		</ListItem>
		<ListItem>
		<Button color={"black"} w={"300px"} border={"solid 2px black"}  mt={"20px"}>
		
		Mindfulness and Mental Health
		</Button>
		</ListItem>
		
		
	</UnorderedList> */}

  <Box w={{ base: '320px', md: '250px', lg: '500px' }} h={"45px"} rounded={"10px"} mt={"25px"} bg={"gray.300"}>
	<UnorderedList>
		<ListItem color={"black"} ml={"20px"}>
			Weight Loss
			<InputGroup>
	
	<InputRightElement>
	<Checkbox border={"#0d64a2 2px"} mr={"10px"}
 mb={"47px"}  >

	</Checkbox>
	</InputRightElement>
	
			</InputGroup>
		</ListItem>
	</UnorderedList>
  </Box>
  <Box  w={{ base: '320px', md: '250px', lg: '500px' }} h={"45px"} rounded={"10px"} mt={"25px"} bg={"gray.300"}>
	<UnorderedList>
		<ListItem color={"black"} ml={"20px"}>
			Muscle Gain
			<InputGroup>
	
	<InputRightElement>
	<Checkbox border={"#0d64a2 2px"} mr={"10px"}
 mb={"47px"}  >

</Checkbox>
	</InputRightElement>
	
			</InputGroup>
		</ListItem>
		
	</UnorderedList>
  </Box>
  <Box  w={{ base: '320px', md: '250px', lg: '500px' }} h={"45px"} rounded={"10px"} mt={"25px"}  bg={"gray.300"}>
	
	<UnorderedList flex={true}>
		<ListItem color={"black"} ml={"20px"} >
	Flexibility And Mobility
	
	<InputGroup>
	
	<InputRightElement>
	<Checkbox border={"#0d64a2 2px"} mr={"10px"}
 mb={"47px"}  >

</Checkbox>
	</InputRightElement>
	
			</InputGroup>
		</ListItem>
	</UnorderedList>
  </Box>
  <Box  w={{ base: '320px', md: '250px', lg: '500px' }} rounded={"10px"} mt={"25px"} h={"45px"} bg={"gray.300"}>
	<UnorderedList>
		<ListItem color={"black"} ml={"20px"}>
			General Fitness
			<InputGroup>
	
	<InputRightElement>
	<Checkbox border={"#0d64a2 2px"} mr={"10px"}
 mb={"47px"}  >

</Checkbox>
	</InputRightElement>
	
			</InputGroup>
		</ListItem>
	</UnorderedList>
  </Box>
  <Box  w={{ base: '320px', md: '250px', lg: '500px' }} rounded={"10px"} mt={"25px"} bg={"gray.300"} h={"45px"}>
	<UnorderedList>
		<ListItem color={"black"} ml={"20px"} >
			Mindfulness And Mental Health
			<InputGroup>
	
	<InputRightElement>
	<Checkbox border={"#0d64a2 2px"} mr={"10px"}
 mb={"47px"}  >

</Checkbox>
	</InputRightElement>
	
			</InputGroup>
		</ListItem>
	</UnorderedList>
  </Box>
{/* </Stack> */}
  <Stack spacing={10} pt={2}>
                    <Button
       
	   size='lg'
                        bgGradient='linear(to-r, #6a8bcd, #be56bc)'
                        color={"white"}
                        _hover={{
							bgGradient:'linear(to-r, green.200, pink.500)'
                        }}
						onClick={()=>navigate("/schedule")}
                    >
                        Confirm
                    </Button>
                </Stack>
							</Flex>
	 </>
  )
}

export default GoalList
