import './App.css';
import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            {DUMMY_TODOS.map((todo, index) => {
                return (<Todo key={index} text={todo} />)
            })}
        </div>
    )
}
