
function formatName(user) {
   return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
   if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
   }
   return <h1>Hello, Stranger.</h1>;
}

export default function Hello(props) {
  return <p>
      {getGreeting(props.user)}
  </p>;
}

Hello.defaultProps = {
   user: {
      firstName: 'John',
      lastName: 'Doe'
   }
};