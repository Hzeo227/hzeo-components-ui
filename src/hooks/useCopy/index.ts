import { ElMessage } from 'element-plus'
// 复制文本
export const useCopy = (text: string) => {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text)
  } else {
    // 创建输入框
    const input = document.createElement('input')
    // 给输入框赋值
    input.value = text
    // 选中输入框
    input.select()
    // 执行复制操作
    document.execCommand('Copy')
    // 移出 input 输入框
    document.body.removeChild(input)
  }

  // 提示用户
  ElMessage.success('复制成功')
}
