import {
  createQuestionCard,
  createCategoryCard,
  getCategory,
  getQuestionInfo,
  getAllCategory, reset, upRatingQuestion, downRatingQuestion
} from "../service/RateService.js";

export async function createQuestion(req, res) {
  try {
    const question = await createQuestionCard(req.body)
    res.status(200).json(question)
  } catch (e) {
    res.status(500).json({e})
  }
}

export async function createCategory(req, res) {
  try {
    const category = await createCategoryCard(req.body)
    res.status(200).json(category)
  } catch (e) {
    res.status(500).json({e})
  }
}

export async function getCategoryInfo(req, res) {
  try {
    const categoryInfo = await getCategory(req.query.id)
    const {quests} = categoryInfo
    const infoQuests = await Promise.all(quests.map(async (question) => {
      return getQuestionInfo(question._id)
    }))
    res.status(200).json(infoQuests)
  } catch (e) {
    res.status(500).json({e})
  }
}

export async function getAllCategoryInfo(req, res) {
  try {
    const allCategory = await getAllCategory()
    const resultMiddle = []
    for (let category of allCategory) {
      const {quests} = category
      const infoQuests = await Promise.all(quests.map(async (question) => {
        return getQuestionInfo(question._id)
      }))
      resultMiddle.push({category, infoQuests})
    }
    const result = []
    resultMiddle.forEach((el) => {
      result.push({id: el?.category._id, title: el?.category.title, infoQuests: el?.infoQuests})
    })
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({e})
  }
}

export async function resetRating(req, res) {
  try {
    const allCategory = await getAllCategory()
    for (let category of allCategory) {
      const {quests} = category
      await Promise.all(quests.map(async (question) => {
        return reset(question._id)
      }))
    }
    return res.status(200).json({message: "RESET"})
  } catch (e) {
    res.status(500).json({e})
  }
}
export async function upRating(req, res) {
  try {
    const {id, rate} = req.query
    const resultUpRate = await upRatingQuestion(id, rate)
    return res.status(200).json(resultUpRate)
  }
  catch (e) {
    res.status(500).json({e})
  }
}

export async function downRating(req, res) {
  try {
    const {id, rate} = req.query
    const resultUpRate = await downRatingQuestion(id, rate)
    return res.status(200).json(resultUpRate)
  }
  catch (e) {
    res.status(500).json({e})
  }
}
