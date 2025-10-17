import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  gap: "2.125rem",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 1180,
  margin: "0 auto",
});

export const CartMenu = styled("div", {
  width: "48px",
  height: "48px",
  backgroundColor: "$gray800",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  cursor: "pointer",
  position: "relative",

  boxShadow: `
    inset 0 4px 8px rgba(255, 255, 255, 0.08),
    inset 0 -2px 6px rgba(0, 0, 0, 0.7)
  `,

  svg: {
    color: "$gray300",
  },

  span: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    borderRadius: "9999px",
    backgroundColor: "$green500",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "bold",
    width: "26px",
    height: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 0 3px $gray900",
  },
});
