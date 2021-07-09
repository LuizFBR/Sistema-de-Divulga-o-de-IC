import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExamplePage from ".";
import mockData from "../../mock.data.json";
import CardIc from "../../components/CardIc";

const pageState = {
  icData: mockData,
};

describe("HomePage", () => {
  render(<ExamplePage />);
  it("Should render header", () => {
    const header = screen.getByTestId("home-page-header");
    expect(header).toBeInTheDocument();
  });
  it("should render card", () => {
    const handleOpenModal = jest.fn();
    const icMockData = pageState.icData[0];
    render(
      <CardIc
        data-testid="card-container"
        data={icMockData}
        showAllContent={false}
        handleClick={() => handleOpenModal(icMockData)}
      />
    );

    const name = screen.getByTestId("name-value");
    const description = screen.getByTestId("description-value");
    const subject = screen.getByTestId("subject-value");
    const advisor = screen.getByTestId("advisor-value");
    const email = screen.getByTestId("email-value");

    expect(name.textContent).toBe(icMockData.name);
    expect(description.textContent).toBe(icMockData.description);
    expect(subject.textContent).toBe(icMockData.subject);
    expect(advisor.textContent).toBe(icMockData.advisor.name);
    expect(email.textContent).toBe(icMockData.advisor.email);
  });
  it("should render detailed card", () => {
    const handleOpenModal = jest.fn();
    const icMockData = pageState.icData[0];
    render(
      <CardIc
        data-testid="card-container"
        data={icMockData}
        showAllContent={false}
        handleClick={() => handleOpenModal(icMockData)}
      />
    );
  });
});
