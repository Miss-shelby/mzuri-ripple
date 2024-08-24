import { numberOfProjects, projectBackings } from "../Apis/api";


export async function getProjectLength() {
    try {
        const res = await fetch(`${numberOfProjects}`);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            return { data,error:null };
            
        } else {
            const error = await res.json();
            return { error,data:null };
        }
    } catch (error) {
        return { error: 'Network error or invalid JSON response',data:null };
    }
}

export async function getProjectBacking() {
    try {
        const res = await fetch(`${projectBackings}`);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            
            return { data,error:null };
        } else { //handles https errors like 404,401
            const error = await res.json();
            return { error,data:null };
        }
    } catch (error) { //this block catches network/server  error
        return { error: 'Network error or invalid JSON response',data:null };
    }
}


//so when theres error when fetchinf data,the data returns undefined and 
//this can lead to your code breaking if youre destructuring the properties of the data directly,so we assign null to our data and error
// respectively when we are expecting both cases.
