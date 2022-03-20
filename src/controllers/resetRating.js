import {getAllInfo} from "./getAllInfo";

export const resetRating = (setInfo) => {
  return (e) => {
    fetch('/api/reset').then((res) => {
      if (res.status === 200) {
        getAllInfo(setInfo)
      }
    })
  }
  }