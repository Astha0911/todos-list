import React from 'react'

export const About = () => {
  return (
    <div className="container my-3">
      <h2>About This App</h2>
      <p>
        This Todo List app helps you organize your tasks in a simple and effective way. 
        You can add new tasks, delete the ones you’ve completed, and keep track of everything that matters. 
      </p>
      <p>
        Built with <strong>React</strong>, it uses your browser’s local storage so your tasks stay saved 
        even after refreshing the page. No sign-up, no server — just quick and easy task management.
      </p>
      <p>
        Created as a learning project, this app is also a great example of using React Hooks like 
        <code> useState </code> and <code> useEffect </code>, along with React Router for navigation.
      </p>
    </div>
  )
}
