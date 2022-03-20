import {Accordion, Button} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {getAllInfo} from "./controllers/getAllInfo";
import {upRating} from "./controllers/upRate";
import {resetRating} from "./controllers/resetRating";
import {downRating} from "./controllers/downRating";


function App() {
  const [info, setInfo] = useState(null)
  const copyInfo = info?.slice()
  useEffect(async () => {
    await getAllInfo(setInfo)
  }, [])
  return (
    < >
      <Accordion>
        {info?.sort((a, b) =>
          b?.infoQuests.reduce((acc, el) => acc + el.rate, 0) - a?.infoQuests.reduce((acc, el) => acc + el.rate, 0)
        )?.map((category, i) =>
          <Accordion.Item eventKey={`${category.id}`}>
            <Accordion.Header>{category.title}</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                {category?.infoQuests?.sort((a, b) => b.rate - a.rate).map((question, i) =>
                  <Accordion.Item eventKey={`${i}`}>
                    <Accordion.Header>{question.title}</Accordion.Header>
                    <Accordion.Body>
                      Ответ: ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus ea quas
                      recusandae sed voluptatem voluptatibus! Consectetur eaque est ipsa, iste molestias officia
                      praesentium, quidem, quo recusandae unde vitae voluptate!<br/>
                      Был ли ответ Вам полезен? <Button onClick={(e) => {
                      upRating(category, question, setInfo, copyInfo)
                    }}>ДА</Button> <Button variant="danger" onClick={(e) => {
                      downRating(category, question, setInfo, copyInfo)
                    }}>НЕТ</Button><br/>
                      Рйтинг ответа = {question.rate}
                    </Accordion.Body>
                  </Accordion.Item>
                )}
              </Accordion>
              {/*{category.title}*/}
            </Accordion.Body>
          </Accordion.Item>)}
      </Accordion>
      <br/>
      <br/>
      <br/>
      <Button variant="success" onClick={resetRating(setInfo)}>Обнулить рейтинги</Button>
    </>
  );
}

export default App;
