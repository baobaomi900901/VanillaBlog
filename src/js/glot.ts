interface FileType {
    [key: string]: Component
}
const files: Record<string, FileType> = import.meta.globEager("../assets/img/listiimgs/*.png")

export default (app: App): void => {
    // 因为通过 import.meta.globEager 返回的列表不能迭代所以直接使用 Object.keys 拿到 key 遍历
    Object.keys(files).forEach((c: string) => {
        const component = files[c]?.default
        // 挂载全局控件
        app.component(component.name as string, component)
    })
}