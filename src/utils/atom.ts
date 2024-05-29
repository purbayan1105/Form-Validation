import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ArrayType } from "./formSchema";

export const lsAtom = atomWithStorage<ArrayType>("itemkey", []);
