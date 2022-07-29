import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import MyImage from '../dance.png';
import { PropContext } from './Context';
const Visual = () => { 
  const {setTicket} = useContext(PropContext);
// const [Ticket, setTicket] = useState();
// console.log(setTicket);

  return (
<Flex 
id='Events'
bgColor={'#0C121C'}
>

    <Image 
    src={MyImage} 
    alt={'dancing'}
    width={'50%'}
    ml={['10px', '10px', '30px']}
    my={['70px']}
   
    />



    <VStack 
     color={'white'}
     bgColor={'#0C121C'} 
    gap={5}
    width={'50%'}
    py={['50px', '100px']}
    
    >
      <Heading>
        Tickets:
      </Heading>
      
    <Flex>
    <Text 
    ml={'17px'}
    mt={'10px'}>
      REGULAR
      </Text>

    <Button 
    onClick={()=> setTicket('REGULAR')} 
    ml={'10px'} 
    bgColor="purple"
    _hover={{
      backgroundColor: 'purple.400'
    }}>
      $15
      </Button>
 </Flex>

    <Flex>
    <Text 
    ml={'50px'}
    mt={'10px'}>
      MID
      </Text>
    <Button 
    onClick={()=> setTicket('MID')} 
    ml={'10px'} 
    bgColor="purple"
    _hover={{
      backgroundColor: 'purple.400'
    }}>
      $25
      </Button>
 </Flex>

    <Flex>
    <Text 
    ml={'50px'}
    mt={'10px'}>
      VIP
      </Text>
    <Button onClick={()=> setTicket('VIP')} 
    ml={'10px'} 
    bgColor="purple"
    _hover={{
      backgroundColor: 'purple.400'
    }}
    >
    $50
    </Button>
 </Flex>
 </VStack>

 </Flex>
  )
}

export default Visual