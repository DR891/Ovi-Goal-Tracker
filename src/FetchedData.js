import "./index.css"

export default function FetchedData (props){
    return(
        <div>
            {props.data.map(stats => {
                return(
                    <div>
                        <div className="progress">
                        <h4>{stats.stats[0].splits[0].stat.goals +730}</h4>
                      <progress value={stats.stats[0].splits[0].stat.goals +730} max="894" />
                        </div>
                    <ul>
                        <li>Goals:{stats.stats[0].splits[0].stat.goals}</li>
                        <li>Assits:{stats.stats[0].splits[0].stat.assists}</li>
                        <li>Games:{stats.stats[0].splits[0].stat.games}</li>
                        <li>Hits:{stats.stats[0].splits[0].stat.hits}</li>
                    </ul>
                </div>)
            })}
        </div>
    )
}