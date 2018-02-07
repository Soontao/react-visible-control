import { createContext } from "./funcs";

const { context, control, createControl } = createContext("VisibleContext");

export { context as VisibleContext, control as VisibleControl, createControl as createVisibleControl, createContext };

export default {
  "VisibleContext": context,
  "VisibleControl": control,
  "CreateVisibleControl": createControl,
  createContext
};

