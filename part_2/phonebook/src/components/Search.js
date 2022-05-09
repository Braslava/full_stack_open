const Search = (props) => {
    return (
        <label htmlFor="search">
            Search: <input onChange={props.handleSearchInput} type="search" />
        </label>
    );
};

export default Search;
