import { AuthStoreGetters } from "../interfaces/store.interface";

export type CountStoreComputedGetters = {
    [Getter in keyof AuthStoreGetters]: ReturnType<AuthStoreGetters[Getter]>
} 