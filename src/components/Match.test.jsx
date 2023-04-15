import React from "react";
import { render, screen } from "@testing-library/react";

import Match from "./Match";

describe("Match", () => {
  const sampleNode = {
    id: "1",
    country: "Sample Country",
    competition: "Sample Competition",
    homeScore: { current: 1 },
    awayScore: { current: 2 },
    homeTeam: { name: "Home Team" },
    awayTeam: { name: "Away Team" },
    status: { type: "sampleStatus" },
    liveStatus: "Sample LiveStatus",
  };

  beforeEach(() => {
    render(<Match node={sampleNode} />);
  });

  it("renders the Match component with provided data", () => {
    expect(screen.getByText(sampleNode.country)).toBeInTheDocument();
    expect(screen.getByText(sampleNode.competition)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${sampleNode.homeScore.current} - ${sampleNode.awayScore.current}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(sampleNode.homeTeam.name)).toBeInTheDocument();
    expect(screen.getByText(sampleNode.awayTeam.name)).toBeInTheDocument();
  });

  it("renders LiveStatus component with the correct node prop", () => {
    const liveStatusElement = screen.getByText(sampleNode.liveStatus);
    expect(liveStatusElement).toBeInTheDocument();
  });
});
