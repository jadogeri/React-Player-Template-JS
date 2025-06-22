import "./SearchBar.css"

const SearchBar = ({
	value,
	onChange,
	onClick
}) => {

  return (

    <>

        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="e.g https://www.youtube.com/watch?v=JC90NBGC_bA"  value={value}  onChange={onChange}/>
                <input type="submit" value="Submit" onClick={onClick}/>
            </div>
        
        </div>
    </>


  );
}

export default SearchBar;