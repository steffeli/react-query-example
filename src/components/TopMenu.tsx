import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function TopMenu() {
  return (
    <HStack p="4" bg="tomato" borderRadius="6" mb="12" spacing="12px">
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
      <Link to="/admin/add-movie">
        <Button leftIcon={<AddIcon />} variant="ghost">
          Add movie
        </Button>
      </Link>
    </HStack>
  );
}

export default TopMenu;
