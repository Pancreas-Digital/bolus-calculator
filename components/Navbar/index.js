import { Flex, Box, Spacer, Stack, Image, Link, Select } from '@chakra-ui/react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  return (
    <Flex
      bg="blue.300"
      sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', 'z-index': '1000' }}
    >
      <Box p="2">
        <Stack direction="row" maxW="md">
          <Link href={process.env.siteUrl} title="Main Website">
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
          <Link href="/es-AR" title="AR">
            <span class="fi fi-ar"></span>
          </Link> 
          &nbsp;|&nbsp;
          <Link href="/en-US" title="US">
            <span class="fi fi-us"></span>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
