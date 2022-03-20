export const downRating = (category, question, setInfo, copyInfo) => {
  if (question.rate !== 0) {
    const {id} = category
    copyInfo?.find(el => el.id === id).infoQuests.find(el => {
      if (el._id === question._id) {
        el.rate = el.rate - 1
      }
    })
    fetch(`/api/rate_down?id=${question._id}&rate=${question.rate}`)
      .then((res) => res.json())
    setInfo(copyInfo)
  }
}