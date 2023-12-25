import { withRouter } from "react-router-dom/cjs/react-router-dom"

function Team(props){
    console.log("Team",props);
    return (
        <div>
            <p>Team works!</p>
        </div>
    )
}

// export default Team;
export default withRouter(Team);