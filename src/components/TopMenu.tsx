import React from "react";
import { HStack, Button, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

function TopMenu() {
  const location = useLocation();
  console.log("loc", location);
  const isActive = (path: string) =>
    location.pathname === path ? "solid" : "outline";
  return (
    <HStack borderRadius="6" mb="8" spacing="12px">
      <Heading mr="10">MovieDB</Heading>
      <Button as={NavLink} to="/" colorScheme="orange" variant={isActive("/")}>
        Home
      </Button>
      <Button
        as={NavLink}
        to="/admin/add-movie"
        colorScheme="orange"
        leftIcon={<AddIcon />}
        variant={isActive("/admin/add-movie")}
      >
        Add movie
      </Button>
    </HStack>
  );
}

export default TopMenu;
