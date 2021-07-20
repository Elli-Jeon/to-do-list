import { createContext } from 'react'

export const isModalOpened = false;

const loginModalContext = createContext(isModalOpened);

export default loginModalContext;