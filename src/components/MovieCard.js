import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { toggleImageClick } from "../utils/movieDetailsSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ posterPath }) => {

    const dispatch = useDispatch();

    if (!posterPath) return null;

    const handleImageClick = () => {
        dispatch(toggleImageClick())
    }

    return (
        <div className="mr-3 w-32 duration-500 hover:scale-90 hover:cursor-pointer md:w-44">
            <img
                className="rounded-md"
                src={IMG_CDN_URL + posterPath}
                alt="Movie Card"
                onClick={handleImageClick}
            />
        </div>
    );
};

export default MovieCard;