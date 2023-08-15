import React from "react";

const GlobalStyles = () => (
  <style jsx>{`
    :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
      border: 0.125rem dashed red;
      background: #fefefe;
    }
    nav {
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
    }
    nav > ul {
      padding: 4px 16px;
    }
    li {
      display: flex;
      padding: 6px 8px;
    }
    a {
      color: #067df7;
      text-decoration: none;
      font-size: 13px;
      padding-right: 10px;
    }
  `}</style>
);

export default GlobalStyles;
