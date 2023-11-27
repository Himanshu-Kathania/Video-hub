import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAplha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack>
            <Heading size="xl" textTransform={'uppercase'}>
              Subscribe To Get More Updates
            </Heading>
          </VStack>
        </Stack>
      </Box>
      ;
    </>
  );
};

export default Footer;
