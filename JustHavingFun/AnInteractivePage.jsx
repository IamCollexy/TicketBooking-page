import { Box } from '@chakra-ui/react'
import React from 'react'
import { PropContext } from './Context'
import Footer from './Footer'
import Form from './Form'
import NavBar from './NavBar'
import Visual from './Visual'
import { useState, useContext } from 'react'


const AnInteractivePage = () => {
  // const Ticket = 'REGULAR'
  const [Ticket, setTicket] = useState('Select Ticket');
  
  return (
    
    <PropContext.Provider value={{ Ticket, setTicket}} >
    <Box>
        <NavBar/>
        <Visual/>
        <Form/>
        <Footer/>
    </Box>
    </PropContext.Provider>
  )
}

export default AnInteractivePage