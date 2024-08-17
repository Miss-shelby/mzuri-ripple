import { numberOfProjects, projectBackings } from "../Apis/api";

export async function getProjectLength() {
    try {
        const res = await fetch(`${numberOfProjects}`);
        if (!res.ok) {
            const error = await res.json();
            console.error('Error Response:', error);
            return { error };
        }
        const data = await res.json();
        console.log('Data:', data);
        return { data };
    } catch (err) {
        console.error('Fetch error:', err);
        return { error: 'Network error or invalid JSON response' };
    }
}
export async function getProjectBacking() {
    try {
        const res = await fetch(`${projectBackings}`);
        if (!res.ok) {
            const error = await res.json();
            console.error('Error Response:', error);
            return { error };
        }
        const backingsData = await res.json();
        console.log('Data:', backingsData);
        return { backingsData };
    } catch (err) {
        console.error('Fetch error:', err);
        return { error: 'Network error or invalid JSON response' };
    }
}

