import { Flex, Box, Spacer, Stack, Image, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Flex>
      <Box p="2">
        <Stack direction="row" maxW="md">
          <Link href="" title="Home">
            <Image
              boxSize="200px"
              maxHeight="50px"
              objectFit="cover"
              src="Horizontal.png"
              alt="Pancreas Digital Logo"
            />
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <Box p="2">
        <Box p="1" />
        <Box p="1">
          <Link href="" title="Close">
            <CloseIcon color="blue.50" _hover={{ color: 'blue.600' }} />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
