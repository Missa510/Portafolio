//Contexto de búsqueda de proyectos
import { useRef, useCallback, createContext, useState, type ReactNode, useEffect } from "react";

interface ProjectParams {
    title: string,
    date: Date[],
    technologies: string[],
    hasPreview: boolean,
    hasCode: boolean,
}

interface ProjectsContextParams {
    projectsParams: Partial<ProjectParams>,
    updateProjectsParams: (params: Partial<ProjectParams>) => void,
    setDebouncedDelay: (ms: number | string) => void,
    isDebouncing: boolean,
    clearParams: () => void
}

export const ProjectsContext = createContext<ProjectsContextParams | undefined>(undefined);

export function ProjectsProvider(
    { children, debounceDefault = 250 }:
        { children: ReactNode, debounceDefault?: number | string }
) {
    const [projectsParams, setProjectsParams] = useState<Partial<ProjectParams>>({});
    const [isDebouncing, setIsDebouncing] = useState(false);
    const debounceRefDelay = useRef<number>(
        isNaN(Number(debounceDefault)) ? 
        250 : 
        Number(debounceDefault)
    );
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Setear un debounce específico para los proyectos
    const setDebouncedDelay = useCallback((ms: number | string) => {
        const isValid = !isNaN(Number(ms));
        if (!isValid) {
            throw new Error("Error! el parámetro del debounce debe ser un número o un string del mismo tipo")
        }
        debounceRefDelay.current = Number(ms);
    }, []);

    const updateProjectsParams = useCallback((newParams: Partial<ProjectParams>) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        setIsDebouncing(true);

        debounceTimeoutRef.current = setTimeout(() => {

            setProjectsParams(prevParams => ({
                ...prevParams,
                ...newParams,
            }));

            setIsDebouncing(false);
        }, debounceRefDelay.current);
    }, []);

    const clearParams = () => {
        setProjectsParams({});
    };

    //Limipar el timeout al desmontar el provider
    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        }
    }, [])

    return (
        <ProjectsContext.Provider value={{
            projectsParams,
            updateProjectsParams,
            setDebouncedDelay,
            isDebouncing,
            clearParams
        }}>
            {children}
        </ProjectsContext.Provider>
    );
}