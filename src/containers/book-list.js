import React, {Component} from 'react';
import { connect } from 'react-redux'; // the glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        }));
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList() }
            </ul>
        )
    }
}

/**
 * This function sets 'books' present in application state to our PROPS (this.props.books).
 */
function mapStateToProps(state) { // state = application state that was set on reducers/index.js
    return {
        books: state.books // make this.props.books accessible
    }
}

/**
 * Anything returned from this function will end up as PROPS on the 
 * BookList container.
 */
function mapDispatchToProps(dispatch) {
console.log('mapDispatchToProps CALLED: dispatch=', dispatch);
// whenever selectBook is called, the result should be passed to 
// all of our reducers.
    return bindActionCreators({ selectBook: selectBook}, dispatch); // imported selectBook
}

// take this function and component and export as a container
// it needs to know about this new dispatch method, selectBook. make it 
// available as a PROP.

/**
 * It created a container.
 * Make Books available at this.props.books
 * Make selectBook accessible through this.props.state.
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
