import DlSwitch from "./src/Switch.vue";

// 具名导出
export { DlSwitch };
// 默认导出保持兼容
export default DlSwitch;

// 重新导出类型
export type { SwitchProps } from "./src/types";
