{/* Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, and Total. 
All data still resides in the App component, which passes the necessary data to each component using props.
Header takes care of rendering the name of the course, 
Content renders the parts and their number of exercises and 
Total renders the total number of exercises. */}

import Header from './Header';
import Content from './Content';
import Total from './Total';

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