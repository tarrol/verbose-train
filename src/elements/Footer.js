import React from 'react'

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]
  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
        )}
      </div>
    </footer>
  )
}

export default Footer