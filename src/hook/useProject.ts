import { ProjectsContext } from "$_app/context/Projects";
import { useContext } from "react";

export function useProject() {
    // contexto
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProject debe usarse dentro de un ProjectsProvider');
    }

    const {
        projectsParams,
        updateProjectsParams,
        setDebouncedDelay,
        isDebouncing,
        clearParams
    } = context;

    return {
        projectsParams,
        updateProjectsParams,
        setDebouncedDelay,
        isDebouncing,
        clearParams
    }
}