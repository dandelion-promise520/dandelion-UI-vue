import DlButton from "./src/Button.vue";

// 具名导出
export { DlButton };
// 默认导出保持兼容
export default DlButton;

// 重新导出类型
export type { ButtonProps, ButtonInstance } from "./src/types";
