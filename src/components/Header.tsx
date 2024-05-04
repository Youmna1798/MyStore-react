import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Center, Flex, Heading } from '@chakra-ui/react';
import { ButtonCartShopping } from './ButtonCartShopping';

export function Header(): JSX.Element {
  return (
    <Flex justify="space-between" width="100%" p="2" px="6" background="pink">
      {/* Wrap the heading inside a Link component */}
      <Link to="/">
        <Center>
          <Heading as="h3" size="lg" color="blue.900">MyStore</Heading>
        </Center>
      </Link>
      <ButtonCartShopping />
    </Flex>
  );
}
