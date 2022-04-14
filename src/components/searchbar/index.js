import Button from '@mui/material/Button';

const SearchBar = ({ query, onChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="query" value={query} onChange={onChange} />
        <Button size ="small" type="submit"  variant="contained" > Search</Button>
      </form>
    );
  };
  
  export default SearchBar;

  