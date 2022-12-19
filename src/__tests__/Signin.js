import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInForm } from "../components/SignIn";

describe("SignIn", () => {
  describe("SignInForm", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByTestId } = render(
        <SignInForm onSubmit={onSubmit} />
      );

      fireEvent.changeText(getByPlaceholderText("Username"), "mira");
      fireEvent.changeText(getByPlaceholderText("Password"), "password");

      await waitFor(() => {
        fireEvent.press(getByTestId("button"));
      });
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "mira",
        password: "password",
      });
    });
  });
});
