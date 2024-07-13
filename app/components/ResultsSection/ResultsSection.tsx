"use client";

import React from "react";
import Image from "next/image";
import {
  DisplayResults,
  EmptyResultsArea,
  FinalResult,
  FinalResultText,
  FinalResultTotal,
  SubTitle,
  Text,
} from "@/app/styles";
import { ResultsSectionProps } from "@/interfaces";

const ResultsSection: React.FC<ResultsSectionProps> = ({
  results,
  isRepayment,
  formatResults,
}) => (
  <>
    {results ? (
      <div>
        <SubTitle>Your results</SubTitle>
        <Text>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </Text>
        <DisplayResults id="display_of_results">
          <FinalResultText>Your monthly repayments</FinalResultText>
          <FinalResult id="final_result_1">
            {isRepayment
              ? formatResults(results).monthlyMortgagePayment
              : formatResults(results).monthlyInterestPayment}
          </FinalResult>
          <div className="division_line"></div>
          <FinalResultText>Total you will repay over the term</FinalResultText>
          <FinalResultTotal id="final_result_2">
            {isRepayment
              ? formatResults(results).totalAmountToRepay
              : formatResults(results).costOfLoan}
          </FinalResultTotal>
        </DisplayResults>
      </div>
    ) : (
      <EmptyResultsArea id="empty_results_area">
        <Image
          src="/illustration-empty.svg"
          alt=""
          width={192}
          height={192}
          priority={false}
        />
        <SubTitle>Results shown here</SubTitle>
        <Text style={{ textAlign: "center" }}>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </Text>
      </EmptyResultsArea>
    )}
  </>
);

export default ResultsSection;
