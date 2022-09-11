export interface ExchangeRatesResponse {
    rates: {
        [key: string]: number
    }
    base: string,
    data: string,
    success: boolean,
    timestamp: number
}
