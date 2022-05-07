const Search = (props) => {
    return (
        <label htmlFor="search">
            Search: <input onChange={props.filterPersons} type="search" />
        </label>
    );
};

export default Search;
