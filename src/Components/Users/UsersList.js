
const UsersList = (props) => {

  return (
    <ul>
    {props.users.map(user =>
       <li>
         {user.name} (Age {user.age} years old)
       </li>
       )}   
    </ul>
  );
};

export default UsersList;