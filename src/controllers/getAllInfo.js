export const getAllInfo = async (setInfo) => {
  fetch('/api/all_info'
    )
    .then(res => res.json())
    .then((info) => setInfo(info))
  // console.log(info)
}


// fetch('/api/posts', {
//   method: 'GET',
//   headers: new Headers({
//     'Authorization': 'Bearer ' + token[0],
//     'Content-Type': 'application/json'
//   })
// })
//   .then(res => res.json())
//   .then(posts => dispatch(getPost(posts)))