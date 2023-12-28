export type ITableProps = {
    data?: DynamicTable<TableRow<[]>> | [];
    footer?: JSX.Element | string | string[];
    sticky?: boolean;
    sortable?: boolean;
    searchable?: boolean;
    search?: string | number;
    filters?: string | string[];
    page: (pg: number | string) => void;
}

export type TableRow<T> = { [K in keyof T]?: T[K] };

export type DynamicTable<T> = {
    headers: Array<keyof T> | [];
    rows: Array<TableRow<T>> | [];
};