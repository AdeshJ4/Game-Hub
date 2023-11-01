import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({onSearch}) => {
    const ref = useRef(null);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
          <Input ref={ref} borderRadius={20} placeholder="Search Games..." variant="filled" />
        </InputGroup>
    </form>
)
}

export default SearchInput;
