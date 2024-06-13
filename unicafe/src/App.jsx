import { useState } from 'react'

//button component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
//display stats per button category //reconstruct
const Statistics = ({good,neutral,bad}) => {
  const StatisticLine = ({text,value,closing}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} {closing}</td>
      </tr>
    )
  }
  const values = {
    good: 1,
    neutral: 0,
    bad: -1
  }
  const countAll = good + neutral + bad
  const mySum = values.good*good + values.bad*bad
  const avg = mySum / countAll
  const positive = good/countAll * 100
  
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={countAll} />
        <StatisticLine text="Average" value={avg} />
        <StatisticLine text="Positive" value={positive} closing="%" />
      </tbody>
    </table>
  )
}
const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const hasFeedback = (good + neutral + bad) > 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good"/>
      <Button onClick={increaseNeutral} text="neutral"/>
      <Button onClick={increaseBad} text="bad"/>
      <h1>statistics</h1>
      {hasFeedback ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App