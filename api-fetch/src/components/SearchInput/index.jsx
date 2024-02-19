import './styles.css'

export const SearchInput = ({searchValue, handleChange}) =>{
    return(
        <>
            <div className='search-container'>
                <div className='search-title'>
                    Buscar

                {!!searchValue &&(
                    <span> por "{searchValue}" </span>
                )}
                
            </div>
            <input
                type="search" 
                className='button-container'
                onChange={
                    handleChange
                }
                value={searchValue}
                placeholder='Digite sua busca'
                />
            </div>
        </>
    )
}
