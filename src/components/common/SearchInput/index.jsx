import VisuallyHidden from "../VisuallyHidden";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { WrapperInput, Input } from "./styles";
import { useRef } from "react";

export default function SearchInput(props) {
  const inputRef = useRef(null);

  const handleFocus = (e) => {
    inputRef.current.focus();
  };

  return (
    <WrapperInput onClick={handleFocus}>
      <SearchIcon />
      <VisuallyHidden>
        <label htmlFor="search-input">Search by ETH address, name</label>
      </VisuallyHidden>
      <Input type="text" ref={inputRef} placeholder="Search by ETH address, name" id="search-input" {...props} />
    </WrapperInput>
  );
}
