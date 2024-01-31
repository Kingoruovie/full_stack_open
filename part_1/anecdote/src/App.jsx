import { useState } from 'react'


const Button = ({ handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}


const MostVote = ({anecdote, value}) => {
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote}</p>
      <p>has {value} vote</p>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 8)
  }
  
  const [ selected, setSelected ] = useState(generateRandomNum())
  const [votes, setVotes] = useState(points)

  const handleNextClick = () => {
    const num = generateRandomNum()
    setSelected(num)
  }

  const handleVoteClick = (num) => {
    const new_votes = {
      ...votes,
    }
    new_votes[num] = votes[num] + 1
    setVotes(new_votes)
    
  }

  const calHighestVote = () => {
    let max = 0
    let max_position = 0
    for (let position in votes) {
      if (votes[position] > max) {
        max_position = position
        max = votes[position]

      }
    }
    return max_position
  }

  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() => handleVoteClick(selected)} text="vote"/>
      <Button handleClick={handleNextClick} text="Next anecdote"/>
      <MostVote anecdote={anecdotes[calHighestVote()]} value={votes[calHighestVote()]} />
    </div>
  )
}
export default App
