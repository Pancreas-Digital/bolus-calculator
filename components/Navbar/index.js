import { Flex, Box, Spacer, Stack, Image, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Flex>
      <Box p="2">
        <Stack direction="row" maxW="md">
          <Image boxSize="200px" maxHeight="100px" objectFit="cover" src="Horizontal.png" alt="Pancreas Digital Logo" />
        </Stack>
      </Box>
      <Spacer />
      <Box p="4">
        <Box p="1" />
        <Box p="4">
          <Link href="" title="Close">
            <CloseIcon color="white" _hover={{ color: 'blue.600' }} />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
