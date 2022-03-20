import Router from "express"
import {
  createCategory,
  createQuestion, downRating,
  getAllCategoryInfo,
  getCategoryInfo,
  resetRating, upRating
} from "../controllers/RateControllers.js";

const apiRouter = new Router()

//end points
apiRouter
  .get('/rate_up', upRating) //question rate up
  .get('/rate_down', downRating)
  .post('/create_question', createQuestion)
  .post("/create_category", createCategory)
  .get("/get_category", getCategoryInfo)
  .get("/all_info", getAllCategoryInfo)
  .get('/reset', resetRating)



export default apiRouter