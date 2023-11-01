import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = ({ onSelectOrder, sortOrder   }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },  // default sort order
    { value: "-added", label: "Date Added" }, // we want to show newest game first so we should reverse the sort order
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" }, // again to show new releases first
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];


  const currentSortOrder = sortOrders.find(order=>order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} >
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={()=>onSelectOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
