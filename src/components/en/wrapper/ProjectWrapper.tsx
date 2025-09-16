//Este componente existe por le única razón de que el contexto de REACT solo funciona en componentes de REACT
"use client"

import SearchBar from "$_compon/en/ui/searchBar";
import ProyectosPage from "$_compon/en/ProyectosPage";
import { ProjectsProvider } from "$_app/context/Projects";

export default function ProjectsWrapper() {
    return <ProjectsProvider debounceDefault={450}>
        <SearchBar />
        <ProyectosPage />
    </ProjectsProvider>
}