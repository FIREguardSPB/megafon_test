import QuestCard from "../model/QuestCard.js";
import Category from "../model/Category.js";

export async function upRatingQuestion(id, rate) {
  return await new Promise((resolve, reject) => {
    QuestCard.findByIdAndUpdate(id, {$set:{rate: rate}}, (err, doc) => {
      err ? reject(err) : resolve(doc)
    });
  })
}

export async function downRatingQuestion(id, rate) {
  return await new Promise((resolve, reject) => {
    QuestCard.findByIdAndUpdate(id, {$set:{rate: rate}}, (err, doc) => {
      err ? reject(err) : resolve(doc)
    });
  })
}

export async function createQuestionCard(document) {
  if (!document.title) {
    throw new Error('Invalid ID')
  }
  return await new Promise((resolve, reject) => {
    QuestCard.create(document, function (err, doc) {
      err ? reject(err) : resolve(doc)
    });
  })
}

export async function createCategoryCard(document) {
  return await new Promise((resolve, reject) => {
    Category.create(document, function (err, doc) {
      err ? reject(err) : resolve(doc)
    });
  })
}

export async function getCategory(id) {
  return await new Promise((resolve, reject) => {
    Category.findById(id, function (err, doc) {
      err ? reject(err) : resolve(doc)
    });
  })
}

export async function getAllCategory() {
  return new Promise((resolve, reject) => {
    Category.find((err, doc) => {
      err ? reject(err) : resolve(doc)
    })
  })
}

export async function reset(id) {
  return new Promise((resolve, reject) => {
    QuestCard.findByIdAndUpdate(id, {$set:{rate: 0}},(err, doc) => {
      err ? reject(err) : resolve(doc)
    })
  })
}

export async function getQuestionInfo(question_id) {
  return await new Promise((resolve, reject) => {
    QuestCard.findById(question_id, function (err, doc) {
      err ? reject(err) : resolve(doc)
    });
  })
}
