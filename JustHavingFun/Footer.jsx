import { Box, HStack, Text, Flex  } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box
    id='Contacts'
    color={'white'}
    bgColor={'#0C121C'}
    px={[2, 5, 10]}
    pt={30}
    pb={30}>
    
        <Flex
        justify={'space-between'}>
            <Text
            fontSize={['12px', '16px']}
            >Party with @CollexyDeGreatest [CDG]
            </Text>
            <HStack
            gap={2}>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTiktok/>
            </HStack>
        </Flex>
    </Box>
  )
}

export default Footer