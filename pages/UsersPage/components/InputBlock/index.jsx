import React, { useState } from "react";
import styles from "./styles.module.scss";
import IconCancel from "../../../../assets/icons/en-cancel-fill.svg?react";
import IconSearch from "../../../../assets/icons/en-search.svg?react";

function InputBlock({ handleSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    handleSearchChange(e.target.value);
  };

  const handleCloseText = () => {
    setSearchText("");
  };

  return (
    <div className={styles.input_filter}>
      {!searchText && <IconSearch className={styles.searchIcon} />}
      <IconCancel className={styles.cancelIcon} onClick={handleCloseText} />
      <input
        className={styles.input_block}
        placeholder='Найти'
        type='text'
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputBlock;
