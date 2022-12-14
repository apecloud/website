module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      type: "doc",
      docId: "overview",
      position: "left",
      label: "Docs",
    },
    {to: '/blog', label: 'Blog', position: 'left'},
    // {to: '/typewriter', label: 'TypeWriter', position: 'left'},
    {
      href: 'https://github.com/apecloud/kubeblocks',
      position: 'right',
      className: 'header-github-link',
    },
  ],
}
