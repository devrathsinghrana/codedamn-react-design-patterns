import React from "react";

const userFactory = ([...props]) => {
  const [firstName, age, lastName] = props;
  return {
    ...(firstName && { firstName }),
    ...(age && { age }),
    ...(lastName && { lastName }),
    fullName: () => `${firstName}  ${lastName}`,
    isEligibleToVote: () => (age > 18 ? "YES" : "NO"),
  };
};

const mehul = userFactory(["Mehul", 23, "Choksey"]);
const devrath = userFactory(["Devrath", 25, "Rana"]);
const john = userFactory(["John", 26, "Doe"]);

const users = [mehul, devrath, john];

const FactoryComponent = () => {
  return (
    <div>
      FactoryComponent
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Full Name - {user.fullName()}</p>
            <p>Age - {user.age}</p>
            <p>Voting eligibility - {user.isEligibleToVote()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FactoryComponent;
