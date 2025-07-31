import { calculateInvestmentResults } from "../util/investment"

export default function Results({ input }) {
    const TransformedInput = {
        ...input,
        initialInvestment: input.InıtıalInvasement,
        annualInvestment: input.AnnualInvasement,
    }


    const results = calculateInvestmentResults(TransformedInput)
    console.log(results)
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(yearData=>{
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.valueEndOfYear}</td>
                        <td>{yearData.interest}</td>
                       
                    </tr>
                })}
            </tbody>
        </table>
    )
}