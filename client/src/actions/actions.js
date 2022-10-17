export const getWineries = () => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/wineries');
            const data = await response.json();
            dispatch( {
                type: 'GET_WINERIES',
                wineries: data
            })
            
          } catch (err) {
            console.log(err);
          }
    }
}
 

  export const addWinery = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/wineries', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(winery => {
          if (winery.error) {
            alert(winery.error)
          } else {
          dispatch(
            {type: 'ADD_WINERY', winery: winery}
          )}
        })
        .catch(err => { alert(err) })
    }
}

//   export const removeWinery = result => {
//     return async dispatch => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/v1/wineries/${result}`,
//           {
//             method: "DELETE",
//             body: JSON.stringify(result),
//             headers: {
//               "Content-Type": "application/json"
//             },
//           }
//         );
//         const data = await response.json();
//         dispatch({
//           type: "REMOVE_WINERY",
//           favorites: data
//         });
       
//       } catch (err) {
//         console.log(err);
//       }
//     };
//   };



// // Favorite Actions

export const getFavorites = () => {
    return async dispatch => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/users/1/wineries");
        const data = await response.json();
        dispatch({
          type: "GET_FAVORITES",
          favorites: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export const addFavorite = favoriteData => {
    return async dispatch => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/user_wineries`,
          {
            method: "POST",
            body: JSON.stringify(favoriteData),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const data = await response.json();
        dispatch({
          type: "ADD_FAVORITE",
          favorites: data
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const removeFavorite = result => {
    return async dispatch => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/user_wineries/${result}`,
          {
            method: "DELETE",
            body: JSON.stringify(result),
            headers: {
              "Content-Type": "application/json"
            },
          }
        );  
        const data = await response.json();
        dispatch({
          type: "REMOVE_FAVORITE",
          favorites: data
        });
       
      } catch (err) {
        console.log(err);
      }
    };
  };
