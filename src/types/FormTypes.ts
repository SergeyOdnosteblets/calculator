export interface FormTypes {
    billAmt: number;
    numOfPeople:number
    errorOfNumbers: boolean
    handleBillAmtInput: (event: any) => void
    handleSelectedTip: (event: any) => void
    handleSelectedTipButton: (number:number) => void
    setNumbersOfPeople: (event: any) => void
}