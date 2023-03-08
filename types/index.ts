import { Dispatch, SetStateAction } from "react";

export type SetStateFn<T = any> = Dispatch<SetStateAction<T>>;
