import { createContext } from "./funcs";
import Failback from "./Fallback";

const { context, control, createControl } = createContext("VisibleContext");

export {
  context as VisibleContext,
  control as VisibleControl,
  createControl as createVisibleControl,
  createContext,
  Failback
};

export default {
  "VisibleContext": context,
  "VisibleControl": control,
  "CreateVisibleControl": createControl,
  createContext,
  Failback
};

