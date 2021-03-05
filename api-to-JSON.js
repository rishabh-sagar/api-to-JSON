'use strict';
const axios = require('axios');
const fs = require('fs');
let i=0
let tokenStr = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY3NGIyYzVjMjE1NjcyODM1MjY3YTkzNDk0MWY5NGVhMGQwYjI3M2MwYmFkMTgwMWQ1MGZkMWRiMDBlNjNjZTE2ZTZhZTQ1NWQ4OTg1OTI0In0.eyJhdWQiOiJkZTBjOTc5MmQ4NDY1Y2NiNTZkY2M5ZmEwMjBmODJhZiIsImp0aSI6IjY3NGIyYzVjMjE1NjcyODM1MjY3YTkzNDk0MWY5NGVhMGQwYjI3M2MwYmFkMTgwMWQ1MGZkMWRiMDBlNjNjZTE2ZTZhZTQ1NWQ4OTg1OTI0IiwiaWF0IjoxNjE0MDkzNTg5LCJuYmYiOjE2MTQwOTM1ODksImV4cCI6MTYxNjUwOTE4OSwic3ViIjoiMTE5MDQxMjEiLCJzY29wZXMiOltdfQ.XVqMeBkT_n24Rnj5abCRIizCIeazKb_kKrTcnPOM-Ybp-RobSMt_XKbKOioq-rz0dqPQzblXKdqZe4EJrQwbq_zif1TUepOXMVrMKFHkHzBiGX8ICwUzFvZ__CbaB1IxnoD6oAK0SE7jW3js6eAOcGCOISx_40hHUEF74ygKiDOgk6zl5q_yfcs87Iw9M9B1j8Rtue86lVpyEwAGvfGuT8hLeGrgtZAzqwBU_3sg1piv9P1fI6DVybfzr7FlR912_C1m9LiM72aCglIv4PJPFUPS1sPEeMQfNtEpoHk9vKJfqzAtwSR-6Zd3SSLpgjutBdS1NbjsPyo1V8TD3I5UlA`;






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
            return 5;
          }}); 
      }).catch(error => {
        return 5;
      });


  }, 1); 
} 