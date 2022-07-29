import { FormControl, FormLabel, Input, Box, Text, Button, Checkbox, VStack, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
// import Nav from './Nav';


const Form = () => {

const initialValue = {
     name: '',
     age: 0,
     email: '',
     number: '',
     address: '',
     tick: false,
     select: '',
     password: '',
     
};
const [userData, setUserData] = useState(initialValue);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [show , setShow] = useState(false);

// document.getElementById('').addEventListener('click', (event) => {})

const handleChange = (event) => {
  // console.log(event.target.value);
const {name, type, checked, value} = event.target;
setUserData({...userData, [name] 
  : type === 'checkbox' 
  ? checked 
  : value});
};

const navigate = useNavigate()
const handleProceed = (e) => {
 if (Object.keys(formErrors).length === 0 && isSubmit){
  (navigate('/login'))
 }
 }



const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(userData));
  setIsSubmit(true);
  // alert('Thanks for submitting your form. You will receive  a confirmation email shortly');
  const user = JSON.stringify(userData);
  sessionStorage.getItem('user') === null &&
  sessionStorage.setItem('user', user);
};
  console.log(userData);
  


 

  const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Name is required!";
  }

  if (!values.address) {
    errors.address = "Address is required!";
  } 

  if (!values.number) {
    errors.number = "Number is required!";
  } else if (values.number.length < 11 ) {
    errors.number = "Number must be 11 digits long!";
  } else if (values.number.length > 11 ) {
    errors.number = "Number must be 11 digits long!";
  }

  if (!values.age) {
    errors.age = "Please provide age!";
  } else if ( values.age.length > 2 ) {
    errors.age = "Enter a valid age";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email address!";
  }

  if (!values.tick === (true)) {
    errors.tick = "Please agree to T & C!";
  }
  if (!values.password){
    errors.password = "Please enter a password!";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters!";
  }else if (values.password.length > 8) {
    errors.password = "Password must be 8 characters!";
  } 

  return errors;
  };
 
  return (

    <Box 
    id='Register'
    px={[10, 10, 200]}
    pt={[0, 10, 20]}
    bgColor={'black'}
    as={'form'}
    onSubmit={handleSubmit}
    gap={2}
    >
    

      <Box>{(Object.keys(formErrors).length === 0 && isSubmit)
      ? (<Box color={'green'}> Registration Successful! </Box>)
      : ( 
      <pre>
        {JSON.stringify(userData, undefined, 2)}
      </pre> 
      )}
      </Box>

<VStack
 width={['100%',  '100%']}
 
>
       <Text 
       fontWeight={'bold'}
       color={'white'}
       mb={'20px'}>
        Please fill in your details and click the submit button below
        </Text>

    <FormControl 
    borderRadius={10}
   
    // isRequired
    >
        <FormLabel
        color={'white'}>
        Name
        </FormLabel>
        <Input 
       bgColor={' white'}  
        type={'text'}
        name={'name'} 
        placeholder={'Enter your name'} 
       value={userData.name}
        onChange={handleChange}
        />
        </FormControl>
        <Text color={'red'}>
          {formErrors.name}
          </Text>

        <FormControl 
    borderRadius={10}
    // isRequired 
    >
        <FormLabel
        color={'white'}>
        Age
        </FormLabel>
        <Input 
        bgColor={' white'}  
        type={'number'} 
        name={'age'} 
        placeholder={'Enter your age'}
        value={userData.age}
        onChange={handleChange}
        />
         </FormControl>
         <Text 
        color={'red'}>
          {formErrors.age}
          </Text>

        <FormControl 
    borderRadius={10}
    // isRequired
    >
        <FormLabel
        color={'white'}>
        Address
        </FormLabel>
        <Input  
        bgColor={' white'}  
        type={'text'}
        name={'address'} 
         placeholder={'Enter your address'}
         value={userData.address}
         onChange={handleChange}
         />
         </FormControl>
         <Text color={'red'}>
          {formErrors.address}
          </Text>

         <FormControl 
    borderRadius={10}
    // isRequired 
    >
        <FormLabel
        color={'white'}
        >
        Phone Number
        </FormLabel>
        <Input 
       bgColor={' white'}  
        type={'Number'} 
        name={'number'} 
        placeholder={'Enter your number'}
        value={userData.number}
        onChange={handleChange}
        />
        </FormControl>
        <Text 
        color={'red'}>
          {formErrors.number}
          </Text>

        <FormControl 
    borderRadius={10}
    // isRequired
    >
        <FormLabel
        color={'white'}>
        Email
        </FormLabel>
        <Input 
        bgColor={' white'}   
        type={'email'} 
        name={'email'} 
        placeholder={'Enter your email'}
        value={userData.email}
        onChange={handleChange}
        />
         </FormControl>
         <Text
    color={'red'}>
          {formErrors.email}
          </Text>

          <FormControl 
    borderRadius={10}
    // isRequired 
    >
        <FormLabel
        color={'white'}
        >
        Password
        </FormLabel>
        <Input 
       bgColor={' white'}  
        type={show ? 'text' : 'password'} 
        name={'password'} 
        placeholder={'Set your password'}
        value={userData.password}
        onChange={handleChange}
        />
        </FormControl>
        <Text 
        color={'red'}>
          {formErrors.password}
          </Text>

<Button 
color={'lightblue'}
bgColor={'blue'}
borderRadius={50}
onClick={() => setShow((last) => !last )}
_hover={{
  backgroundColor: 'blue.200',
  color: 'white',
}}

>Show</Button>

          <Checkbox 
          color={'white'}
   display={'flex'}
   alignItems={'center'}
   justifyContent={'center'}
   pb={'10px'} 
   pt={'10px'}
   checked={userData.tick}
   name={'tick'}
   type={'checkbox'}
    onChange={handleChange}>
    Agree to terms and condition
    </Checkbox>
    <Text
    textAlign={'center'}
    color={'red'}>
          {formErrors.tick}
    </Text>
    </VStack>

    <VStack
    justify ={'center'}
    mt={'10px'}
    mb={'10px'}
    >

    <label
    style={{
      color: 'white',
    }} 
    >
      Book Ticket
    </label>
    <select 
    name='select' 
    id='select' 
    value={userData.select}
    onChange={handleChange}
   >
        <option value=""> Select Ticket</option>
        <option value="Regular">Regular</option>
        <option value="MID">MID</option>
        <option value="VIP">VIP</option>
    </select>
   
    </VStack>

<Flex
justify={'center'}
gap={10}


>
    <Button
        bgColor={'whatsapp.400'} 
        type={'submit'}
        mb={'10px'}
        mt={'30px'}
        _hover={{
          backgroundColor: 'whatsapp.200',
        }}>
        Submit
        </Button>
    <Button
        bgColor={'blue.200'} 
        type={'button'}
        mb={'10px'}
        mt={'30px'}
        _hover={{
          backgroundColor: 'blue.200',
        }} 
        onClick={handleProceed}
        >
        Proceed
        </Button>
</Flex>
<Box>

</Box>
 </Box>
  )
}


export default Form;
                                                            



