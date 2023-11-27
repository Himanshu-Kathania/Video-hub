import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'upparcase',
  p: '4xl',
};

const Home = () => {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading
              bgColor={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Watch the future
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading
              bgColor={'whiteAlpha.600'}
              color={'black'}
              {...headingOptions}
            >
              Tech Is Awsome!!!!
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading
              bgColor={'whiteAlpha.600'}
              color={'black'}
              {...headingOptions}
            >
              Gaming Is Future.
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading
              bgColor={'whiteAlpha.600'}
              color={'black'}
              {...headingOptions}
            >
              Night Life Is Coll
            </Heading>
          </Box>
        </Carousel>
      </Box>

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid '}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={('4', '16')}
            textAlign={'center'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et tenetur
            consectetur, non ea, deleniti quas voluptate magni officiis facilis
            atque corrupti molestias neque, nulla optio minima. Natus nulla
            inventore nostrum perspiciatis numquam magnam non nesciunt ab
            suscipit architecto ut rem, tempora molestias optio fugiat sed. Est,
            fuga dicta voluptates iusto tempora reprehenderit iure nemo
            distinctio harum ducimus repellendus ullam sunt earum, ipsum
            voluptatibus a quas! Dolore voluptate illum esse? At cumque quo
            aliquid odit, aperiam magnam hic fugiat culpa delectus accusantium
            exercitationem rerum enim! Voluptate, consequuntur similique
            repellat eius magnam enim optio aliquam error laudantium. Deleniti
            perspiciatis quaerat modi soluta.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
