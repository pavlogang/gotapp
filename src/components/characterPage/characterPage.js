  
import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from './../itemList/itemList';
import CharDetails from './../charDetails/charDetails';
import ErrorMessage from '../error/errorMessage';

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId = {this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}