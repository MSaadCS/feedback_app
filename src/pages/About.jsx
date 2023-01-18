import { Link } from 'react-router-dom';
export const About = () => {
  return (
    <div className="card">
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a react app for feedback products</p>
            <p>v 1.0.0</p>
            <Link to="/">Back To Home</Link>
        </div>
    </div>
  )
}
