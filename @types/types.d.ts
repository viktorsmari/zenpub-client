type OmitK<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// declare type GlobalFetch = WindowOrWorkerGlobalScope
// declare module "apollo-client"{
//   export * from 'apollo-client'
//   export type WatchQueryFetchPolicy = string
// }