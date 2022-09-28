export interface FormTypes {
    billAmount: number;
    numOfPeople:number
    errorOfNumbers: boolean
    handleBillAmountInput: (event: any) => void
    handleSelectedTip: (event: any) => void
    handleSelectedTipButton: (number:number) => void
    setNumbersOfPeople: (event: any) => void
}