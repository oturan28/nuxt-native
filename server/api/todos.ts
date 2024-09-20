export default defineEventHandler(async (event) => {
    return $fetch('https://jsonplaceholder.typicode.com/todos')
})
