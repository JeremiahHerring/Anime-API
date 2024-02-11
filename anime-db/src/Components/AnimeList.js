import React from 'react'

export const AnimeList = ({animelist, setAnimeInfo}) => {
  return (
    <>
        {
            // If animeList has data, it will display, otherwise not found
            animelist ? (
                animelist.map((anime, index) => {
                    return(
                        <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                        <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                        <div className="anime-info">
                        <h4>{anime.title}</h4>
                        </div>
                     </div>
                    )
                })
            ): "Not Found"
        }

    </>
  )
}

