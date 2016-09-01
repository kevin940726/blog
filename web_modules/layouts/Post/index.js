import React, { Component, PropTypes } from "react"
import dateFormat from "dateformat"

import Page from "../Page"
import styles from "./Post.css"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props

    const pageDate = head.date ? new Date(head.date) : null

    return (
      <Page
        { ...props }
        header={
          <header className={ styles.header }>
          {
            pageDate &&
            <time key={ pageDate.toISOString() }>
              { dateFormat(pageDate, "yyyy/mm/dd") }
            </time>
          }
          </header>
        }
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
