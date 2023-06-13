const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:'IND',
    style:'currency',
})
export function formatCurrency(value:number) {
    return CURRENCY_FORMATTER.format(value)
}