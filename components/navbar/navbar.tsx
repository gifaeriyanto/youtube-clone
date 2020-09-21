import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/core';
import Logo from '@components/logo';
import React from 'react';
import {
  MdAccountCircle,
  MdApps,
  MdMenu,
  MdMoreVert,
  MdSearch,
  MdVideoCall,
} from 'react-icons/md';

interface INavbar {
  minimized: boolean;
  onMinimized: (value: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ minimized, onMinimized }) => {
  const handleSidebarToggle = () => {
    onMinimized(!minimized);
  };

  return (
    <Flex
      p={3}
      justify="space-between"
      pos="fixed"
      w="100%"
      bg="#fff"
      zIndex={3}
    >
      <Flex flex="0 1 728px">
        <Stack spacing={2} align="center" isInline>
          <IconButton
            aria-label="Upload video"
            h={8}
            fontSize="xl"
            color="gray.600"
            bg="transparent"
            icon={MdMenu}
            onClick={handleSidebarToggle}
            data-testid="navbar-minimized-toggle"
          />
          <Logo />
        </Stack>
      </Flex>
      <Flex flex="0 1 728px">
        <InputGroup w="100%">
          <Input placeholder="Search" h={8} pl={3} />
          <InputRightElement
            w={16}
            h={8}
            children={
              <IconButton
                aria-label="Search videos"
                w="100%"
                h="calc(2rem - 2px)"
                mr="1px"
                px="32px"
                roundedTopLeft={0}
                roundedBottomLeft={0}
                fontSize="xl"
                color="gray.600"
                icon={MdSearch}
              />
            }
          />
        </InputGroup>
      </Flex>
      <Flex flex="0 1 728px" justify="flex-end">
        <Stack spacing={2} align="center" isInline>
          <IconButton
            aria-label="Upload video"
            h={8}
            fontSize="xl"
            color="gray.600"
            bg="transparent"
            icon={MdVideoCall}
          />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                px={2}
                h={8}
                bg="transparent"
                fontSize="xl"
                color="gray.600"
              >
                <MdApps />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                px={2}
                h={8}
                bg="transparent"
                fontSize="xl"
                color="gray.600"
              >
                <MdMoreVert />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Button
              h={8}
              textTransform="uppercase"
              fontSize="sm"
              variant="outline"
              variantColor="blue"
            >
              <Box as={MdAccountCircle} fontSize="xl" mr={2} />
              Sign In
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
