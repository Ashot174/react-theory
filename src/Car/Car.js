import React, { Component } from 'react';
import classes from './Car.module.css';
import PropTypes from 'prop-types';
import withClass from "../hoc/withClass";

/* 1 dzev component sarqelu*/
class Car extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0){
            this.inputRef.current.focus()
        }
    }

    render() {
        console.log('Car render')
        // if (Math.random() > 0.8) {
        //     throw new Error('Car random failed')
        // }
        const inputClasses = [classes.input];
        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onChangeTitle}>Click</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>

        );
    }
 }

 Car.propTypes = {
    name: PropTypes.string.isRequired,
     year: PropTypes.number,
     index: PropTypes.number,
     onChangeName: PropTypes.func,
     onDelete: PropTypes.func,
     onChangeTitle: PropTypes.func,
 }

/* 2 dzev component sarqelu*/
// const Car = () => {
//     return (
//         <h2>This is car component</h2>
//     );
// }

/* 3 dzev component sarqelu*/


/* 4 dzev component sarqelu */
// const Car = (props) => (
//     <div>
//         This is car component
//         <strong>{props.name}</strong>
//     </div>
// )

export default withClass(Car, classes.Car);


/* 5 dzev component sarqelu */
// export default (props) => (
//                 <div>
//                     <h3>Car name: {props.name}</h3>
//                     <p>Year: <strong>{props.year}</strong></p>
//                     <button onClick={props.onChangeTitle}>Click</button>
//                 </div>
// )
