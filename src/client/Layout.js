const Layout = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="client.js"></script>
    </body>
  </html>
`;

export default Layout;
