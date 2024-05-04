import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Text,
  Box,
  AspectRatio,
  Image,
  Skeleton,
  HStack,
  Center,
  Flex,
} from '@chakra-ui/react';
import Product from '../ProductInterface';
import { ButtonAddToCart } from './ButtonAddToCart';

interface Props {
  product: Product,
}

export function ProductCard(props: Props): JSX.Element {
  const { product } = props;
  const {
    title, price, image, rating, id,
  } = product;
  return (
    <Flex direction="column" width="250px" style={{ marginTop: '50px' }}>
      <Center>
        <AspectRatio ratio={4 / 4} width="100%" height="100%">
          <Image
            src={image}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
      </Center>
      <Box>
        <Link to={`/product/${product.id}`}>
          <Text>{product.title}</Text>
        </Link>
        <HStack>
          <Text fontSize="12px" color="gray.600">
            {`Rate ${rating.rate} - ${rating.count} Reviews`}
          </Text>
        </HStack>
        <Text
          as="span"
          fontSize="16px"
          color="gray.700"
        >
          {`$${price}`}
        </Text>
      </Box>
      <Center mt="auto">
        <ButtonAddToCart productId={id} />
      </Center>
    </Flex>
  );
}
