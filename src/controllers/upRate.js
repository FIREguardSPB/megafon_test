export const upRating = (category, question, setInfo, copyInfo) => {
  const {id} = category
  copyInfo?.find(el => el.id === id).infoQuests.find(el => {
    if (el._id === question._id) {
      el.rate = el.rate + 1
    }
  })
  fetch(`/api/rate_up?id=${question._id}&rate=${question.rate}`)
    .then((res) => res.json())
  setInfo(copyInfo)
}