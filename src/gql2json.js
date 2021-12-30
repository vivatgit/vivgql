const gqlQuery = `
query Query($albumsGenre: Genre) {
    albums(genre: $albumsGenre) {
      title      ( '"jjjj qqq ghh\\"hh "')
      tracks {
        number
        title
      }
      artist {
        name
      }
    }
  }

`;

function gql2Json(gqlString)
{
    let jsonString=gqlQuery.replace(/((?<![\\])['"])((?:.(?!(?<![\\])\1))*.?)\1/g,"__Q1__")
                           //.replace(/\b\w+\b/g,"__V1__");
    
    return jsonString;
}

let jsonQueryObj = gql2Json(gqlQuery);
console.log("viv_debug: jsonQueryObj: "+jsonQueryObj);


