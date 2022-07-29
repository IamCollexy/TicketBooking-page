import { Button, FormControl, FormLabel, Input, HStack, Box, VStack, Center, Heading} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Nav from './Nav'

const Payment = () => {
const [show, setShow] = useState(false)
const [ name, setUserName] = useState('');
const [ password, setPassword] = useState('');
const [userData, setUserData] = useState({});



useEffect(() => {
  let registerData = sessionStorage.getItem('user');
  const userInfo = JSON.parse(registerData);
  setUserData(userInfo);
},[]);
console.log(userData);

const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault ();
  if (userData?. name === name && userData?. password === password) {
   (navigate('/dashboard'));
     } else {
      alert('Incorrect username or password');
     }
    }
  return (


<Center>
  <VStack 
  bgColor={'blue.700'}
  px={10}
  mt={'100px'}
  pb={'50px'}
  pt={'50px'}
  gap={5} 
  as={'form'}
  onSubmit={handleSubmit}
  >
    
{/* <Nav/> */}
<Heading>
  Login
</Heading>
    <FormControl 
    isRequired
    >
        <FormLabel> Name </FormLabel>
        <Input 
        placeholder={"Enter Name"}
        type={"text" }
        name={'name'}
        value={name}
        onChange={(e) => setUserName(e.target.value)}
        bgColor={'white'}
        />
    </FormControl>

    <FormControl
    isRequired
    >
        <FormLabel> Password </FormLabel>
        <Input 
        placeholder="Enter Password" 
        type={show ? 'text' : "password"} 
        name={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        bgColor={'white'}
        />
    </FormControl>
    
  
    
    <Button
    color={'black'}
     bgColor={'blue'}
     type={"button"}
     onClick={() => setShow((prev) => !prev)}
     _hover={{
      backgroundColor: 'blue.500',
    }}
    >
    Show
    </Button>   

    <Button
      bgColor={'whatsapp.400'} 
      mt={'10px'} 
      justifySelf={'center'} 
      type="submit"
      mb={'20px'}
      _hover={{
        backgroundColor: 'green.300',
      }}
    >
    Submit
    </Button>
    </VStack>
    </Center>
    
   
   
  

  
  )
}
  export default Payment
