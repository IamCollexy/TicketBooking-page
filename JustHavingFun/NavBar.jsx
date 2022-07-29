import { Box, Text, HStack, Image} from '@chakra-ui/react'
import React , {useContext} from 'react'
import MyImage from '../cdg.png';
import { PropContext } from './Context';
import Nav from './Nav';

const NavBar = () => {
  const {Ticket} = useContext(PropContext);
  return (

  
    <HStack
 pt={5}
 pb={5}
 color={'white'}
 bgColor={'#0C121C'}
 justify={'space-between'}
 align={'center'}
 px={['5px', '10px', '30px']}
 
  >

 
<Image 
 width={'50%'}
borderRadius={'100px'} 
boxSize={['50px', '100px']}
src={MyImage} 
alt={'CDG'} />

    <Box color={'orange.500'}>
   <Text
   fontSize={['10px', '14px', '16px']}
   >CDG EVENTS</Text>
    </Box>
    
    
    <Box
    color={'green.500'}
    fontWeight="bold"
    textDecoration="underline"
    fontSize={['12px', '16px', '16px']}
    >
      {Ticket}
    </Box>
    <HStack
     bgColor={'#0C121C'}
    gap={[0, 0, 4]}
    fontSize={['12px', '16px', '16px']}
    >
      {/* <Nav/> */}
    <a href='#Events'>Events</a>
    <a href='#Register'>Register</a>
    <a href='#Contacts'>Contacts</a>
    </HStack>
    </HStack>
  
  )
}

export default NavBar