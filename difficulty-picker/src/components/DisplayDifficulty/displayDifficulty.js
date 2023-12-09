import "../../module.css";
export function DisplayDifficulty({difficulty}){
    return <div className="container">
        {difficulty ?  `Difficulty is set to ${difficulty}`: "No difficulty set"}
    </div>
}