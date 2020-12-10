import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from './../header/header';
import RandomChar from './../randomChar/randomChar';
import ItemList from './../itemList/itemList';
import CharDetails from './../charDetails/charDetails';
import ErrorMessage from '../error/errorMessage';
import CharacterPage from './../characterPage/characterPage';
import gotService from './../../services/gotService';


import './app.css';


export default class App extends Component {
    gotService = new gotService();
    
    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    {/* <Row>
                        <Col md='6'>
                            <ItemList
                                onCharSelected={this.onCharSelected}
                                getData={this.gotService.getAllBooks}
                                />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onCharSelected={this.onCharSelected}
                                getData={this.gotService.getAllHouses}
                                />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar} />
                        </Col>
                    </Row> */}
                </Container>
            </>
        );
    }
};