import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieService from '../../services/MovieService';

export default class AddMovies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            subtitle: null,
            description: null,
            year: null,
            imageUrl: null,
            rating: null,
            errors: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event) {
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const requiredFields = ['title', 'subtitle', 'description', 'year', 'imageUrl'];
        let errors = [];

        requiredFields.forEach(field => {
            if (this.state[field] === null || this.state[field] === '')
                errors.push(field);
        });

        if (errors.length > 0)
            this.setState({ errors });
        else {
            this.setState({ errors });
            MovieService.addMovie(this.state.title, this.state.subtitle, this.state.description, this.state.year, this.state.imageUrl);
            this.props.updateMovies();
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex flex-column" style={{marginLeft: '-15px'}}>
                <form className="d-flex flex-column">
                    <label className="d-flex flex-column">
                        Title:
                        <input type="text" name="title"  value={this.state.title} onChange={(e) => this.handleChange('title', e)}/>
                        {this.state.errors.includes('title') && <span className="required-text">This field is required.</span>}
                    </label>
                    <label className="d-flex flex-column">
                        Subtitle:
                        <input type="text" name="title" value={this.state.subtitle} onChange={(e) => this.handleChange('subtitle', e)}/>
                        {this.state.errors.includes('subtitle') && <span className="required-text">This field is required.</span>}
                    </label>
                    <label className="d-flex flex-column">
                        Description:
                        <input type="text" name="title" value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
                        {this.state.errors.includes('description') && <span className="required-text">This field is required.</span>}
                    </label>
                    <label className="d-flex flex-column">
                        Year:
                        <input type="text" name="title" value={this.state.year} onChange={(e) => this.handleChange('year', e)} />
                        {this.state.errors.includes('year') && <span className="required-text">This field is required.</span>}
                    </label>
                    <label className="d-flex flex-column">
                        Image URL:
                        <input type="text" name="title" value={this.state.imageUrl} onChange={(e) => this.handleChange('imageUrl', e)} />
                        {this.state.errors.includes('imageUrl') && <span className="required-text">This field is required.</span>}
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

AddMovies.propTypes = {
    updateMovies: PropTypes.func
};
