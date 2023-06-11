import React from "react";

export interface IAlbum {
    title: string;
    imgUrl: string;
    date: Date;
    tags: string[];
  }
  
  export interface AlbumCardProp {
      albumInfo: IAlbum
  }
  
export const AlbumCard = ({ albumInfo } : AlbumCardProp) => {
    const { title, imgUrl, date } = albumInfo;
    return (
      <div
        className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <img
          src={imgUrl}
          className="w-full transition duration-300 ease-linear align-middle"
        />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-start items-end h-full">
            <div className="album-info w-full p-2 bg-black bg-opacity-20">
                <h5 className="text-lg font-bold text-white">{title}</h5>
                <span className="text-white text-sm italic">
                    {date.toDateString()}
                </span>
                </div>
            </div>
          </div>
          <div className="hover-overlay">
            <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </div>
        </a>
      </div>
    );
  };