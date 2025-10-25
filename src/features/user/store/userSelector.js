import { useSelector } from 'react-redux'

export const useUserSelector = () => useSelector(state => state.user.fullName)

export const useUserAddress = () => useSelector(state => state.user.address)
