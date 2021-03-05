'use strict';
const axios = require('axios');
const fs = require('fs');
let i=0
let tokenStr = `insert token here`;






for(i=0;i<5000;i++){



task(i);


}


function task(i) { 
  setTimeout(function() { 

    let webApiUrl = `https://api.myanimelist.net/v2/anime/${i}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`;
    axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} }).
    then(response => {
    
        fs.writeFile(`${i}.json`, JSON.stringify(response.data),function (err) {
          if (err) {
            return null;
          }}); 
      }).catch(error => {
        return null;
      });


  }, 1); 
} 
