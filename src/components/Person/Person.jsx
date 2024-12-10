import './Person.css';

const Person = (props) => {
  return (
    <div>
        Person {props.name} {props.surname} {props.age}
    </div>
  )
}

export default Person