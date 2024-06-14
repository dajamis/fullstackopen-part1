{/* Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, and Total. 
All data still resides in the App component, which passes the necessary data to each component using props.
Header takes care of rendering the name of the course, 
Content renders the parts and their number of exercises and 
Total renders the total number of exercises. */}

const Header = (props) => {
  console.log(props)
      return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
      <p>
      {props.part} {props.exercises}
      </p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
} 

const Total = ({parts}) => {
  console.log(parts)
  return  <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }
      </p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App