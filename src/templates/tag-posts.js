import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const TagPosts = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const { edges } = data.filteredPosts
  const siteTitle = `tags`
  // const allTags = data.allTags.distinct

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h3>Tag: {tag}</h3>{" "}
        {/* {allTags.map(tagItem => (
          <span key={tagItem}>
            <Link to={`/tags/${tagItem}`}>
              {}
              {tagItem}
              {}
            </Link>
          </span>
        ))} */}
        <ul>
          {edges.map(({ node }) => (
            <li key={node.id} style={{ listStyle: "none" }}>
              <div>
                <span> • </span>
                <Link className="tags-link" to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
                <p>{node.frontmatter.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagPosts

export const pageQuery = graphql`
  query ($tag: String!) {
    filteredPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    allTags: allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`
