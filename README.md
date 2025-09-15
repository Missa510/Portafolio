# Mi portafolio

Este es mi portafolio como full stack developer, espero te guste <br>
(Las créditos de las imágenes estarán por acá)
<marquee>
<h3>Missa510, October 15th 2024</h3>
</marquee>

## Uso de contexto
La ruta de <code>/proyectos</code> y <code>/en/projects</code> se ha envuelto en un contexto para buscar proyectos. Estos son los parámetros que se pueden usar:

```typescript
interface ProjectParams {
    title: string,
    date: Date[],
    technologies: string[],
    hasPreview: boolean,
    hasCode: boolean,
}
```

Se rquiere al menos un parámetro para buscar entre los diferentes proyectos
(Ahora en beta)

> ¿Por qué no use mejor Vite en lugar de Astro? XDXDXDXDXDXDXD