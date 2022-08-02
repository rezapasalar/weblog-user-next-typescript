import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Article from '../../models/article'

interface Pagination {
    totalCount: number,
    pageSize: number,
    currentPage: number   
}

interface ArticlesState {
    articles: Article[],
    modalStatus: boolean,
    idForUpdate: number | null,
    filterValue: string,
    selectedRows: number[],
    isSelectAll: boolean,
    pagination: Pagination
}

const initialState: ArticlesState = {
    articles: [],
    modalStatus: false,
    idForUpdate: null,
    filterValue: 'all',
    selectedRows: [],
    isSelectAll: false,
    pagination: {totalCount: 0, pageSize: 10, currentPage: 1},
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state: ArticlesState, {payload: {page, data: articles, totalDocs, limit}}) => {
            state.articles = [...state.articles, ...articles]
            state.pagination = {totalCount: totalDocs, pageSize: limit, currentPage: page}
            state.selectedRows = []
            state.isSelectAll = false
        },
        setModalStatus: (state: ArticlesState, action: PayloadAction<boolean>) => {state.modalStatus = action.payload},
        setFilterValue: (state: ArticlesState, action: PayloadAction<string>) => {state.filterValue = action.payload},
        setSelectedRows: (state: ArticlesState, action: PayloadAction<number | []>) => {typeof action.payload !== 'number' ? state.selectedRows = [] : state.selectedRows.includes(action.payload) ? state.selectedRows = state.selectedRows.filter(item => item !== action.payload) : state.selectedRows.push(action.payload)},
        setIsSelectAll: (state: ArticlesState, action: PayloadAction<boolean>) => {state.isSelectAll = action.payload},
        setPagination: (state: ArticlesState, action: PayloadAction<Pagination>) => {state.pagination = action.payload},
        resetArticlesState: (state: ArticlesState) => {Object.assign(state, initialState)}
    }
})

export const {
    setArticles,
    setModalStatus,
    setFilterValue,
    setSelectedRows,
    setIsSelectAll,
    setPagination,
    resetArticlesState
} = articlesSlice.actions

export default articlesSlice.reducer