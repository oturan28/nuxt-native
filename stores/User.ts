interface User {
    isAuthenticated: boolean
}
export const useUserStore = defineStore('user', () => {
    const user = ref<User>({isAuthenticated: true})
    return { user }
})
