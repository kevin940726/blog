import React, { PropTypes } from "react"
import { Link } from "react-router"
import dateFormat from "dateformat"

import styles from "./PagePreview.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.preview }>
      <h2 className={ styles.title }>
        <Link to={ __url }>
          { title }
        </Link>
        {
          pageDate &&
          <small className={ styles.date }>
            { " " }
            <time key={ pageDate.toISOString() }>
              { dateFormat(pageDate, "yyyy/mm/dd") }
            </time>
          </small>
        }
      </h2>

      <div className={ styles.description }>
        { description }
        { " " }
        <Link to={ __url }>
          { "...more" }
        </Link>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
