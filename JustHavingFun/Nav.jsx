import { color, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = () => {
  const  location = useLocation();
  const [show, setShow] = useState(false);
console.log(location.search.split('&'));
  const isActiveHash = location.hash === '#home';
  const isActivePath = location.pathname === '/';


  return 
  (

    
        <Flex w={'100%'} gap={5} justifyContent={'center'}>
<NavLink 
style={({isActive}) => 
isActive 
? {color: 'red'} 
: {color: 'green'}} 
className={({isActive}) =>  (isActive ? 'active' : 'inactive')}
to={'/'}
// onClick={() => setShow((prev) => !prev)}
>
  Home
</NavLink>

{/* for toggle 'like to toggle menu Icon' */}
{/* {show && ( */}
<NavLink 

style={({isActive}) => 
isActive 
? {color: 'red'} 
: {color: 'green'}} 
to={'/payment'}>
  Payment
</NavLink>
 {/* )} */}


<NavLink 
style={({isActive}) => 
isActive 
? {color: 'red'} 
: {color: 'green'}} 
to={'/product'}>
  Products
</NavLink>

<NavLink
style={({isActive}) => 
isActive 
? {color: 'red'} 
: {color: 'green'}}  
to={'/faqs'}>
  FAQs
</NavLink>
        </Flex>
    


  )
}

export default Nav