import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import StatusIndicator from './StatusIndicator';
import { getColor, getProgress } from '@/utils/statusUtils';

describe('StatusIndicator component', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders CircularProgressbar with correct progress value', () => {
    const status = 'running';
    const liveStatus = 40;
    const progress = getProgress(status, liveStatus);

    render(<StatusIndicator status={status} liveStatus={liveStatus} />);

    const progressBar = screen.getByTestId('CircularProgressbar');
    expect(progressBar).toBeInTheDocument();

    const path = progressBar.querySelector('.CircularProgressbar-path');
    const pathStyle = window.getComputedStyle(path);
    const pathStrokeDashoffset = parseFloat(pathStyle.strokeDashoffset);
    const pathStrokeDasharray = parseFloat(pathStyle.strokeDasharray);
    const calculatedProgress =
      100 - (pathStrokeDashoffset / pathStrokeDasharray) * 100;

    expect(calculatedProgress).toBeCloseTo(progress);
  });

  it('renders CircularProgressbar with correct color', () => {
    const status = 'running';
    const liveStatus = 40;
    const color = getColor(status);

    render(<StatusIndicator status={status} liveStatus={liveStatus} />);

    const progressBar = screen.getByTestId('CircularProgressbar');
    const path = progressBar.querySelector('path');
    expect(path).toHaveStyle(`stroke: transparent`);
  });

  it('renders CircularProgressbar with correct text', () => {
    const status = 'running';
    const liveStatus = 40;

    render(<StatusIndicator status={status} liveStatus={liveStatus} />);

    const progressBarText = screen.getByText(liveStatus.toString());
    expect(progressBarText).toBeInTheDocument();
  });

  it("does not render text for 'canceled' and 'notstarted' statuses", () => {
    const testCases = ['canceled', 'notstarted'];

    testCases.forEach(status => {
      render(<StatusIndicator status={status} liveStatus={0} />);

      const progressBarText = screen.queryByText('0');
      expect(progressBarText).toBeNull();
    });
  });

  it("renders CircularProgressbar with correct trailColor for 'canceled' and 'notstarted' statuses", () => {
    const testCases = ['canceled', 'notstarted'];

    testCases.forEach(status => {
      render(<StatusIndicator status={status} liveStatus={0} />);
      const progressBars = screen.getAllByTestId('CircularProgressbar');

      progressBars.forEach(progressBar => {
        const trail = progressBar.querySelector('.CircularProgressbar-trail');
        expect(trail).toHaveStyle('stroke: gray');
      });
    });
  });
});
