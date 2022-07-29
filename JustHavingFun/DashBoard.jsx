import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import {BsPerson} from 'react-icons/bs';

const DashBoard = () => {

  const [userData, setUserData] = useState({});
  useEffect(() => {
    let registerData = sessionStorage.getItem('user');
    const userInfo = JSON.parse(registerData);
    setUserData(userInfo);
  },[]);
  console.log(userData);
  

  return (

  <Center>

    <VStack
    bgColor={'blue.600'}
      px={[10, 10]}
      mt={'100px'}
      pb={'50px'}
      pt={'50px'}
      gap={5} 
    >
    <Heading>Dashboard</Heading>
    <Box>
      <BsPerson/></Box>
   <Text>
    Name : 
    {userData.name || 'Anonymous'}
    </Text>
   <Text
    fontSize={'18px'}
    fontStyle={'bold'}
   >
    Age :    
    { userData.age || 'Anonymous'}
    </Text>
   <Text>
    Phone no : 
    { userData.number || 'Anonymous'}
    </Text>
   <Text>
    Email : 
    { userData.email || 'Anonymous'}
  </Text>
   <Text>
    Address : 
    {userData.address || 'Anonymous'}
    </Text>
   <Text >
    Ticket : 
    { userData.select || 'Anonymous'}
    </Text>
    </VStack>
   </Center>

  )
}

export default DashBoard