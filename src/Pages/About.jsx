import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

function Contact() {
  const [users, setUsers] = useState()
  const getApiData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3").then(
      (response) => response.json()
    )
    setUsers(response)
  }
  useEffect(() => {
    getApiData()
  }, [])
  return (
    <div className="aboutContainer">
      <h2>Our Team</h2>
      <div className="owners">
        {users &&
          users.results.map((user) => (
            <Card
              key={user.id.value}
              style={{ width: "10rem", margin: "2rem" }}
            >
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>{user.name.first}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </div>
      <h2>Our History</h2>
      <p style={{ width: "50rem" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        illo culpa ut. Perferendis in totam perspiciatis! Excepturi amet
        repellat in dignissimos obcaecati facilis accusamus dolores facere ipsam
        ducimus vitae cupiditate provident, fugiat dicta enim, rerum soluta.
        Optio quos consectetur ratione aliquam aperiam voluptates assumenda ea,
        iure alias distinctio expedita sint dolor, inventore maxime consequuntur
        mollitia nam exercitationem. Expedita pariatur repellendus molestias
        officiis ex porro at corrupti ut aperiam eveniet, quisquam labore
        quidem. Aperiam saepe ducimus, dolores tenetur culpa, illum minus vel
        non optio adipisci hic cum ipsa? Incidunt deleniti ducimus reiciendis
        itaque, dolorum omnis. Deserunt commodi debitis quas reprehenderit
        asperiores.
      </p>
    </div>
  )
}

export default Contact
