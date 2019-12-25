import Link from 'next/link'

const Nav = () => (
  <nav>
    <Link href="/thoughts">
      <a>Thoughts</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
      }

      a:not(:last-child) {
        margin-right: 1em;
      }
    `}</style>
  </nav>
)

export default Nav
