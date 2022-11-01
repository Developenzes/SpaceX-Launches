import { useLaunchesListQuery } from "../generated/types"
import PageGrid from "../components/PageGrid";

export default function LaunchesListPage() {
    
    const[result] = useLaunchesListQuery();
    const {data, fetching, error} = result;
    
    if(fetching) return <div>Loading...</div>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>No data</div>

    return (   
        <PageGrid data={data.launchesPast} />                        
    );
}