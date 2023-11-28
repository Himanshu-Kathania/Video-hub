import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} width={'full'} px={'4'}>
            <Heading
              size="md"
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe To Get More Updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All rights received</Text>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading> Soical Media</Heading>
            <Button variant={'link'} colorScheme="white">
              <a
                target="black"
                href="https://www.linkedin.com/in/himanshu-kathania/"
              >
                Linkedin
              </a>
            </Button>

            <Button variant={'link'} colorScheme="white">
              <a target="black" href="https://twitter.com/flash_himanshu">
                Twitter
              </a>
            </Button>

            <Button variant={'link'} colorScheme="white">
              <a target="black" href="https://github.com/Himanshu-Kathania">
                Github
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
      ;
    </>
  );
};

export default Footer;
