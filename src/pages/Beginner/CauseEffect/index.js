import { useState } from "react";

import { CustomContainer } from "./styles";

export default function CauseEffect() {
  const persons = [
    {
      name: "Person 1",
      address: "Rua 1",
      telephone: "(22) 1111-1111",
      birthday: "15/02/2001",
    },
    {
      name: "Person 2",
      address: "Rua 2",
      telephone: "(22) 2222-2222",
      birthday: "15/02/2002",
    },
    {
      name: "Person 3",
      address: "Rua 3",
      telephone: "(22) 3333-3333",
      birthday: "15/02/2003",
    },
    {
      name: "Person 4",
      address: "Rua 4",
      telephone: "(22) 4444-4444",
      birthday: "15/02/2004",
    },
    {
      name: "Person 5",
      address: "Rua 5",
      telephone: "(22) 5555-5555",
      birthday: "15/02/2005",
    },
    {
      name: "Person 6",
      address: "Rua 6",
      telephone: "(22) 6666-6666",
      birthday: "15/02/2006",
    },
    {
      name: "Person 7",
      address: "Rua 7",
      telephone: "(22) 7777-7777",
      birthday: "15/02/2007",
    },
    {
      name: "Person 8",
      address: "Rua 8",
      telephone: "(22) 8888-8888",
      birthday: "15/02/2008",
    },
    {
      name: "Person 9",
      address: "Rua 9",
      telephone: "(22) 9999-9999",
      birthday: "15/02/2009",
    },
    {
      name: "Person 10",
      address: "Rua 10",
      telephone: "(22) 1010-1010",
      birthday: "15/02/2010",
    },
  ];
  const [person, setPerson] = useState({});

  return (
    <CustomContainer>
      <h1>CauseEffect</h1>

      <div>
        <ul className="persons-list">
          {persons.map((onePerson) => (
            <li key={onePerson.name} onClick={() => setPerson(onePerson)}>
              {onePerson.name}
            </li>
          ))}
        </ul>

        <div className="person-details">
          {person.name ? (
            <div>
              <p>
                <span>Name</span>
                {person.name}
              </p>
              <p>
                <span>Address</span>
                {person.address}
              </p>
              <p>
                <span>Telephone</span>
                {person.telephone}
              </p>
              <p>
                <span>Birthday</span>
                {person.birthday}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </CustomContainer>
  );
}
