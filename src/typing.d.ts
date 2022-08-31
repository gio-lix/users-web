export interface DropTitleState {
    title: string
}
export interface DropState<T>  extends DropTitleState {
    submenu?: T[]
}