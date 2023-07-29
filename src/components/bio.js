import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ThemeToggler from "../components/ThemeToggler"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Image of Preet Suthar"
      /> */}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://github.com/${social?.github || ``}`}>
            Checkout their Github
          </a>
        </p>
      )}{" "}
      <div>
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Bio
