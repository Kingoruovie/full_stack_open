import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({stats}) => {

  const allTotal = () => {
    return stats.good + stats.neutral + stats.bad
  }


  const averageFeedback = () => {
    return (allTotal()) / 3
  }

  const percentGood = () => {
    return `${Math.round((((stats.good/(allTotal())) * 100) * 10) / 10)}%`
  }

  
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{stats.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{stats.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{stats.bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{allTotal()}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{averageFeedback()}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{percentGood()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [ stats, setStats ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodClick = () => {
    setStats({
      ...stats, 
      good: stats.good + 1
    })
  }

  const handleNeutralClick = () => {
    setStats({
      ...stats, 
      neutral: stats.neutral + 1
    })
  }

  const handleBadClick = () => {
    setStats({
      ...stats, 
      bad: stats.bad + 1
    })
  }
  if (stats.good == 0 && stats.bad == 0 && stats.neutral == 0) {
    return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    </>
    )
  }
    
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>
      <Statistics stats={stats}/>
    </>
    
  )
}
export default App
