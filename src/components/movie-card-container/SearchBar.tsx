import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "@assets/icons/search-icon.svg";
interface ISearchBar {
  onSearch: (inputValue: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      onSearch(inputRef.current!.value);
    }
  }
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="Search the movie..."
      />
      <button onClick={() => onSearch(inputRef.current!.value)}>
        <img src={SearchIcon} alt={SearchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
