const Currency_f = new Intl.NumberFormat(undefined,{currency: "USD", style: "currency" })
export function formatCurrency(number: number){
    return Currency_f.format(number)
}