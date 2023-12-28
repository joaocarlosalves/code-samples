interface ILocalStorage {
    clr: VoidFunction;
    get: FunctionStringCallback;
    set: CallableFunction;
}

export const
    local = window.localStorage,
    ls: ILocalStorage = {
        clr: () => local.clear(),
        get: (item: string) => local.getItem(item),
        set: (item: string, value: string) => local.setItem(item, value)
    };
