type OmitK<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
