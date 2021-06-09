import React from 'react';
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { removeFavorite } from '../actions/favoriteActions'

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    // const { id } = useParams();
    
    const removeHandler = id => {
        props.removeFavorite(id)
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={() => removeHandler(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return({
        favorites: state.favorites.favorites
    })
}

export default connect(mapStateToProps, { removeFavorite})(FavoriteMovieList);