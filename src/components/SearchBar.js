import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    }; 

    onFormSubmit = (event) => {
        event.preventDefault();
        //call the callback from the parent component with the data to be passed
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search a Video from YouTube</label>
                        <input 
                            type='text' 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;