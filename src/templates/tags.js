import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const TagsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { allMarkdownRemark } = data

      const tags = Array.from(
        new Set(
          allMarkdownRemark.edges
            .flatMap(edge => edge.node.frontmatter.tags)
            .filter(tag => tag !== null)
        )
      )

      return (
        <div>
          <h1>Tags</h1>
          {tags.map(tag => (
            <div key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </div>
          ))}
        </div>
      )
    }}
  />
)

export default TagsPage
