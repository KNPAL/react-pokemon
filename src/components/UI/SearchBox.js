
 import './SearchBox.scss';

function SearchBox(){

    return (
        <div>
            <label className='w-100 d-none d-md-block form-label'>Search By</label>
            <input className='w-100  form-control ' placeholder='Name or Number' />
        </div>
    )
}

export default SearchBox;