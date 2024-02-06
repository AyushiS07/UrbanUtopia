import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Logo from "../assets/images/UrbanUtopia.png";

const Navbar = () => (
  <Flex p="3" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={150} height={50} />
      </Link>
      <Box fontSize="sm" color="gray.500" ml="2">Your Key to Exceptional Living.</Box>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
    
  </Flex>
  
);

export default Navbar;
