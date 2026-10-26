# 🐶 Ejercicio Dog

**Objetivos:**

- Realizar análisis estático de código
- Aplicar buenas prácticas de codificación
- Codificar casos de test unitario
- Analizar cobertura y profundidad del test unitario

## ⚙️ Iniciar el proyecto

1. Realiza un fork del repositorio. A partir de este punto, se trabajará en el repositorio creado en este paso.
2. Clonar el fork:

   ```bash
   git clone https://github.com/<USUARIO>/unit-dog
   ```

3. Abrir la carpeta del proyecto en **Visual Studio Code**.
4. Abrir una terminal dentro de Visual Studio Code y ejecutar:

   ```bash
   npm install
   ```

5. Una vez finalizada la instalación, ejecutar:

   ```bash
   npm run dev
   ```

6. Abrir en el navegador la dirección que aparece en la terminal.
7. Recorrer la app: presionar **Ladrar**, **Dormir** y **Despertar**, y enseñar un truco. Algunos botones todavía muestran "(mensaje vacío)" porque sus métodos no están implementados.

> 💡 `npm run dev` queda ejecutándose en esa terminal. Para el resto de los comandos (`npm run lint`, `npm run test`, etc.) abrir una terminal nueva.

## 🧹 Parte A: Análisis estático

1. En la terminal ejecutar `npm run format` y `npx eslint src/` para analizar el código
2. Ejecutar `npm run lint` para corregir automáticamente los problemas que se puedan
3. Corregir manualmente el resto de problemas reportados en `src/domain/Dog.ts`
4. Aplicar buenas prácticas de codificación (ej: nomenclatura, comentarios)
5. Implementar los métodos con `TODO` en `src/domain/Dog.ts` y verificar el resultado en la app

Hacer commit de los cambios y push al repositorio remoto

Crear un issue con título `Parte A` y subir una captura de la terminal con 0 problemas

## 🧪 Parte B: Test unitario

1. En la terminal ejecutar `npm run test`
2. Codificar casos de test unitario en `src/tests/Dog.test.ts` hasta alcanzar 100% cobertura
3. Agregar casos de test unitario para profundizar las pruebas (ej: límites, datos no válidos)

Hacer commit de los cambios y push al repositorio remoto

Crear un issue con título `Parte B` y subir una captura de la terminal que muestre ejecución de casos y cobertura 100%

## Referencias

- TypeScript: https://www.w3schools.com/typescript/
- ESLint: https://eslint.org/docs/latest/rules/
- Vitest: https://vitest.dev/api/
