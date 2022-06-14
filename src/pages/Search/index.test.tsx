import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from ".";
import store from "../../Store";

test('should show searchbar', () => {
    render(
        <Provider store={store}><Home /></Provider>);
    expect(screen.getByTestId("SearchBarForm")).toBeInTheDocument()
})