import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should renders title of page", () => {
  render(<App />);
  const title = screen.getByText(/Flowbox/i);
  expect(title).toBeInTheDocument();
});

test("should renders carousel layout when carousel tab has clicked", async () => {
  const user = userEvent.setup();
  render(<App />);
  await screen.findByText("Grid");
  const carouselTab = screen.getByTestId("data-id-Carousel");
  await user.click(carouselTab);
  expect(screen.getByTestId("test-carousel-view")).toBeInTheDocument();
});

test("should renders grid layout when grid tab has clicked", async () => {
  const user = userEvent.setup();
  render(<App />);
  await screen.findByText("Grid");
  const gridTab = screen.getByTestId("data-id-Grid");
  await user.click(gridTab);
  expect(screen.getByTestId("test-grid-view")).toBeInTheDocument();
});

test("should renders list layout when list tab has clicked", async () => {
  const user = userEvent.setup();
  render(<App />);
  await screen.findByText("Grid");
  const listTab = screen.getByTestId("data-id-List");
  await user.click(listTab);
  expect(screen.getByTestId("test-list-view")).toBeInTheDocument();
});

test("should renders card layout when card tab has clicked", async () => {
  const user = userEvent.setup();
  render(<App />);
  await screen.findByText("Grid");
  const cardTab = screen.getByTestId("data-id-Card");
  await user.click(cardTab);
  expect(screen.getByTestId("test-card-view")).toBeInTheDocument();
});

