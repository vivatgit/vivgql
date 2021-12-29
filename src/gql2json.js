const gqlQuery = `
query Query($albumsGenre: Genre) {
    albums(genre: $albumsGenre) {
      title
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
    let jsonString=gqlQuery.replace(/\w/g,"__V1__");
    return jsonString;
}

let jsonQueryObj = gql2Json(gqlQuery);
console.log("viv_debug: jsonQueryObj: "+jsonQueryObj);


