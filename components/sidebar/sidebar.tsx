import {
  useBreakpointValue,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/core';
import Logo from '@components/logo';
import { menusData } from '@components/sidebar/menusData';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { MdMenu } from 'react-icons/md';

const Scrollbars = dynamic(() => import('react-custom-scrollbars'), {
  ssr: false,
});

interface ISidebar {
  minimized: boolean;
  onMinimized: (value: boolean) => void;
  isOnDrawer?: boolean;
}

interface IInlineMenu {
  link: string;
}

const InlineMenu: React.FC<IInlineMenu> = ({ link, children }) => {
  return (
    <Link href={link}>
      <Box
        as="a"
        fontSize="sm"
        fontWeight="medium"
        mr={1}
        color="gray.600"
        cursor="pointer"
        d="inline-block"
      >
        {children}
      </Box>
    </Link>
  );
};

const ResponsiveMenus: React.FC = () => {
  const menus = [...menusData[0].menus, ...menusData[1].menus].map(
    (menu, index) => (
      <Box
        textAlign="center"
        key={index}
        color={menu.active ? 'youtube' : 'gray.600'}
        py={2}
      >
        <Link href={menu.link}>
          <a>
            <Box as={menu.icon} size="22px" margin="auto" />
            <Text fontSize="10px" mt={1}>
              {menu.label}
            </Text>
          </a>
        </Link>
      </Box>
    ),
  );

  return (
    <Stack spacing={4} py={4}>
      {menus}
    </Stack>
  );
};

const Sidebar: React.FC<ISidebar> = ({
  minimized,
  onMinimized,
  isOnDrawer,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleMinimized = () => {
    onMinimized(!minimized);
  };

  const renderMenus = menusData.map((groupMenu) => {
    const groupMenuLen = groupMenu.menus.length;
    return groupMenu.menus.map((menu, index) => (
      <>
        {groupMenu.title && index === 0 ? (
          <Text
            textTransform="uppercase"
            color="gray.600"
            px={6}
            py={2}
            fontSize="sm"
            fontWeight="medium"
          >
            {groupMenu.title}
          </Text>
        ) : null}
        <Box key={index}>
          <Link href={menu.link}>
            <Flex
              as="a"
              align="center"
              px={6}
              py={2}
              bg={menu.active ? 'gray.200' : 'transparent'}
              cursor="pointer"
            >
              {menu.icon ? (
                <Box
                  as={menu.icon}
                  size="22px"
                  mr={5}
                  color={menu.active ? 'youtube' : 'gray.600'}
                />
              ) : null}
              {menu.iconImage ? (
                <Box w="24px" h="24px" rounded="full" overflow="hidden" mr={5}>
                  <img src={menu.iconImage} alt={menu.label} width="100%" />
                </Box>
              ) : null}
              <Text
                fontSize="sm"
                fontWeight={menu.active ? 'medium' : 'normal'}
              >
                {menu.label}
              </Text>
            </Flex>
          </Link>
        </Box>
        {groupMenuLen === index + 1 && <Divider />}
      </>
    ));
  });

  const renderSidebar = () => {
    if (!isOnDrawer && minimized && !isMobile) {
      return (
        <Box
          pos="fixed"
          top="56px"
          h="calc(100vh - 56px)"
          w="70px"
          zIndex={2}
          bg="#fff"
          data-testid="sidebar-minimized"
        >
          <Scrollbars autoHide>
            <ResponsiveMenus />
          </Scrollbars>
        </Box>
      );
    }

    return (
      <Box
        pos="fixed"
        top="56px"
        h="calc(100vh - 56px)"
        w={{ base: '100%', sm: '100%', md: '240px' }}
        zIndex={2}
        bg="#fff"
        data-testid="sidebar"
      >
        <Scrollbars autoHide>
          <Stack spacing={1} py={4}>
            {renderMenus}

            <Box px={6} py={2}>
              <InlineMenu link="#">About</InlineMenu>
              <InlineMenu link="#">Press</InlineMenu>
              <InlineMenu link="#">Copyright</InlineMenu>
              <InlineMenu link="#">Contact us</InlineMenu>
              <InlineMenu link="#">Creators</InlineMenu>
              <InlineMenu link="#">Advertise</InlineMenu>
              <InlineMenu link="#">Developers</InlineMenu>
            </Box>

            <Box px={6} py={2}>
              <InlineMenu link="#">Terms</InlineMenu>
              <InlineMenu link="#">Privacy</InlineMenu>
              <InlineMenu link="#">Policy & Safety</InlineMenu>
              <InlineMenu link="#">How YouTube works</InlineMenu>
              <InlineMenu link="#">Test new features</InlineMenu>
            </Box>

            <Box px={6} pt={2} pb={1} color="gray.500" fontSize="xs">
              © 2020 Google LLC
            </Box>
          </Stack>
        </Scrollbars>
      </Box>
    );
  };

  if (isOnDrawer || isMobile) {
    return (
      <Drawer placement="left" isOpen={minimized} onClose={handleMinimized}>
        <DrawerOverlay zIndex={2} />
        <DrawerContent maxW="240px" zIndex={2}>
          <DrawerHeader borderBottomWidth="1px">
            <Stack spacing={2} align="center" isInline>
              <IconButton
                aria-label="Upload video"
                h={8}
                fontSize="xl"
                color="gray.600"
                bg="transparent"
                icon={<MdMenu />}
                onClick={handleMinimized}
                data-testid="sidebar-minimized-toggle"
              />
              <Logo />
            </Stack>
          </DrawerHeader>
          <DrawerBody p={0}>{renderSidebar()}</DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return <>{renderSidebar()}</>;
};

export default Sidebar;
