import * as React from 'react';
import {
  Flex,
  Center,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

export function SkeletonCard(): JSX.Element {
  return (
    <Flex direction="column" width="240px">
      <Center>
        <Skeleton height="100px" width="100%" />
      </Center>
      <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="10" />
    </Flex>
  );
}
